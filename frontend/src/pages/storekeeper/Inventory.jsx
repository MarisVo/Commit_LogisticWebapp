import { Table, Input } from 'antd'
import { AiOutlinePlus } from 'react-icons/ai'
import { useState } from 'react'
import { AiFillEdit, AiOutlineDelete } from "react-icons/ai"
import { Link } from 'react-router-dom'
function Inventory() {
    const [isModalVisible, setIsModalVisible] = useState(false)
    const columns = [
        {
            title: 'Mã chi nhánh',
            dataIndex: 'warehouse_code',
        },
        {
            title: 'Tên chi nhánh',
            dataIndex: 'warehouse_name',
        },
        {
            title: 'Số phiếu tồn kho',
            dataIndex: 'quantity',
        },
        {
            title: 'Trọng lượng tồn kho',
            dataIndex: 'weight',
        },
        {
            title: 'Vận phí tồn kho',
            dataIndex: 'fee',
        },
        // {
        //     title: 'COD tồn kho',
        //     dataIndex: 'cod',
        // },
        {
            title: '',
            dataIndex: 'detail',
            key: 'detail',
            render: (a, e) =>
                <a 
                    href='ton-kho/1'
                    // onClick={() => { setIsModalVisible(true) }}
                    className='text-blue-700 cursor-pointer'
                >Chi tiết
                </a>,
        },
    ]
    const data = [
        {
            key: 1,
            warehouse_code: 'ABCD',
            warehouse_name: '50 Bình Thạnh',
            quantity: 3000,
            weight: '216',
            fee: 1300
        },
        {
            key: 2,
            warehouse_code: 'BCDE',
            warehouse_name: '50 Tân Bình',
            quantity: 2102,
            weight: '400',
            fee: 2889
        }
    ]
    return (
        <>
            <div className="flex justify-between mb-4">
                <Input.Search
                    className='max-w-xl lg:w-[400px] mx-auto'
                    placeholder="Search" />
            </div>
            <Table
                columns={columns}
                dataSource={data}
                pagination={true}
                scroll={{ x: 700 }}

            />
        </>
    );
}

export default Inventory;