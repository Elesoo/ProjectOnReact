import React from 'react';
import { authAPI } from '../../api/api';
import { Form, Button, Input, Row } from 'antd';

const Reg = () => {
  const Submit = (formData) => {
    console.log(formData);
    authAPI.registration(formData.email, formData.phone, formData.fullName, formData.password, formData.username).then(response => {
      console.log(response);
    })
  };

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  };

  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };


  return (
    <div>
      <div style={{ textAlign: "center" }}>Регистрация</div>
      <Row justify="center" style={{ marginTop: '10px' }}>
        <Form
          {...formItemLayout}
          onFinish={Submit}
          name="register"
        >
          <Form.Item
            name="email"
            label="E-mail"
            rules={[
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="phone"
            label="Phone Number"
            rules={[{ required: true, message: 'Please input your phone number!' }]}
          >
            <Input style={{ width: '100%' }} />
          </Form.Item>

          <Form.Item
            name="fullName"
            label="Имя"
            rules={[{ required: true, message: 'Please input your nickname!', whitespace: true }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="password"
            label="Пароль"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="username"
            label="Ник"
            rules={[{ required: true, message: 'Please input your nickname!', whitespace: true }]}
          >
            <Input />
          </Form.Item>

          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              Регистрация
            </Button>
          </Form.Item>
        </Form>
      </Row>
    </div>
  );
}

export default Reg