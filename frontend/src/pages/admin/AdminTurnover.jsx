import React, { useState, useRef, useEffect, useContext } from 'react'
import { MainContext } from '../../context/MainContext';
import { Button, Input, Table, Space } from "antd";
import { SearchOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';
import { AiFillEdit, AiOutlineDelete } from 'react-icons/ai'
import AddNewOrder from '../../components/Admin/Order/AddNewOrder'
import ConfirmModal from '../../components/ConfirmModal';
import EditOrder from '../../components/Admin/Order/EditOrder';
import axios from 'axios';
import SplitProduct from '../../components/Admin/Order/SplitProduct';
import { TOKEN } from "./adminToken";


export default function AdminTurnover() {
    const { accessToken } = useContext(MainContext)
    // const api = "http://localhost:8000/api/admin/order";
    const [id, setId] = useState()
    const [dataEdit, setDataEdit] = useState()
    const [openEdit, setOpenEdit] = useState(false)
    const [openDel, setOpenDel] = useState(false)
    const [loading, setLoading] = useState(false);
    const [isDisable, setIsDisable] = useState(false)


    const [open, setOpen] = useState(false)
    const [change,setChange] = useState(1);


    const [data, setData] = useState([
        {
            _id:"123",
            total: 300,
            payment_method:"cash" ,
            paid: 150,
            type_of_turnover: "fuel",
            refund: 200,
            bill:"183932",
            order:'1379861',
            message: "Message"
        }

    ])
    // ____
    // const [data, setData] = useState()
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef(null);

    // Get data from api
    // const getDataFromApi = async () => {
    //     try {
    //         const res = await axios({
    //             url: api,
    //             method: "get",
    //             headers: { authorization: `Bearer ${accessToken}` },
    //         });
    //         // console.log(res);
    //         if (res.status === 200) {
    //             setData(res.data.data.order);
    //             console.log(data);
    //         }
    //     }
    //     catch (error) {
    //         console.log(error);
    //     }
    // }

    // // Post data:
    // const postDataToApi = async (items) => {
    //     try {
    //         const res = await axios({
    //             url: "http://localhost:8000/api/admin/order/create",
    //             method: "post",
    //             headers: { authorization: `Bearer ${accessToken}` },
    //             data: items
    //         });
    //         console.log(res);
    //         if (res.status === 200) {
    //             // setData(res.data.data);
    //             console.log(id);
    //         }
    //     }
    //     catch (error) {
    //         // console.log(error);
    //     }
    // }

    // // Edit data:
    // const editDataToApi = async (items, id) => {
    //     try {
    //         const res = await axios({
    //             url: `${api}/${id}`,
    //             method: "put",
    //             headers: { authorization: `Bearer ${accessToken}` },
    //             data: items
    //         });
    //         console.log(res);
    //         if (res.status === 200) {
    //             // setData(res.data.data)
    //         }
    //     }
    //     catch (error) {
    //         // console.log(error);
    //     }
    // }

    // // Delete data
    // const delDataToApi = async (id) => {
    //     try {
    //         const res = await axios({
    //             url: `${api}/${id}`,
    //             method: "delete",
    //             headers: { authorization: `Bearer ${accessToken}` },
    //         });
    //         // console.log(res);
    //         if (res.status === 200) {
    //             // setData(res.data.data)
    //         }
    //     }
    //     catch (error) {
    //         // console.log(error);
    //     }
    // }



    // useEffect(() => {
    //     getDataFromApi()
    //     // console.log("Bears" + accessToken);
    // }, [change])

    const handleSearch = (selectedKeys, status, dataIndex) => {
        status();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };

    const handleReset = (clearFilters) => {
        clearFilters();
        setSearchText('');
    };

    const handledit = (e, id) => {
        // const tableData = e.target.parentElement.parentElement.parentElement.querySelectorAll('td');
        // const items = data.filter(e => {
        //     return e.orderId === id;
        // })
        // console.log(items);
        // const oldData = {
        //     status: items[0].status,
        //     // product: items[0].product
        // }
        // setDataEdit(oldData);
        // setId(id)
        // setOpenEdit(true);
        // console.log(oldData);
    }

    const handleDel = (e, id) => {
        // setId(id)
        // console.log(id);
        setOpenDel(true)
    }

   



    const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, status, clearFilters }) => (
            <div
                style={{
                    padding: 8,
                }}
            >
                <Input
                    ref={searchInput}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys, status, dataIndex)}
                    style={{
                        marginBottom: 8,
                        display: 'block',
                    }}
                />
                <Space>
                    <Button
                        destination="primary"
                        onClick={() => handleSearch(selectedKeys, status, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Search
                    </Button>
                    <Button
                        onClick={() => clearFilters && handleReset(clearFilters)}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Reset
                    </Button>
                    <Button
                        destination="link"
                        size="small"
                        onClick={() => {
                            status({
                                closeDropdown: false,
                            });
                            setSearchText(selectedKeys[0]);
                            setSearchedColumn(dataIndex);
                        }}
                    >
                        Filter
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered) => (
            <SearchOutlined
                style={{
                    color: filtered ? '#1890ff' : undefined,
                }}
            />
        ),
        onFilter: (value, record) =>
            record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: (visible) => {
            if (visible) {
                setTimeout(() => searchInput.current?.select(), 100);
            }
        },
        render: (text) =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{
                        backgroundColor: '#ffc069',
                        padding: 0,
                    }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            ),
    });




    const columns = [
        {
            title: "Tổng tiền",
            dataIndex: "total",
            key: "total",
            width: "11.5%",
            onFilter: (value, record) => record.total.indexOf(value) === 0,
            sorter: (a, b) => a.total.length - b.total.length,
            sortDirections: ['descend'],
            ...getColumnSearchProps('total'),
        },
        {
            title: "Phương thức thanh toán",
            dataIndex: "payment_method",
            key: "payment_method",
            width: "12%",
            ...getColumnSearchProps('payment_method'),
        },
        {
            title: "Đã trả",
            dataIndex: "paid",
            key: "paid",
            width: "11.2%",
            ...getColumnSearchProps('paid'),
        },
        {
            title: "Hoàn tiền",
            dataIndex: "refund",
            key: "refund",
            width: "11.2%",
            ...getColumnSearchProps('refund'),
        },
        {
            title: "Kiểu doanh số",
            dataIndex: "type_of_turnover",
            key: "type_of_turnover",
            width: "12%",
            ...getColumnSearchProps('type_of_turnover'),
        },
        {
            title: 'Hóa đơn',
            dataIndex: 'bill',
            key: "bill",
            width: "12%",
            ...getColumnSearchProps('bill'),
        },

        {
            title: 'Vận đơn',
            dataIndex: 'order',
            key: "order",
            width: "12%",
            ...getColumnSearchProps('order'),
        },

        {
            title: 'Tin nhắn',
            dataIndex: 'message',
            key: "message",
            width: "12%",
        },

        {
            title: '',
            dataIndex: "action",
            width: "14.2%",
            render: (e, data) => (
                <div className="flex flex-row justify-around">
                    <button className="flex flex-row " role="button" onClick={(e) => handledit(e, data._id)}>
                        <AiFillEdit style={{
                            marginTop: "0.2rem",
                            marginRight: "0.3em"
                        }} />
                        Sửa
                    </button>
                    <button className="flex flex-row " role="button" onClick={(e) => handleDel(e, data._id)}>
                        <AiOutlineDelete style={{
                            marginTop: "0.2rem",
                            marginRight: "0.3em"
                        }} />
                        Xóa
                    </button>
                </div>
            ),
        },
    ];

    const onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };

    const acceptAddNewOrder = async (e) => {
        setLoading(true)
        setIsDisable(true)
        const tableData = e.target.parentElement.parentElement.parentElement.querySelectorAll('input')
        // postDataToApi(newItem);
        try {
            await setTimeout(() => {
                setLoading(false)
                setOpen(false)
                setIsDisable(false)
                setChange(change+1);
                // getDataFromApi()
            }, 2000)
        }
        catch {

        }
    }

    const acceptDelete = async () => {
        setLoading(true)
        setIsDisable(true)
        // delDataToApi(id)
        try {
            await setTimeout(() => {
                setChange(change+1)
                setLoading(false)
                setOpenDel(false)
                setIsDisable(false)
                // getDataFromApi()
            }, 2000)
        }
        catch {

        }
    }

    const acceptEditNewOrder = async (e) => {
        setLoading(true)
        setIsDisable(true)
        const tableData = e.target.parentElement.parentElement.parentElement.querySelectorAll('select')
        // editDataToApi(items,id)
        try {
            await setTimeout(() => {
                setChange('edit')
                setLoading(false)
                setOpenEdit(false)
                setIsDisable(false)
                // getDataFromApi()

            }, 2000)
        }
        catch {

        }
    }


    return (
        <div>
            <div className='flex justify-end mb-4'>
                <button
                    className="p-2 w-32 hover:opacity-80 border border-black border-2 "
                    onClick={() => setOpen(true)}
                >
                    +Thêm
                </button>
            </div>
            <Table
                columns={columns}
                dataSource={data}
                onChange={onChange}
            >
            </Table>


            <AddNewOrder
                isVisible={open}
                onClose={() => setOpen(false)}
                onOk={acceptAddNewOrder}
                loading={loading}
                disable={isDisable}
            />

            <EditOrder
                isVisible={openEdit}
                onOk={acceptEditNewOrder}
                loading={loading}
                disable={isDisable}
                data={dataEdit}
                onClose={() => setOpenEdit(false)}
            />

            {/* <SplitProduct
                isVisible={openSplit}
                onOk={acceptSplit}
                loading={loading}
                disable={isDisable}
                data={dataSplit}
                onClose={() => setOpenSplit(false)}
            /> */}

            <ConfirmModal
                isVisible={openDel}
                text={`xóa order`}
                onClose={() => setOpenDel(false)}
                loading={loading}
                disable={isDisable}
                onOk={acceptDelete}
            />

        </div>
    )
}