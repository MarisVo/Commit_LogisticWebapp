import {Table, Input} from 'antd'
import { useState } from 'react';

const columns = [
    {
        title: 'Tên phòng ban',
        dataIndex: 'name',
    },
    {
        title: 'Giám đốc',
        dataIndex: 'director',
    },
    {
        title: 'Vị trí',
        dataIndex: 'location',
    },
    {
        title: 'Số lượng nhân viên',
        dataIndex: 'scale',
    },
    {
        title: 'Danh sách việc làm',
        dataIndex: 'department',
    },
];
function AdminDepartment() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false);
    const [pagination, setPagination] = useState({
        current: 1,
        pageSize: 10,
    });
    const [isAddVisible, setIsAddVisible] = useState(false);

    const dataAfterFetch = [
        {

        }
    ]
    return ( 
    <div>
        <div className="flex justify-between mb-4">
                <span className="text-3xl font-bold uppercase">Department</span>

                <Input.Search
                    className='w-1/3 lg:w-[400px]'
                    placeholder="Search" />
                <button
                    className="px-5 py-2 border border-neutral-800 text-center hover:bg-slate-300"
                    onClick={() => setIsAddVisible(true)}
                >+ Thêm mới</button>
            </div>
        <Table
                columns={columns}
                rowKey={(record) => record.login.uuid}
                // dataSource={data}
                pagination={pagination}
                loading={loading}
                // onChange={handleTableChange}
            />
    </div> 
    );
}

export default AdminDepartment;