import React from 'react'
import 'antd/dist/antd.css'
import { Form, Button, Input, Select, Typography } from "antd";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const RegisForm = styled.div`
.Regis{
    height: 120vh;
    display: flex;
    flex-direction:row;
    @media (max-width: 768px) {
      flex-direction: column;
      height: 100vh;
    }
    @media (max-height: 628px) {
      flex-direction: column;
      height: 100vh;
    }
    justify-content: center;
    align-items: center;
    padding: 10px;
    background-color: #FBAB7E;
    background-image: linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%);
}

.Regis-header{
    max-width: 500px;
    width: 100%;
    background-color: #fff;
    padding: 25px 30px;
    margin-top: 10px;
    border-radius: 5px;
    box-shadow: 0 5px 10px rgba(0,0,0,0.15);
    overflow:auto;
}

.ant-typography{
    font-size: 45px;
    font-weight: 500;
    position: relative;
}

.ant-input-affix-wrapper {
    box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
}
.sign{
    text-align:right;
}`

const ButtonContainer = styled.div`
.ant-btn-primary {
    height: 100%;
    width: 100%;
    border-radius: 5px;
    border: none;
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 1px;
    cursor: pointer;
    transition: all 0.3s ease;
    background-color: #FBAB7E;
    &:hover{
        background-color: #FBAB7E;
        background-image: linear-gradient(250deg, #e3ed1f 0%, #F7CE68 100%);
    }
}`;
const { Title } = Typography;


function Register() {
  return (
    <RegisForm>
        <div className="Regis">
          <div className="Regis-header">
            <Form
                autoComplete="off"
                labelCol={{ span: 10 }}
                wrapperCol={{ span: 14 }}
                onFinish={(values) => {
                  console.log({ values });
                } }
                onFinishFailed={(error) => {
                  console.log({ error });
                } }
            >
                <Title level={2} className="text-center">
                    Đăng ký
                </Title>

                <Form.Item
                    name="name"
                    label="Tên tài khoản"
                    rules={[
                      {
                        required: true,
                        message: "Vui lòng nhập tên tài khoản",
                      },
                    ]}
                    hasFeedback
                >
                    <Input placeholder="Nhập tên tài khoản" />
                </Form.Item>

                <Form.Item
                    name="email"
                    label="Email"
                    rules={[
                        { type: "email", message: "Vui lòng nhập email có thật" },
                        ({ getFieldValue }) => ({
                          validator(_, email) {
                            if (email || getFieldValue("phone")) {
                              return Promise.resolve();
                            }
                            return Promise.reject(
                              "Vui lòng nhập email hoặc số điện thoại"
                            );
                          },
                        }),
                    ]}
                    hasFeedback
                    >
                    <Input placeholder="Nhập email" />
                </Form.Item>

                <Form.Item
                    name="phone"
                    label="Số điện thoại"
                    rules={[
                      ({ getFieldValue }) => ({
                        validator(_, phone) {
                          if (phone || getFieldValue("email")) {
                            return Promise.resolve();
                          }
                          return Promise.reject(
                            "Vui lòng nhập email hoặc số điện thoại"
                          );
                        },
                      }),
                    ]}
                    hasFeedback
                    >
                    <Input placeholder="Nhập số điện thoại" />
                </Form.Item>

                <Form.Item
                    name="password"
                    label="Mật khẩu"
                    rules={[
                        {
                          required: true,
                          message: "Vui lòng nhập mật khẩu",
                        },
                        { 
                          min: 8 ,
                          message: "Mật khẩu phải dài hơn 8 chữ số",
                        },
                    ]}
                    hasFeedback
                >
                  <Input.Password placeholder="Nhập mật khẩu" />
                </Form.Item>

                <Form.Item
                  name="confirmPassword"
                  label="Xác nhận mật khẩu"
                  dependencies={["password"]}
                  rules={[
                    {
                      required: true,
                      message: "Mật khẩu không khớp"
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue("password") === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(
                          "Mật khẩu không khớp"
                        );
                      },
                    }),
                  ]}
                  hasFeedback
                >
                  <Input.Password placeholder="Xác nhận mật khẩu" />
                </Form.Item>

                <Form.Item
                  name="address"
                  label="Địa chỉ"
                  rules={[
                    {
                      required: true,
                      message: "Vui lòng nhập địa chỉ",
                    },
                  ]}
                  hasFeedback
                >
                  <Input placeholder="Nhập địa chỉ" />
                </Form.Item>


                <Form.Item 
                  name="customerType" 
                  label="Khách hàng"
                  rules={[
                    {
                      required: true,
                      message: "Xin vui lòng chọn loại khách hàng",
                    },
                  ]}
                  hasFeedback
                >
                  <Select placeholder="Chọn loại khách hàng">
                    <Select.Option value="invidual">Cá nhân</Select.Option>
                    <Select.Option value="enterprise">Doanh nghiệp</Select.Option>
                  </Select>
                </Form.Item>

                <Form.Item
                  name="tax"
                  label="Mã số thuế"
                  rules={[
                    ({ getFieldValue }) => ({
                      validator(_, tax) {
                        if ((tax && getFieldValue("customerType") === "enterprise") || getFieldValue("customerType") === "invidual") {
                          return Promise.resolve();
                        }
                        return Promise.reject(
                          "Vui lòng nhập mã số thuế nếu là doanh nghiệp"
                        );
                      },
                    }),
                  ]}
                  hasFeedback
                >
                  <Input placeholder="Nhập mã số thuế" />
                </Form.Item>

                <Form.Item wrapperCol={{ span: 24 }}>
                    <div className='sign'>
                        Bạn đã có tài khoản?  
                        <Link to="/dang-nhap">
                            Đăng nhập
                        </Link>
                    </div>
                </Form.Item>

                <Form.Item wrapperCol={{ span: 24 }}>
                    <ButtonContainer>
                        <Button block type="primary" htmlType="submit">
                            Đăng ký
                        </Button>
                    </ButtonContainer>
                </Form.Item>
              
            </Form>
          </div>
        </div>
    </RegisForm>
  );
}

export default Register;