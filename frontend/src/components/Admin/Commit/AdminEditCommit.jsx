import { Button, Drawer, Form, Input, Select } from "antd";

import Modal from "antd/lib/modal/Modal";
import axios from "axios";
import React, { useState } from "react";
import { handleChangeFile } from "../HandleChangeFileToFormData";
const { Option } = Select;

export default function AdminEditCommit(props) {
   
  const [img, setImg] = useState("");
  const [addCommit, setAddCommit] = useState({
    heading: "",
    details: "",
    file: "",
  });
 const {heading, id,logo,detail} = props.infor
  const onFinish = (values) => {
    console.log("Success:", values);
    setAddCommit(() => {
      return { ...addCommit, heading: values.Heading, details: values.Details };
    });
    // postNewCommitAPI(addCommit);
    console.log(addCommit);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      <Drawer title="Edit" placement="right" visible={props.isModalVisible} onClose={props.onClose}>
        <Form
          name="basic"
          labelCol={{
            span: 2,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <h1 className="uppercase"> VUI LÒNG nhập commit mới </h1>
          <Form.Item
            label="Heading"
            name="Heading"
            initialValue={heading}
            rules={[
              {
                required: true,
                message: "Mời nhập tiêu đề",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Details"
            name="Details"
            rules={[
              {
                required: true,
                message: "Mời nhập chi ",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item label="Picture Upload" name="">
            <input
              type="file"
              required="true"
              onChange={(e) => handleChangeFile(e, setImg, setAddCommit, addCommit)}
              accept="image/png, image/jpeg"
            />
            <br></br>
            <img src={img} alt="" className="w-16 h-16" />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
    </div>
  );
}
