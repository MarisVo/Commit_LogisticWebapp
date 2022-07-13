import { Table, Input } from 'antd'
import { useState } from 'react';
import { AiFillEdit, AiOutlineDelete } from 'react-icons/ai'
const columns = [
    {
        title: 'Tên ứng viên',
        dataIndex: 'name',
        sorter: true,
        render: (name) => `${name.first} ${name.last}`,
        //   width: '20%',
    },
    {
        title: 'Ngày nộp hồ sơ',
        dataIndex: 'date',
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
        dataIndex: 'location',
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
                text: 'Đang đợi',
                value: 'Đang đợi',
            },
            {
                text: 'Duyệt',
                value: 'Duyệt',
            },
            {
                text: 'Loại',
                value: 'Loại',
            },
        ],
        render: (status) => (
            <>
                {
                    (status === "Duyệt" || status === "Loại") ?
                        (status === "Duyệt" ? <div className="text-green-600 font-bold bg-green-200 text-center rounded-lg py-1">Duyệt</div>
                            :
                            <div className='text-red-600 font-bold bg-red-200 text-center rounded-lg py-1'>Loại</div>)
                        :
                        <div className='text-yellow-600 font-bold bg-yellow-200 text-center rounded-lg py-1'>Đang đợi</div>

                }
            </>
        )
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
        name: {
            first: "Nguyen",
            last: "A"
        },
        date: '01/01/2021',
        department: 'Kỹ thuật',
        job: 'BA',
        location: "Hồ Chí Minh",
        status: "Duyệt"
    },
    {
        name: {
            first: "Tran",
            last: "B"
        },
        date: '05/02/2022',
        department: 'Kỹ thuật',
        job: 'QC',
        location: "Hà Nội",
        status: "Loại"
    },
    {
        name: {
            first: "Ho",
            last: "C"
        },
        date: '11/11/2021',
        department: 'Kỹ thuật',
        job: 'FED',
        location: "Hà Nội",
        status: "Đang đợi"
    },
]
function AdminApplicant() {
    const [data, setData] = useState(dataFetch)
    const [loading, setLoading] = useState(false);
    const [pagination, setPagination] = useState({
        current: 1,
        pageSize: 10,
    });
    return (
        <div>
            <div className="flex justify-between mb-4">
                <span className="text-3xl font-bold uppercase">Applicant</span>

                <Input.Search
                    className='w-1/3 lg:w-[400px]'
                    placeholder="Search" />
                <div className='w-[200px]'></div>
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

export default AdminApplicant;