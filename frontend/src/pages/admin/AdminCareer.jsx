import { Table, Input } from "antd";
import { /*useContext,*/ useEffect, useState } from "react";
import AddNewCareer from "../../components/Admin/Career/AddNewCareer";
import EditCareer from "../../components/Admin/Career/EditCareer";
import ConfirmModal from "../../components/ConfirmModal";
import { AiFillEdit, AiOutlineDelete } from "react-icons/ai";
import { END_POINT } from "../../utils/constant";
import axios from "axios";
// import { MainContext } from "../../context/MainContext";
function AdminCareer() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 2,
    total:16
  });
  const [isAddVisible, setIsAddVisible] = useState(false);
  const [isEditVisible, setIsEditVisible] = useState(false);
  const [isDeleteVisible, setIsDeleteVisible] = useState(false);
  const [isDisable, setIsDisable] = useState(false);
  const [valueCompare, setValueCompare] = useState("");
  const [dataForEdit, setDataForEdit] = useState({});
  const columns = [
    {
      title: "Tên việc làm",
      dataIndex: "name",
      sorter: (a, b) => {
        if(a.name < b.name) return -1
        if(a.name > b.name) return 1
      }
    },
    {
      title: "Hạn nộp hồ sơ",
      dataIndex: "deadline",
      sorter: (a, b) => {
        if(a.deadline < b.deadline) return -1
        if(a.deadline > b.deadline) return 1
      },
      render: (a) => <div>{a.split("T")[0]}</div>,
    },
    // {
    //   title: "Phòng ban",
    //   dataIndex: "department",
    //   filters: [
    //     {
    //       text: "Kĩ thuật",
    //       value: "Kĩ thuật",
    //     },
    //     {
    //       text: "Nhân sự",
    //       value: "Nhân sự",
    //     },
    //   ],
    //   onFilter: (value, record) => record.department === value,
    // },
    {
      title: "Loại công việc",
      dataIndex: "type",
      filters: [
        {
          text: "technical",
          value: "technical",
        },
        {
          text: "human",
          value: "human",
        },
      ],
      onFilter: (value, record) => record.type === value,
    },
    {
      title: "Mô tả",
      dataIndex: "description",
    },
    {
      title: "Địa điểm làm việc",
      dataIndex: "location",
      filters: [
        {
          text: "Hồ Chí Minh",
          value: "HCM",
        },
        {
          text: "Hà Nội",
          value: "HN",
        },
      ],
      // onFilter: (value, record) => record.locate === value,
      // onFilter: (value, record) => fetchData({location:value}),
      onFilter: (value, record) => console.log(value)


    },
    {
      title: "Trạng thái",
      dataIndex: "state",
      filters: [
        {
          text: "Đang mở",
          value: "Đang mở",
        },
        {
          text: "Đã đóng",
          value: "Đã đóng",
        },
      ],
      onFilter: (value, record) => record.state === value,
      render: (state) => (
        <>
          {state === "Đang mở" ? (
            <div className="text-green-600 font-bold bg-green-200 text-center rounded-lg py-1">
              Đang mở
            </div>
          ) : (
            <div className="text-red-600 font-bold bg-red-300 text-center rounded-lg py-1">
              Đã đóng
            </div>
          )}
        </>
      ),
    },
    {
      title: "",
      dataIndex: "action",
      render: (a, record) => (
        <div className="flex flex-row gap-y-1 gap-x-3">
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
  const fetchData = async (params={}) => {
    setLoading(true);
    try {
      const { data: response } = await axios.get(`${END_POINT}/career`,{params:params});
      console.log(response)
      setData(response.data);
      setLoading(false);
      setPagination({
        total:params?.total,
        pageSize:params?.pageSize,
        current:params?.page+1,
      })
    } catch (error) {
      console.error(error.message);
    }
  };
  useEffect(() => {
    fetchData({
      ...pagination,
      page:pagination.current-1
    });
  }, []);
  const handleTableChange = (newPagination, filters, sorter) => {
    // fetchData({
    //     sortField: sorter.field,
    //     sortOrder: sorter.order,
    //     pagination: newPagination,
    //     ...filters,
    // });
    // data.find(a=>a.)
    fetchData({
      ...newPagination,
      page:newPagination.current-1
    })
    console.log(newPagination)
    setPagination(newPagination)
  };
  const acceptDelete = async () => {
    setLoading(true);
    setIsDisable(true);
    try {
      /*await axios.delete(
        `${END_POINT}/admin/career/${valueCompare}`,
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
      const { data: response } = await axios.get(`${END_POINT}/career`, {
        params: { keyword: value },
      });
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <>
      <div className="flex justify-between mb-4">
        <span className="text-3xl font-bold uppercase">Career</span>

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
        columns={columns}
        rowKey={(record) => record._id}
        dataSource={data}
        pagination={pagination}
        loading={loading}
        onChange={handleTableChange}
        scroll={{ x: 700 }}
      />
      {isAddVisible && (
        <AddNewCareer
          onClose={() => setIsAddVisible(false)}
          refetchData={fetchData}
        />
      )}
      {isEditVisible && (
        <EditCareer
          onClose={() => setIsEditVisible(false)}
          data={dataForEdit}
          refetchData={fetchData}
        />
      )}
      <ConfirmModal //Modal delete career
        isVisible={isDeleteVisible}
        text={`xóa Công việc ${valueCompare}`}
        onClose={() => setIsDeleteVisible(false)}
        loading={loading}
        disable={isDisable}
        onOk={acceptDelete}
      />
    </>
  );
}

export default AdminCareer;
