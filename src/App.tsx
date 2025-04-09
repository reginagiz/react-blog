import './App.css';
import 'antd/dist/reset.css';
import AppHeader from './components/header/AppHeader.tsx';
import { Route, Routes } from 'react-router-dom';
import { Layout } from 'antd';
import Home from './pages/home/Home.tsx';
import Login from './pages/login/Login.tsx';
import Registration from './pages/registration/Registration.tsx';

const { Content } = Layout;

function App() {
  return (
    <>
      <AppHeader />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </>
  );
}

export default App;
