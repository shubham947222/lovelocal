import React, { useEffect, useState } from 'react';
import {
    AntDesignOutlined,
    DownOutlined,
    DownSquareOutlined,
    InfoCircleOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PlusCircleFilled,
    PlusCircleOutlined,
    SearchOutlined,
    UserOutlined,
    VideoCameraOutlined,
    WarningOutlined,
    WechatOutlined,
} from '@ant-design/icons';
import { Avatar, Button, Card, DatePicker, Layout, Menu, theme } from 'antd';
import BgCover from "../assets/bg.png"
import CardIcon1 from "../assets/cardIcon1.png"
import CardIcon2 from "../assets/cardIcon2.png"
import CardIcon3 from "../assets/cardIcon3.png"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Legend,
} from 'chart.js';
import LineChart from './LineChart';
import BarChart from './BarChart';
import AvgChart from './AvgChart';
import axios from 'axios';
ChartJS.register(
    CategoryScale, 
    LinearScale, 
    PointElement,
    LineElement,
    Title,
    Legend
);
const { Header, Sider, Content } = Layout;
const { RangePicker } = DatePicker;

const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
        {
            label: 'Retail Sales',
            data: [400, 300, 500, 1700, 600, 1800, 900, 100, 230, 234, 1200,],
            borderColor: '#8884d8',
            backgroundColor: 'rgba(136, 132, 216, 0.2)',
            tension: 0.4,
        },
    ],
};

const options = {
    responsive: true,
    plugins: {
        legend: { display: false },
    },
    scales: {
        x: { display: false },
        y: { display: false },
    },
};
const Dashboard = () => {

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    const [collapsed, setCollapsed] = useState(true);
    const [showSearch, setShowSearch] = useState(false);

    const [sales, setSales] = useState([]);
    const [orderValue, setOrderValue] = useState([]);
    const [revenue, setRevenue] = useState([]);
  
  const fetchSales = () => {
    axios
      .get('http://34.93.245.38/sale')
      .then(res => {
        console.log(res.data, "res");
        setSales(res.data);
      })
      .catch(err => {
        console.error("Error fetching sales:", err.response || err.message);
      });
  };
  const fetchOrderValue = () => {
    axios
      .get('http://34.93.245.38/order-value')
      .then(res => {
        console.log(res.data, "res");
        setOrderValue(res.data);
      })
      .catch(err => {
        console.error("Error fetching orders:", err.response || err.message);
      });
  };
  const fetchRevenue = () => {
    axios
      .get('http://34.93.245.38/revenue')
      .then(res => {
        console.log(res.data, "res");
        setRevenue(res.data);
      })
      .catch(err => {
        console.error("Error fetching revenue:", err.response || err.message);
      });
  };
  
  useEffect(() => {
    fetchSales();
    fetchOrderValue();
    fetchRevenue();
  }, []);
  
    return (
        <Layout className=''>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="demo-logo-vertical" />
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',
                            icon: <UserOutlined />,
                            label: 'Dashboard',
                        },
                        {
                            key: '2',
                            icon: <VideoCameraOutlined />,
                            label: 'Dashboard 2',
                        },
                    ]}
                />
            </Sider>
            <Layout>
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                >
                    <div className='flex items-center justify-between'>
                        <Button
                            type="text"
                            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                            onClick={() => setCollapsed(!collapsed)}
                            style={{
                                fontSize: '16px',
                                width: 64,
                                height: 64,
                            }}
                        />
                        <div className="flex items-center space-x-4 mx-3">
                            <div className={`relative ${showSearch ? "w-64" : "w-0"} overflow-hidden transition-all duration-300`}>
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="w-full h-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
                                />
                            </div>
                            <div className="lg:flex hidden items-center space-x-2">
                                <div
                                    className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full cursor-pointer"
                                    onClick={() => setShowSearch(!showSearch)}
                                >
                                    <SearchOutlined className="text-gray-600 text-md" />
                                </div>
                                <div className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full cursor-pointer">
                                    <WechatOutlined className="text-gray-600 text-md" />
                                </div>
                                <div className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full cursor-pointer">
                                    <InfoCircleOutlined className="text-gray-600 text-md" />
                                </div>
                            </div>
                            <div>
                                Shubham <DownOutlined />
                            </div>
                        </div>


                    </div>
                </Header>
                <Content
                    style={{
                        padding: 10,
                    }}
                >
                    <div
                        style={{
                            backgroundImage: `url(${BgCover})`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                        }}
                        className='flex flex-col justify-center text-dark py-10 px-4'
                    >
                        <h1 className='text-xl font-semibold'>Good afternoon, Shubham 👋</h1>
                        <p>Here is what’s happening today</p>
                    </div>
                    <div className='flex justify-between flex-wrap items-center gap-2 my-2'>
                        <Avatar.Group>
                            <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
                            <a href="https://ant.design">
                                <Avatar
                                    style={{
                                        backgroundColor: '#f56a00',
                                    }}
                                >
                                    K
                                </Avatar>
                            </a>
                            {/* <Tooltip title="Ant User" placement="top">
                                <Avatar
                                    style={{
                                        backgroundColor: '#87d068',
                                    }}
                                    icon={<UserOutlined />}
                                />
                            </Tooltip> */}
                            <Avatar
                                style={{
                                    backgroundColor: '#1677ff',
                                }}
                                icon={<AntDesignOutlined />}
                            />
                            <Avatar
                                style={{
                                    backgroundColor: '#ffffff',
                                }}
                                icon={<PlusCircleOutlined className='text-gray-400' />}
                            />
                        </Avatar.Group>
                        <RangePicker />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                        <LineChart
                            img={CardIcon1}
                            title="Retail"
                            description="SALES"
                            amount="25,780,561.45"
                            net="+49"
                            data={data}
                            options={options}
                        />
                        <LineChart
                            img={CardIcon2}
                            title="Customer"
                            description="SALES"
                            amount="19,33,489.93"
                            net="-14"
                            data={data}
                            options={options}
                        />
                        <LineChart
                            img={CardIcon3}
                            title="Key Account"
                            description="SALES"
                            amount="9,962,350.11"
                            net="29"
                            data={data}
                            options={options}
                        />
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4">
                        <BarChart />
                        <AvgChart />
                    </div>
                </Content>
            </Layout>
        </Layout>
    )
}

export default Dashboard