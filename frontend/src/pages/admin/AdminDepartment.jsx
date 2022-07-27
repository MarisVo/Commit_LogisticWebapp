import { Table, Input } from "antd";
import { AiFillEdit, AiOutlineDelete } from "react-icons/ai";
import { END_POINT } from "../../utils/constant";
import axios from "axios";
import { useState, useEffect } from "react";
import AddNewDepartment from "../../components/Admin/Department/AddDepartment";
import EditDepartment from "../../components/Admin/Department/EditDepartment";
import ConfirmModal from "../../components/ConfirmModal";

function AdminDepartment() {
  const columns = [
    {
      title: "Tên phòng ban",
      dataIndex: "name",
      sorter: (a, b) => {
        if(a.name < b.name) return -1
        if(a.name > b.name) return 1
      }
    },
    {
      title: "Trưởng ban",
      dataIndex: "director",
      sorter: (a, b) => {
        if(a.director < b.director) return -1
        if(a.director > b.director) return 1
      }
    },
    // {
    //     title: 'Vị trí',
    //     dataIndex: 'location',
    // },
    {
      title: "Mô tả",
      dataIndex: "description",
    },
    {
      title: "Địa điểm làm việc",
      dataIndex: "location",
      filters: [
        {
          text: "HN",
          value: "HN",
        },
        {
          text: "HCM",
          value: "HCM",
        },
      ],
    },
    {
      title: "Số lượng nhân viên",
      dataIndex: "scale",
      sorter: (a, b) => {
        if(a.scale < b.scale) return -1
        if(a.scale > b.scale) return 1
      }
    },
    //   {
    //     title: "Danh sách việc làm",
    //     dataIndex: "job",
    //     render: (a, e) => (
    //       <div
    //         // onClick={() => { setIsModalVisible(true) }}
    //         className="text-blue-700 cursor-pointer"
    //       >
    //         Xem
    //       </div>
    //     ),
    //   },
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
              setValueCompare(record.name);
            }}
          >
            <AiOutlineDelete className="translate-y-[1px]" />
            Xóa
          </button>
        </div>
      ),
    },
  ];
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isDisable, setIsDisable] = useState(false);
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
  });
  const [isAddVisible, setIsAddVisible] = useState(false);
  const [isEditVisible, setIsEditVisible] = useState(false);
  const [isDeleteVisible, setIsDeleteVisible] = useState(false);
  const [valueCompare, setValueCompare] = useState("");
  const [dataForEdit, setDataForEdit] = useState({});
  const fetchData = async () => {
    setLoading(true);
    try {
      const { data: response } = await axios.get(`${END_POINT}/department`);
      console.log(response);
      setLoading(false);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const acceptDelete = async () => {
    setLoading(true);
    setIsDisable(true);
    try {
      /*await axios.delete(
        `${END_POINT}/admin/department/${valueCompare}`,
        {
          headers: { authorization: `Bearer ${accessToken}` },
        }
      )*/
      setLoading(false);
      setIsDisable(false);
    } catch (error) {
      console.log(error);
    }
  };
  const handleClickEdit = (record) => {
    setIsEditVisible(true);
    const [dataEdit] = data.filter((ele) => ele.name === record.name);
    setDataForEdit(dataEdit);
  };
  const searchByKeyword = async (value) => {
    setLoading(true);
    try {
      const { data: response } = await axios.get(`${END_POINT}/department`, {
        params: { keyword: value },
      });
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <div>
      <div className="flex justify-between mb-4">
        <span className="text-3xl font-bold uppercase">Department</span>
        <Input.Search
          className="w-1/3 lg:w-[400px]"
          placeholder="Nhập từ khóa"
          onSearch={searchByKeyword}
        />
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
        // onChange={handleTableChange}
      />
      {isAddVisible && (
        <AddNewDepartment
          onClose={() => setIsAddVisible(false)}
          refetchData={fetchData}
        />
      )}
      {isEditVisible && (
        <EditDepartment
          onClose={() => setIsEditVisible(false)}
          data={dataForEdit}
          refetchData={fetchData}
        />
      )}
      <ConfirmModal //Modal delete department
        isVisible={isDeleteVisible}
        text={`xóa Phòng ban ${valueCompare}`}
        onClose={() => setIsDeleteVisible(false)}
        loading={loading}
        disable={isDisable}
        onOk={acceptDelete}
      />
    </div>
  );
}

export default AdminDepartment;
