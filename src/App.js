import React, { useEffect, useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SearchOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import axios from 'axios';
import Dashboard from './components/Dashboard';

const App = () => {
  return (
    <div className='h-[100vh]'>
    <Dashboard/>
    </div>
  );
};
export default App;