import React from 'react';
import type { FormProps } from 'antd';
import { Button, Form, Input } from 'antd';
import s from './Login.module.css';

type FieldType = {
  email?: string;
  password?: string;
};

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
  console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const Login: React.FC = () => (
  <div className={s.login}>
    <div className={s.login_container}>
      <Form
        name="basic"
        layout="vertical"
        className={s.login_form}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <h2>Вход в аккаунт</h2>
        <Form.Item<FieldType>
          label="E-mail"
          name="email"
          rules={[{ required: true, message: 'Необходимо заполнить поле email' }]}
        >
          <Input size="large" />
        </Form.Item>

        <Form.Item<FieldType>
          label="Пароль"
          name="password"
          rules={[{ required: true, message: 'Необходимо заполнить поле пароль' }]}
        >
          <Input.Password size="large" />
        </Form.Item>

        <Form.Item label={null}>
          <Button type="primary" htmlType="submit" size="large">
            Войти
          </Button>
        </Form.Item>
      </Form>
    </div>
  </div>
);

export default Login;
