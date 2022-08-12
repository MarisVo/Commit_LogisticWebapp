import { Table, Input } from "antd";
import { AiFillEdit, AiOutlineDelete, AiOutlineSearch } from "react-icons/ai";
import { END_POINT } from "../../utils/constant";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import AddNewWarehouse from "../../components/Admin/Warehouse/AddWarehouse";
import EditWarehouse from "../../components/Admin/Warehouse/EditWarehouse";
import ConfirmModal from "../../components/ConfirmModal";
import { MainContext } from "../../context/MainContext";

function AdminWarehouse() {
    const columns = [
        {
            title: 'Tên nhà kho',
            dataIndex: 'name',
            sorter: (a, b) => {
                if (a.name < b.name) return -1;
                if (a.name > b.name) return 1;
            },
        },
        {
            title: 'Số điện thoại',
            dataIndex: 'phone',
        },
        {
            title: 'Đường',
            dataIndex: 'street',
        },
        {
            title: 'Phường/Xã',
            dataIndex: 'ward',
        },
        {
            title: 'Quận/Huyện',
            dataIndex: 'district',
        },
        {
            title: 'Tỉnh/TP',
            dataIndex: 'province',
            sorter: (a, b) => {
                if (a.name < b.name) return -1;
                if (a.name > b.name) return 1;
            },
        },
        {/*
            title: 'lon',
            dataIndex: 'lon',
        },
        {
            title: 'lat',
            dataIndex: 'lat',
        */},
        {
        title: "",
        width: 160,
        dataIndex: "action",
        render: (a, record) => (
            <div className="flex flex-row gap-y-1 gap-x-3 justify-around">
            <button
                className="flex items-baseline gap-x-1 hover:text-blue-600"
                onClick={() => handleClickEdit(record)}
            >
                <AiFillEdit className="translate-y-[1px]" />
                Sửa
            </button>
            <button
                className="flex items-baseline gap-x-1 hover:text-red-600"
                onClick={() => {
                setIsDeleteVisible(true);
                setValueCompare(record._id);
                setNameCompare(record.name);
                }}
            >
                <AiOutlineDelete className="translate-y-[1px]" />
                Xóa
            </button>
            </div>
        ),
        },
    ];
    const { accessToken } = useContext(MainContext);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isDisable, setIsDisable] = useState(false);
    const [pagination, setPagination] = useState({
        current: 1,
        pageSize: 1,
        total: 3,
    });
    const [isAddVisible, setIsAddVisible] = useState(false);
    const [isEditVisible, setIsEditVisible] = useState(false);
    const [isDeleteVisible, setIsDeleteVisible] = useState(false);
    const [IdCompare, setValueCompare] = useState("");
    const [nameCompare, setNameCompare] = useState("");
    const [dataForEdit, setDataForEdit] = useState({});
    const [province, setProvince] = useState("");
    const [district, setDistrict] = useState("");

    const fetchData = async (params = {}) => {
        setLoading(true);
        try {
        const { data: response } = await axios.get(`${END_POINT}/warehouse`, {
            params: params,
        });
        setData(response.data.warehouses);
        setLoading(false);
        setPagination({
            total: params?.total,
            pageSize: params?.pageSize,
            current: params?.page + 1,
        });
        } catch (error) {
        console.error(error.message);
        }
    };
    useEffect(() => {
        fetchData({
        ...pagination,
        page: pagination.current - 1,
        });
    }, []);
    const acceptDelete = async () => {
        setLoading(true);
        setIsDisable(true);
        try {
        await axios.delete(`${END_POINT}/admin/warehouse/${IdCompare}`, {
            headers: { authorization: `Bearer ${accessToken}` },
        });
        setLoading(false);
        fetchData();
        setIsDisable(false);
        setIsDeleteVisible(false);
        } catch (error) {
        console.log(error);
        }
    };
    const handleClickEdit = (record) => {
        setIsEditVisible(true);
        const [dataEdit] = data.filter((ele) => ele.name === record.name);
        setDataForEdit(dataEdit);
    };
    const searchByKeyword = async () => {
        setLoading(true);
        try {
        const { data: response } = await axios.get(`${END_POINT}/car`, {
            params: { district: district, province: province },
        });
        setData(response.data);
        setLoading(false);
        } catch (error) {
        console.error(error.message);
        }
    };
    const handleTableChange = (newPagination, filters, sorter) => {
        const sort = sorter.order === "descend" ? `-${sorter.field}` : sorter.field;
        fetchData({
        sortBy: sort,
        ...newPagination,
        page: newPagination.current - 1,
        });
    };
    return (
        <div>
        <div className="flex justify-between mb-4">
            <span className="text-3xl font-bold uppercase">Kho bãi</span>
            
                <Input
                    className="w-1/4 lg:w-[300px]"
                    placeholder="Nhập quận, huyện"
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                />
                <Input
                    className="w-1/4 lg:w-[300px]"
                    placeholder="Nhập tỉnh thành"    
                    value={province}
                    onChange={(e) => setProvince(e.target.value)}             
                />
                <button>
                    <AiOutlineSearch  className="w-1/24 lg:w-[100px] hover:text-blue-600 text-4xl" onClick={searchByKeyword}/>
                </button>
            <button
            className="px-5 py-2 border border-neutral-800 text-center hover:bg-slate-300"
            onClick={() => setIsAddVisible(true)}
            >
            + Thêm mới
            </button>
        </div>
        <Table
            rowKey={(record) => record._id}
            columns={columns}
            dataSource={data}
            pagination={pagination}
            loading={loading}
            onChange={handleTableChange}
        />
        {isAddVisible && (
            <AddNewWarehouse
            onClose={() => setIsAddVisible(false)}
            refetchData={()=>fetchData({
                ...pagination,
                page: pagination.current - 1,
            })}
            />
        )}
        {isEditVisible && (
            <EditWarehouse
            onClose={() => setIsEditVisible(false)}
            data={dataForEdit}
            refetchData={()=>fetchData({
                ...pagination,
                page: pagination.current - 1,
            })}
            />
        )}
        <ConfirmModal //Modal delete 
            isVisible={isDeleteVisible}
            text={`xóa nhà kho ${nameCompare}`}
            onClose={() => setIsDeleteVisible(false)}
            loading={loading}
            disable={isDisable}
            onOk={acceptDelete}
        />
        </div>
    );
}

export default AdminWarehouse;




