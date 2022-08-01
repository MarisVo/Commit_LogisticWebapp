import { Table, Input } from "antd";
import { AiOutlinePlus } from "react-icons/ai";
import { useEffect, useState } from "react";
import { AiFillEdit, AiOutlineDelete } from "react-icons/ai";
import axios from "axios";
import { END_POINT } from "../../utils/constant";
function Products() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const columns2 = [
    {
      title: "Mã đơn",
      dataIndex: "code_bill",
      key: "code_bill",
    },
    {
      title: "Ngày cập nhật lần cuối",
      dataIndex: "updateAt",
      sorter: true,
    },
    {
      title: "Giờ cập nhật lần cuối",
      dataIndex: "time",
      sorter: true,
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      filters: [
        {
          text: "Đang giao hàng",
          value: "Đang giao hàng",
        },
        {
          text: "Đã hoàn thành",
          value: "Đã hoàn thành",
        },
      ],
      onFilter: (value, record) => record.status === value,
      render: (status) => (
        <>
          {status === "waiting" ? (
            <div className="text-yellow-600 max-w-[150px] font-bold bg-yellow-200 text-center rounded-lg py-1">
              Đang giao hàng
            </div>
          ) : (
            <div className="text-green-600 max-w-[150px] font-bold bg-green-300 text-center rounded-lg py-1">
              Đã hoàn thành
            </div>
          )}
        </>
      ),
    },
    {
      title: "",
      dataIndex: "detail",
      key: "detail",
      render: (a, e) => (
        <div
          onClick={() => {
            setIsModalVisible(true);
          }}
          className="text-blue-700 cursor-pointer"
        >
          Chi tiết
        </div>
      ),
    },
    {
      title: "",
      dataIndex: "action",
      render: (_, record) => (
        <div className="flex flex-row gap-y-1 gap-x-3">
          <button
            className="flex items-baseline gap-x-1 hover:text-blue-600 "
            // onClick={() => handleClickEdit(record)}
          >
            <AiFillEdit className="translate-y-[1px]" />
            Sửa
          </button>
          {/* <button
                        className="flex items-baseline gap-x-1 hover:text-red-600"
                        onClick={() => {
                            setIsDeleteVisible(true)
                            setValueCompare(record.name)
                        }}
                    >
                        <AiOutlineDelete className='translate-y-[1px]' />Xóa
                    </button> */}
        </div>
      ),
    },
  ];
  const data2 = [
    {
      key: 1,
      status: "Đang giao hàng",
      code_bill: "MXJJA0",
      updateAt: "14/02/22",
      time: "19:03",
      detail: "Chi tiết",
    },
    {
      key: 2,
      status: "Đã hoàn thành",
      code_bill: "MXJJB3",
      updateAt: "10/11/22",
      time: "17:03",
      detail: "Chi tiết",
    },
  ];
  const fetchData = async () => {
    try {
      const { data: response } = await axios.get(`${END_POINT}/bill`);
      setData(response.data);
      const {data:product}=await axios.get(`${END_POINT}/`)
      console.log(response);
      console.log(product);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="flex justify-between mb-4">
        <Input.Search className="max-w-xl lg:w-[400px] mx-auto" placeholder="Search" />
      </div>
      <Table
        columns={columns2}
        dataSource={data2}
        pagination={true}
        loading={loading}
        scroll={{ x: 700 }}
      />
    </>
  );
}

export default Products;
