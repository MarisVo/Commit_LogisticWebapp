import { useState, useEffect, useContext } from "react";
import { Form, Input, Button } from "antd";

const { Item } = Form;
function ImportShipment({ onClose }) {
  const [fornData, setFormData] = useState({});
  const [loading,setLoading] = useState(false)
  const acceptImport = () => {};
  return (
    <div className="fixed inset-0  bg-slate-600 bg-opacity-50 z-20 flex justify-center items-center">
      <div className="relative w-[700px] flex flex-col bg-white p-6 gap-y-3 animate-modal_in mx-4 rounded-xl overflow-auto">
        <div className="flex justify-between items-center gap-y-3">
          <span className="text-xl uppercase font-bold h-fit">
            Thêm hàng vào kho
          </span>
          <Button
            size="large"
            //   disabled={isDisable}
            className="hover:bg-red-500 hover:border-red-700 hover:text-white border-none"
            onClick={onClose}
          >
            x
          </Button>
        </div>
        <Form
          autoComplete="off"
          onFinish={acceptImport}
          labelCol={{
            span: 6,
          }}
          wrapperCol={{
            span: 14,
          }}
          layout="horizontal"
        >
          <Item
            label="Mã hàng hóa"
            name="productShipmentId"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập mã hàng hóa",
              },
            ]}
          >
            <Input
              value={fornData.productShipmentId}
              onChange={(e) =>
                setFormData({
                  ...fornData,
                  productShipmentId: e.target.value,
                })
              }
            />
          </Item>
          <Item
            label="Danh thu"
            name="turnover"
            rules={[
              {
                required: true,
                message: "Vui lòng không bỏ trống",
              },
              {
                pattern: new RegExp(/^[0-9]+$/),
                message: "Vui lòng chỉ nhập số",
              },
            ]}
          >
            <Input
              value={fornData.productShipmentId}
              type={Number}
              onChange={(e) =>
                setFormData({
                  ...fornData,
                  productShipmentId: e.target.value,
                })
              }
            />
          </Item>
          <div className="flex justify-end mt-2 text-sm gap-x-6">
              <Button
                size="large"
                className="hover:bg-red-500 hover:border-red-700 hover:text-white rounded-lg"
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
  );
}

export default ImportShipment;
