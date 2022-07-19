import { Outlet, Link, Navigate} from 'react-router-dom'
import {MenuUnfoldOutlined, MenuFoldOutlined} from '@ant-design/icons';
import { Button, Menu } from 'antd';
import { useState } from 'react'
import logoJT from '../assets/icons/logo-J&T.svg'

const items = [
    {
        label: (<Link to='ton-kho'>Quản lý hàng tồn kho</Link>),
        key: 'invent',
        icon:(<MenuFoldOutlined />)
    },
    {
        label: (<Link to='xuat-nhap'>Quản lý xuất nhập kho</Link>),
        key: 'flow',
        icon:(<MenuFoldOutlined />)
    },
]
function LayerStorekeeper() {
    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };
    return (
        <>
            <div className='fixed left-0 right-0 top-0 flex flex-row justify-between px-4 items-center h-20 bg-gradient-to-l from-orange-400 to-yellow-400 z-10 '>
                <div>
                    <img src={logoJT} />
                </div>
                {/* <Button
                    type="primary"
                    onClick={toggleCollapsed}
                    style={{
                        marginBottom: 16,
                    }}
                >
                    {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                </Button> */}
                <div className="flex flex-row gap-x-3 h-full justify-center items-center">
                    <div className='bg-orange-600 hover:opacity-80 px-2 py-2 rounded-lg'>
                        <Link to='ton-kho' className='font-bold text-white' >Quản lý hàng tồn kho</Link>
                    </div>
                    <div className='bg-orange-600 hover:opacity-80  px-2 py-2 rounded-lg'>
                        <Link to='xuat-nhap' className='font-bold text-white'>Quản lý đơn hàng</Link>
                    </div>
                </div>
                <div className='peer rounded-full  bg-slate-400 w-[46px] text-white p-3 mr-12 '>TK</div>
                <div className='hidden peer-hover:block absolute right-5 top-16 bg-white shadow-xl px-4 py-2 rounded-lg'>
                    Đăng xuất
                </div>
            </div>
            <div className='mt-20'>
                <Menu
                    // defaultSelectedKeys={['1']}
                    // defaultOpenKeys={['sub1']}
                    mode="inline"
                    // theme="dark"
                    inlineCollapsed={collapsed}
                    items={items}
                    className="w-[256px] h-screen"
                />
                <Outlet />
            </div>
        </>
    );
}

export default LayerStorekeeper;