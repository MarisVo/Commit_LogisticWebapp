import { Table, Form, Input } from 'antd';
import qs from 'qs';
import { useEffect, useState } from 'react';
import AddCareerModal from '../../components/Admin/Career/AddCareerModal';

const columns = [
    {
        title: 'Tên việc làm',
        dataIndex: 'name',
        sorter: true,
        // render: (name) => `${name.first} ${name.last}`,
        //   width: '20%',
    },
    {
        title: 'Hạn nộp hồ sơ',
        dataIndex: 'deadline',
        sorter: true,
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
const data2 = [
    {
        key:1,
        name:'Nhân viên vận chuyển',
        deadline:"22.08.2022",
        job:"Kĩ thuật",
        department:"HCM",
        status:"chưa xem"
    }
]
const getRandomuserParams = (params) => ({
    results: params.pagination?.pageSize,
    page: params.pagination?.current,
    ...params,
});
const { Item } = Form

function AdminCareer() {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);
    const [pagination, setPagination] = useState({
        current: 1,
        pageSize: 10,
    });
    const [isVisible, setIsVisible] = useState(false);

    const fetchData = (params = {}) => {
        setLoading(true);
        fetch(`https://randomuser.me/api?${qs.stringify(getRandomuserParams(params))}`)
            .then((res) => res.json())
            .then(({ results }) => {
                setData(results);
                setLoading(false);
                setPagination({
                    ...params.pagination,
                    total: 200, // 200 is mock data, you should read it from server
                    // total: data.totalCount,
                });
            });
    };

    useEffect(() => {
        fetchData({
            pagination,
        });
    }, []);

    const handleTableChange = (newPagination, filters, sorter) => {
        fetchData({
            sortField: sorter.field,
            sortOrder: sorter.order,
            pagination: newPagination,
            ...filters,
        });
    };

    return (
        <>
            <div className="flex justify-between mb-4">
                <span className="text-3xl font-bold uppercase">Career</span>

                <Input.Search
                className='w-1/3 lg:w-[400px]'
                placeholder="Search" />
                <button
                    className="px-5 py-2 border border-neutral-800 text-center hover:bg-slate-300"
                    onClick={()=>setIsVisible(true)}
                >+ Thêm mới</button>
            </div>
            <Table
                columns={columns}
                // rowKey={(record) => record.login.uuid}
                dataSource={data2}
                pagination={pagination}
                loading={loading}
                onChange={handleTableChange}
            />
            {/* Modal add new career start*/}
            <AddCareerModal isVisible={isVisible} closeModel={()=>setIsVisible(false)}/>


            {/* Modal add new career end*/}

        </>
    );
};

export default AdminCareer;