import React, { FC } from "react";
import { Form, Input, Button, Checkbox, Col, Row } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./index.less";

let bg = require("../../assets/imgs/login-bg.jpg");

const Login: FC = () => (
  <div className="login">
    <div className="con">
      <img src={bg} alt="登陆背景" />
      <div className="form-box">
        <Row style={{ flex: 1 }}>
          <Col offset={15} span={6} style={{ textAlign: "center",fontSize: 26,fontWeight: 'bold',marginBottom: 20, color: '#2972e1' }}>
            Potato Work
          </Col>
          <Col offset={15} span={6}>
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true }}
            >
              <Form.Item
                name="username"
                rules={[
                  { required: true, message: "请输入用户名!" },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="用户名"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "请输入密码!" },
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="密码"
                />
              </Form.Item>
              <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>记住</Checkbox>
                </Form.Item>

                <a className="login-form-forgot" href="http://www.baidu.com" style={{float:'right'}}>
                  忘记密码
                </a>
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                  style={{width:'100%'}}
                >
                  登录
                </Button>
                <a href="http://www.baidu.com">注册</a>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </div>
    </div>
  </div>
);

export default Login;
