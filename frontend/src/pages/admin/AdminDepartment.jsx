import { Table, Input } from 'antd'
import { END_POINT } from "../../utils/constant";
import axios from "axios";
import { useState, useEffect } from 'react';

const columns = [
    {
        title: 'Tên phòng ban',
        dataIndex: 'name',
    },
    {
        title: 'Trưởng ban',
        dataIndex: 'director',
    },
    // {
    //     title: 'Vị trí',
    //     dataIndex: 'location',
    // },
    {
        title: 'Số lượng nhân viên',
        dataIndex: 'scale',
    },
    {
        title: 'Danh sách việc làm',
        dataIndex: 'job',
        render: (a, e) =>
            <div
                // onClick={() => { setIsModalVisible(true) }}
                className='text-blue-700 cursor-pointer'
            >Xem</div>
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

    const dataFetch = [
        {
            key:1,
            name:'Tài chính',
            director:'Nguyen Van A',
            scale:'59'
        }
    ]
    const fetchData = async () => {
        setLoading(true)
        try {
            const {data:response} = await axios.get(
                `${END_POINT}/department`)
                setData(response.data)
                setLoading(false);         
        }
        catch(error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchData()
    }, []);
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
                rowKey={record=>record._id}
                columns={columns}
                dataSource={data}
                pagination={pagination}
                loading={loading}
            // onChange={handleTableChange}
            />
        </div>
    );
}

export default AdminDepartment;