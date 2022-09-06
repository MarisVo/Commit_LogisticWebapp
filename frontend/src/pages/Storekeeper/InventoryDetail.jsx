import { Table, Input } from "antd";
import { AiOutlinePlus } from "react-icons/ai";
import { useContext, useEffect, useState } from "react";
import { AiFillEdit, AiOutlineDelete } from "react-icons/ai";
import axios from "axios";
import { END_POINT } from "../../utils/constant";
import { MainContext } from "../../context/MainContext";

function InventoryDetail() {
  const { accessToken } = useContext(MainContext);
  const [data, setData] = useState([]);
  // const [isModalVisible, setIsModalVisible] = useState(false);
  const [isAddVisible, setIsAddVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const columns2 = [
    {
      title: "Tên sản phẩm",
      dataIndex: "name",
    },
    {
      title: "Số lượng",
      dataIndex: "quantity",
    },
    {
      title: "Đơn vị",
      dataIndex: "unit",
    },
    {
      title: "Tiền phải thu (VNĐ)",
      dataIndex: "value",
      sorter: true,
    },
    {
      title: "Thời gian nhập kho",
      dataIndex: "createdAt",
      render: (a) => a?.split("T")[0]
    },
    // {
    //     title: 'Thời gian phát hàng',
    //     dataIndex: 'fee',
    // },
    // {
    //     title: '',
    //     dataIndex: "action",
    //     render: (_, record) => (
    //         <div className='flex flex-row gap-y-1 gap-x-3'>
    //             <button
    //                 className="flex items-baseline gap-x-1 hover:text-blue-600 "
    //             // onClick={() => handleClickEdit(record)}
    //             >
    //                 <AiFillEdit className='translate-y-[1px]' />Sửa
    //             </button >
    //         </div>
    //     )
    // }
    {
      title: "",
      dataIndex: "action",
      render: (a, record) => (
        <div className="flex flex-row gap-y-1 gap-x-3">
          <button
            className="flex items-baseline gap-x-1 hover:text-blue-600"
            // onClick={() => handleClickEdit(record)}
          >
            <AiFillEdit className="translate-y-[1px]" />
            Sửa
          </button>
          <button
            className="flex items-baseline gap-x-1 hover:text-red-600"
            // onClick={() => {
            //   setIsDeleteVisible(true);
            //   setIdCompare(record._id);
            //   setNameCompare(record.name);
            // }}
          >
            <AiOutlineDelete className="translate-y-[1px]" />
            Xóa
          </button>
        </div>
      ),
    },
  ];
  const data2 = [
    {
      key: 1,
      name: "quạt",
      cost: 200,
      time_in: "10:03",
      warehouse_to: "50 Thủ Đức",
      warehouseCode_to: "ABCD",
    },
    {
      key: 2,
      name: "PC",
      cost: 921,
      time_in: "08:03",
      warehouse_to: "50 Bình Thạnh",
      warehouseCode_to: "MAXX",
    },
  ];
  const fetchData = async () => {
    setLoading(true);
    try {
      const [warehouseRes, productsRes] = await axios.all([
        axios.get(`${END_POINT}/warehouse/62e9d8b0c5e7cf9384ba18a4`, {
          headers: { authorization: `Bearer ${accessToken}` },
        }),
        axios.get(`${END_POINT}/admin/product`, {
          headers: { authorization: `Bearer ${accessToken}` },
        }),
      ]);
      const dummyData =
        warehouseRes.data.data.inventory_product_shipments.filter(
          shipment => shipment.status === "import"
        );
      const finalData = await axios.all(
        dummyData.map(async (shipment) => {
          const res = await axios.get(
            `${END_POINT}/admin/product-shipment/${shipment.shipment}`,
            {
              headers: { authorization: `Bearer ${accessToken}` },
            }
          );
          const productName = productsRes.data.data.find((product) =>
            product.product_shipments.some((pro) => pro === shipment.shipment)
          );
          return {
            ...shipment,
            unit:productName.unit,
            name: productName.name,
            ...res.data.data,
          };
        })
      );
      console.log(finalData)
      // dummyData.map((shipment) => {
      //   const getProductShipmentData = async () => {
      //     try {
      //       const res = await axios.get(
      //         `${END_POINT}/admin/product-shipment/${shipment.shipment}`,
      //         {
      //           headers: { authorization: `Bearer ${accessToken}` },
      //         }
      //       );
      // const productName = productsRes.data.data.find((product) =>
      //   product.product_shipments.some(
      //     (pro) => pro === shipment.shipment
      //   )
      // );
      //       console.log("a")
      // return {
      //   ...shipment,
      //   name: productName.name,
      //   ...res.data.data,
      // };
      //     } catch (error) {
      //       console.log(error);
      //     }
      //   };
      // });
      setData(finalData)
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="text-2xl font-bold my-5">Chi nhánh 50 Tân Bình</div>
      <div className="flex justify-end mb-4 lg:mr-5">
      <button
          className="px-5 py-2 border border-neutral-800 text-center hover:bg-slate-300"
          onClick={() => setIsAddVisible(true)}
        >
          + Thêm mới
        </button>
      </div>
      <Table
        columns={columns2}
        dataSource={data}
        loading={loading}
        pagination={true}
        scroll={{ x: 700 }}
      />
    </>
  );
}

export default InventoryDetail;
