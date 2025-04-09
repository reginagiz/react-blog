import React from 'react';
import type { FormProps } from 'antd';
import { Button, Form, Input } from 'antd';
import s from './Registration.module.css';

type FieldType = {
  email?: string;
  password?: string;
  fullName?: string;
};

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
  console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const Registration: React.FC = () => (
  <div className={s.registration}>
    <div className={s.registration_container}>
      <Form
        name="basic"
        layout="vertical"
        className={s.registration_form}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <h2>Создание аккаунта</h2>
        <Form.Item<FieldType>
          label="E-mail"
          name="email"
          rules={[{ required: true, message: 'Необходимо заполнить поле email' }]}
        >
          <Input size="large" />
        </Form.Item>

        <Form.Item<FieldType>
          label="Полное имя"
          name="fullName"
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
            Зарегистрироваться
          </Button>
        </Form.Item>
      </Form>
    </div>
  </div>
);

export default Registration;
