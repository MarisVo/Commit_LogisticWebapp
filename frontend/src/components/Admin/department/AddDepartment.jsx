import { useState } from "react";
import { Form, Input, DatePicker, Button } from "antd";
import { END_POINT } from "../../../utils/constant";
import axios from "axios";

const { Item } = Form;
function AddNewDepartment({ onClose, refetchData }) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [isDisable, setIsDisable] = useState(false);
  const acceptAddNewDepartment = async () => {
    setLoading(true);
    setIsDisable(true);
    try {
    //   await axios.post(`${END_POINT}/admin/career`, data, {
    //     headers: { authorization: `Bearer ${accessToken}` },
    //   });
      setLoading(false);
      setIsDisable(false);
      onClose();
      refetchData();
    } catch {}
  };
  return (
    <>
      <div className="fixed inset-0  bg-slate-600 bg-opacity-50 z-20 flex justify-center items-center">
        <div className="relative w-[700px] flex flex-col bg-white p-6 gap-y-3 animate-modal_in mx-4 rounded-xl overflow-auto">
          <div className="flex justify-between items-center gap-y-3">
            <span className="text-xl uppercase font-bold h-fit">
              Thêm phòng ban mới
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
            <Item label="Tên phòng ban">
              <Input />
            </Item>
            <Item label="Tên trưởng ban">
              <Input />
            </Item>
            <Item label="Mô tả">
              <Input />
            </Item>
            <Item label="Địa điểm làm việc">
              <Input />
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
                onClick={acceptAddNewDepartment}
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

export default AddNewDepartment;
