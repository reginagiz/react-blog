import { Breadcrumb, Button, Layout, Menu, Row, theme } from 'antd';
import React from 'react';
import s from './AppHeader.module.css';
import { Link } from 'react-router-dom';

const { Header } = Layout;
const AppHeader: React.FC = () => {
  return (
    <Header className={s.header}>
      <div className={s.header_container}>
        <Link to="/">
          <Button type="primary">Регина блог</Button>
        </Link>
        <div className={s.buttons_container}>
          <Link to="/login">
            <Button type="primary" ghost>
              Войти
            </Button>
          </Link>
          <Link to="/registration">
            <Button type="primary">Создать аккаунт</Button>
          </Link>
        </div>
      </div>
    </Header>
  );
};

export default AppHeader;
