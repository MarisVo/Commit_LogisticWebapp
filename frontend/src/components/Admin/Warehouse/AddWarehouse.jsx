import { useContext, useState } from "react";
import { Form, Input, Button } from "antd";
import { END_POINT } from "../../../utils/constant";
import axios from "axios";
import { MainContext } from "../../../context/MainContext";

const { Item } = Form;
function AddNewWarehouse({ onClose, refetchData }) {
  const { accessToken } = useContext(MainContext);
  const [data, setData] = useState({
    name: "",
    phone: "",
    street: "",
    ward: "",
    district: "",
    province: ""
  });
  console.log(data);
  const [loading, setLoading] = useState(false);
  const [isDisable, setIsDisable] = useState(false);
  const acceptAddNewDepartment = async () => {
    setLoading(true);
    // setIsDisable(true);
    try {
      await axios.post(`${END_POINT}/admin/warehouse`, data, {
        headers: { authorization: `Bearer ${accessToken}` },
      });
      setLoading(false);
      setIsDisable(false);
      refetchData();
      onClose();
    } catch {}
  };
  return (
    <>
      <div className="fixed inset-0  bg-slate-600 bg-opacity-50 z-20 flex justify-center items-center">
        <div className="relative w-[700px] flex flex-col bg-white p-6 gap-y-3 animate-modal_in mx-4 rounded-xl overflow-auto">
          <div className="flex justify-between items-center gap-y-3">
            <span className="text-xl uppercase font-bold h-fit">
              Thêm nhà kho mới
            </span>
            <Button
              size="large"
              disabled={isDisable}
              className={
                !isDisable &&
                "hover:bg-red-500 hover:border-red-700 hover:text-white border-none"
              }
              onClick={onClose}
            >
              x
            </Button>
          </div>
          <Form
            autoComplete="off"
            onFinish={acceptAddNewDepartment}
            labelCol={{
              span: 6,
            }}
            wrapperCol={{
              span: 14,
            }}
            layout="horizontal"
          >
            <Item
              label="Tên nhà kho"
              name="name"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập tên nhà kho",
                },
              ]}
            >
              <Input
                value={data.name}
                onChange={(e) =>
                  setData({
                    ...data,
                    name: e.target.value,
                  })
                }
              />
            </Item>
            <Item
              label="Số điện thoại"
              name="phone"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập số điện thoại",
                },
              ]}
            >
              <Input
                value={data.phone}
                onChange={(e) =>
                  setData({
                    ...data,
                    phone: e.target.value,
                  })
                }
              />
            </Item>
            <Item
              label="Đường"
              name="street"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập tên đường",
                },
              ]}
            >
              <Input
                value={data.street}
                onChange={(e) =>
                  setData({
                    ...data,
                    street: e.target.value,
                  })
                }
              />
            </Item> 
            <Item
              label="Phường/Xã"
              name="ward"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập tên phường/xã",
                },
              ]}
            >
              <Input
                value={data.ward}
                onChange={(e) =>
                  setData({
                    ...data,
                    ward: e.target.value,
                  })
                }
              />
            </Item>    
            <Item
              label="Quận/Huyện"
              name="district"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập tên quận/huyện",
                },
              ]}
            >
              <Input
                value={data.district}
                onChange={(e) =>
                  setData({
                    ...data,
                    district: e.target.value,
                  })
                }
              />
            </Item>    
            <Item
              label="Tỉnh/TP"
              name="province"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập tên tỉnh/TP",
                },
              ]}
            >
              <Input
                value={data.province}
                onChange={(e) =>
                  setData({
                    ...data,
                    province: e.target.value,
                  })
                }
              />
            </Item>              
            <div className="flex justify-end mt-2 text-sm gap-x-6">
              <Button
                size="large"
                disabled={isDisable}
                className={
                  !isDisable &&
                  "hover:bg-red-500 hover:border-red-700 hover:text-white rounded-lg"
                }
                onClick={onClose}
              >
                Hủy
              </Button>
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                loading={loading}
                className="rounded-lg"
              >
                Xác nhận
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}

export default AddNewWarehouse;
