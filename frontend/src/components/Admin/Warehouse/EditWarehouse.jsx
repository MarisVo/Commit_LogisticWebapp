import { useContext, useState } from "react";
import { Form, Input, DatePicker, Button } from "antd";
import axios from "axios";
import { END_POINT } from "../../../utils/constant";
import { MainContext } from "../../../context/MainContext";

const { Item } = Form;
function EditWarehouse({ onClose, data, refetchData }) {
  const {accessToken} = useContext(MainContext)
  const [dataEdit, setDataEdit] = useState(data);
  const [loading, setLoading] = useState(false);
  const [isDisable, setIsDisable] = useState(false);
  console.log("data là", dataEdit);
  const acceptEditDepartment = async () => {
    setLoading(true);
    // setIsDisable(true);
    try {
      await axios.put(`${END_POINT}/admin/warehouse/${data._id}`, dataEdit, {
        headers: { authorization: `Bearer ${accessToken}` },
      });
      setLoading(false);
      // setIsDisable(false);
      refetchData();
      onClose();
    } catch(error) {
      console.log(error)
    }
  };
  return (
    <>
      <div className="fixed inset-0  bg-slate-600 bg-opacity-50 z-20 flex justify-center items-center">
        <div className="relative w-[700px] flex flex-col bg-white p-6 gap-y-3 animate-modal_in mx-4 rounded-xl overflow-auto">
          <div className="flex justify-between items-center gap-y-3">
            <span className="text-xl uppercase font-bold h-fit">
              Chỉnh sửa thông tin nhà kho
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
            labelCol={{
              span: 6,
            }}
            wrapperCol={{
              span: 14,
            }}
            layout="horizontal"
          >
            <Item label="Tên nhà kho">
              <Input
                value={dataEdit.name}
                onChange={(e) =>
                  setDataEdit({
                    ...dataEdit,
                    name: e.target.value,
                  })
                }
              />
            </Item>
           
            <Item label="Số điện thoại">
              <Input
                value={dataEdit.phone}
                onChange={(e) =>
                  setDataEdit({
                    ...dataEdit,
                    phone: e.target.value,
                  })
                }
              />
            </Item>
            <Item label="Đường">
              <Input
                value={dataEdit.street}
                onChange={(e) =>
                  setDataEdit({
                    ...dataEdit,
                    street: e.target.value,
                  })
                }
              />
            </Item>
            <Item label="Phường/Xã">
              <Input
                value={dataEdit.ward}
                onChange={(e) =>
                  setDataEdit({
                    ...dataEdit,
                    ward: e.target.value,
                  })
                }
              />
            </Item>
            <Item label="Quận/Huyện">
              <Input
                value={dataEdit.district}
                onChange={(e) =>
                  setDataEdit({
                    ...dataEdit,
                    district: e.target.value,
                  })
                }
              />
            </Item>
            <Item label="Tỉnh/TP">
              <Input
                value={dataEdit.province}
                onChange={(e) =>
                  setDataEdit({
                    ...dataEdit,
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
                size="large"
                loading={loading}
                onClick={acceptEditDepartment}
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

export default EditWarehouse;
