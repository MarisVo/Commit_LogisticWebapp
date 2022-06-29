import React from 'react'
import 'antd/dist/antd.css'
import { Form, Button, Input, Typography } from "antd";
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LoginForm = styled.div`
.Login{
    height: 100vh;
    display: flex;
    flex-direction:row;
    @media (max-width: 768px) {
      flex-direction: column;
    }
    @media (max-height: 628px) {
      flex-direction: column;
    }
    justify-content: center;
    align-items: center;
    padding-top: 100px;
    padding-bottom: 50px;
    background-color: #FBAB7E;
    background-image: linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%);
    overflow:auto;
}

.Login-header{
    max-width: 500px;
    width: 100%;
    background-color: #fff;
    padding: 25px 30px;
    border-radius: 5px;
    box-shadow: 0 5px 10px rgba(0,0,0,0.15);
}

.ant-typography{
    font-size: 45px;
    font-weight: 500;
    position: relative;
}

.ant-input-affix-wrapper {
    box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
}
.ant-select {
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

function Login() {
  return (
    <LoginForm>
        <div className="Login">
          <div className="Login-header">
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
                    Đăng nhập
                </Title>

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

                <Form.Item wrapperCol={{ span: 24 }}>
                    <div className='sign'>
                        Bạn chưa có tài khoản?  
                        <Link to="/register" className="font-semibold text-blue-700">
                            Đăng ký tài khoản
                        </Link>
                    </div>
                </Form.Item>

                <Form.Item wrapperCol={{ span: 24 }}>
                    <div className='sign'>
                        <Link to="/forgetpass" className="font-semibold text-blue-700">
                            Quên mật khẩu
                        </Link>
                    </div>
                </Form.Item>

                <Form.Item wrapperCol={{ span: 24 }}>
                    <ButtonContainer>
                        <Button block type="primary" htmlType="submit">
                            Đăng nhập
                        </Button>
                    </ButtonContainer>
                </Form.Item>
              
            </Form>
          </div>
        </div>
    </LoginForm>
  );
}

export default Login;