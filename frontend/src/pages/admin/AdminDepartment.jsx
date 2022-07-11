import {Table, Modal} from 'antd'
import { useState } from 'react';

const columns = [
    {
        title: 'Phòng ban',
        dataIndex: 'department',
    },
    {
        title: 'Hạn nộp hồ sơ',
        dataIndex: 'date',
        sorter:true,
    },
    {
        title: 'Phòng ban',
        dataIndex: 'department',
        filters: [
            {
                text: 'Kĩ thuật',
                value: 'technical',
            },
            {
                text: 'Nhân sự',
                value: 'human',
            },
        ],
    },
    {
        title: 'Vị trí làm việc',
        dataIndex: 'job',
        filters: [
            {
                text: 'noname',
                value: 'technical',
            },
            {
                text: 'noname',
                value: 'human',
            },
        ],
    },
    {
        title: 'Địa điểm làm việc',
        dataIndex: 'department',
        filters: [
            {
                text: 'Hồ Chí Minh',
                value: 'Hồ Chí Minh',
            },
            {
                text: 'Hà Nội',
                value: 'Hà Nội',
            },
        ],
    },
    {
        title: 'Trạng thái',
        dataIndex: 'status',
        filters: [
            {
                text: 'Đang mở',
                value: 'open',
            },
            {
                text: 'Đã đóng',
                value: 'closed',
            },
        ],
    },
];
function AdminDepartment() {
    const [loading, setLoading] = useState(false);
    const [pagination, setPagination] = useState({
        current: 1,
        pageSize: 10,
    });
    return ( 
    <div>
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