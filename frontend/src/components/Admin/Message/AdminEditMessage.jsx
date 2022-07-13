import { Button, Form, Input, DatePicker } from "antd";
import axios from "axios";
import React from "react";
const { TextArea } = Input;

export default function AdminEditMessage(props) {
  const { isModalVisibleEdit, onClose, infor, setDataEditMessage } = props;

  const postNewEditMessageAPI = async (newData, id) => {
    try {
      const result = await axios({
        url: `url${id}`,
        method: "post",
        data: newData,
        headers: "Bearer",
      });
      if (result.status === 200) {
        alert("cap nhập thành công");
      }
    } catch (error) {}
  };

  const onFinish = (values) => {
    // console.log("Success:", values);
    setDataEditMessage(() => {
      return { ...values };
    });
    // console.log(infor);
    // send new commit to backend
    postNewEditMessageAPI(infor, infor.id);
  };

  const onFinishFailed = (errorInfo) => {
    // console.log("Failed:", errorInfo);
  };
  return (
    <>
      {isModalVisibleEdit && (
        <div className="fixed inset-0 bg-slate-600 bg-opacity-50 z-20 flex justify-center items-center ">
          <div className="relative w-[700px] flex flex-col bg-white bg-opacity-100 p-6 rounded-xl gap-y-3 animate-modal_in">
            <Form
              name="basic"
              labelCol={{
                span: 4,
              }}
              wrapperCol={{
                span: 16,
              }}
              initialValues={
                {
                  // remember: true,
                }
              }
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <h1 className="uppercase"> VUI LÒNG nhập Message mới </h1>
              <Form.Item
                label="Name"
                name="name"
                rules={[
                  {
                    required: true,
                    message: "Mời nhập tiêu đề",
                  },
                ]}
                initialValue={infor.name}
                onChange={(e) => {
                  setDataEditMessage(() => {
                    return { ...infor, name: e.target.value };
                  });
                }}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Phone"
                name="Phone"
                initialValue={infor.phone}
                rules={[
                  {
                    required: true,
                    message: "nhập số phone",
                    type: "number/text",
                  },
                ]}
                onChange={(e) => {
                  setDataEditMessage(() => {
                    return { ...infor, phone: e.target.value };
                  });
                }}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Email"
                name="email"
                initialValue={infor.email}
                rules={[
                  {
                    required: true,
                    message: "Mời nhập email",
                    type: "email",
                  },
                ]}
                onChange={(e) => {
                  setDataEditMessage(() => {
                    return { ...infor, email: e.target.value };
                  });
                }}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="message"
                name="message"
                initialValue={infor.message}
                rules={[
                  {
                    required: true,
                    message: "Mời nhập chi tiết",
                  },
                ]}
                onChange={(e) => {
                  setDataEditMessage(() => {
                    return { ...infor, message: e.target.value };
                  });
                }}
              >
                <TextArea />
              </Form.Item>
              <Form.Item
                label="Ngày gửi "
                name='date'
                initialValue={infor.date}
                onChange={(e) => {
                  setDataEditMessage(() => {
                    return { ...infor, date: e.target.value };
                  });
                }}
              >
                <DatePicker />
              </Form.Item>
              <Form.Item
                wrapperCol={{
                  offset: 13,
                  span: 16,
                }}
              >
                <Button
                  type="primary"
                  htmlType="submit"
                  className="  bg-gradient-to-r from-orange-500 to-yellow-400 px-8 py-2 rounded-lg hover:opacity-80"
                >
                  Submit
                </Button>
                <Button
                  onClick={onClose}
                  type="primary"
                  htmlType=""
                  className=" bg-gradient-to-r from-red-600 to-red-500 px-4 py-2 rounded-lg hover:opacity-80"
                >
                  Hủy
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      )}
    </>
  );
}
