import React from 'react';
import { Form, Button, Input, Row } from 'antd';
import { authAPI } from '../../api/api';
import { connect } from 'react-redux';
import {setUserAC} from '../../redux/Reducer/authReducer'
import { Redirect } from 'react-router-dom';


const Login = (props) => {

  if( props.isAuth === true) return <Redirect to={"/gallery"}/>

  const Submit = (formData) => {
    console.log(formData);
    authAPI.login(formData.username, formData.password).then(response => {
      if( response.status === 201){
        let {id, name, randomId, secret} = response.data
        props.setUserAC(id, name, randomId, secret, true)
      }
    })
  }

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
      <div style={{ textAlign: "center" }}>Вход</div>
      <Row justify="center" style={{ marginTop: '10px' }}>
        <Form
          onFinish={Submit}
          {...formItemLayout}
          name = "login"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              Войти
            </Button>
          </Form.Item>
        </Form>
      </Row>

    </div>
  );
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {setUserAC})(Login);