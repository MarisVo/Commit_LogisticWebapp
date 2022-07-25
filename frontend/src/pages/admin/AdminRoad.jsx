import { Table, Input } from 'antd'
import { useState } from 'react';
import { AiFillEdit, AiOutlineDelete } from 'react-icons/ai'
const columns = [
    {
        title: 'Xe',
        dataIndex: 'name',
    },
    {
        title: 'Điểm bắt đầu',
        dataIndex: 'start',
    },
   
    {
        title: 'Điểm kết thúc',
        dataIndex: 'end',
    },
    {
        title: 'Đơn hàng',
        dataIndex: 'order',
    },
    {
        title: '',
        dataIndex: "action",
        render: (a, b) => (
            <div className='flex flex-row gap-y-1 gap-x-3'>
                <button
                    className="flex items-baseline gap-x-1 "
                // onClick={}
                >
                    <AiFillEdit className='translate-y-[1px]' />Sửa
                </button >
                <button
                    className="flex items-baseline gap-x-1 "
                // onClick={() => {
                //     setIsDeleteVisible(true)
                //     setValueCompare(b.name)

                // }}
                >
                    <AiOutlineDelete className='translate-y-[1px]' />Xóa
                </button>

            </div>
        )
    }

];
const dataFetch = [
    {
        name: "1234",
        start:"1",
        end: "2",
        order: "41426"
    },
    {
        name: "126934",
        start:"3",
        end: "4",
        order: "99999"
    },
    {
        name: "5A52",
        start:"10",
        end: "20",
        order: "12824"
    },
]
function AdminRoad() {
    const [data, setData] = useState(dataFetch)
    const [loading, setLoading] = useState(false);
    const [pagination, setPagination] = useState({
        current: 1,
        pageSize: 10,
    });
    return (
        <div>
            <div className="flex justify-between mb-4">
                <span className="text-3xl font-bold uppercase">Road</span>

                <Input.Search
                    className='w-1/3 lg:w-[400px]'
                    placeholder="Search" />
                <button className="px-5 py-2 border border-neutral-800 text-center hover:bg-slate-300">
                    + Thêm mới
                </button>
            </div>
            <Table
                columns={columns}
                dataSource={data}
                pagination={pagination}
                loading={loading}
            // onChange={handleTableChange}
            />
        </div>
    );
}

export default AdminRoad;