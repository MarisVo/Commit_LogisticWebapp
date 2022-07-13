import { Table, Form, Input } from 'antd';
import { useEffect, useState } from 'react';
import AddNewCareer from '../../components/Admin/Career/AddNewCareer';
import EditCareer from '../../components/Admin/Career/EditCareer';
import ConfirmModal from '../../components/ConfirmModal';
import { AiFillEdit, AiOutlineDelete } from 'react-icons/ai'


const data2 = [
    {
        key: 1,
        name: 'Nhân viên vận chuyển',
        deadline: "22.08.2022",
        department: "Kĩ thuật",
        job: "technical",
        locate: "Hồ Chí Minh",
        status: "Đang mở"
    },
    {
        key: 2,
        name: 'Nhân viên kho',
        deadline: "22.10.2022",
        department: "Nhân sự",
        job: "human",
        locate: "Hà Nội",
        status: "Đã đóng"
    },
    {
        key: 3,
        name: 'Kế toán',
        deadline: "14.10.2022",
        department: "Nhân sự",
        job: "Nhân viên",
        locate: "Hồ Chí Minh",
        status: "Đã đóng"
    }
]
const getRandomuserParams = (params) => ({
    results: params.pagination?.pageSize,
    page: params.pagination?.current,
    ...params,
});
const { Item } = Form

function AdminCareer() {
    const [data, setData] = useState(data2);
    const [loading, setLoading] = useState(false);
    const [pagination, setPagination] = useState({
        current: 1,
        pageSize: 10,
    });
    const [newJob, setNewJob] = useState([
        {
            name: "",
            deadline: "",
            department: "",
            job: "",
            locate: "",
            status: "Đang mở"
        }
    ]
    )
    const [isAddVisible, setIsAddVisible] = useState(false);
    const [isEditVisible, setIsEditVisible] = useState(false)
    const [isDeleteVisible, setIsDeleteVisible] = useState(false);
    const [isDisable, setIsDisable] = useState(false)
    const [valueCompare, setValueCompare] = useState('')
    const [dataForEdit, setDataForEdit] = useState({})

    const columns = [
        {
            title: 'Tên việc làm',
            dataIndex: 'name',
            sorter: true,
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
                    value: 'Kĩ thuật',
                },
                {
                    text: 'Nhân sự',
                    value: 'Nhân sự',
                },
            ],
            onFilter: (value, record) => record.department === value,
        },
        {
            title: 'Vị trí làm việc',
            dataIndex: 'job',
            filters: [
                {
                    text: 'technical',
                    value: 'technical',
                },
                {
                    text: 'human',
                    value: 'human',
                },
            ],
            onFilter: (value, record) => record.job === value,
        },
        {
            title: 'Địa điểm làm việc',
            dataIndex: 'locate',
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
            onFilter: (value, record) => record.locate === value,
        },
        {
            title: 'Trạng thái',
            dataIndex: 'status',
            filters: [
                {
                    text: 'Đang mở',
                    value: 'Đang mở',
                },
                {
                    text: 'Đã đóng',
                    value: 'Đã đóng',
                },
            ],
            onFilter: (value, record) => record.status === value,
            render: (status) => (
                <>
                    {status === "Đang mở" ?
                        <div className="text-green-600 font-bold bg-green-200 text-center rounded-lg py-1">Đang mở</div>
                        :
                        <div className='text-red-600 font-bold bg-red-300 text-center rounded-lg py-1'>Đã đóng</div>
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
                        className="flex items-baseline gap-x-1 hover:text-blue-600 "
                        onClick={() => handleClickEdit(b)}
                    >
                        <AiFillEdit className='translate-y-[1px]' />Sửa
                    </button >
                    <button
                        className="flex items-baseline gap-x-1 hover:text-red-600"
                        onClick={() => {
                            setIsDeleteVisible(true)
                            setValueCompare(b.name)
                        }}
                    >
                        <AiOutlineDelete className='translate-y-[1px]' />Xóa
                    </button>

                </div>
            )
        }
    ];
    const fetchData = async () => {
        setLoading(true)
        try {
            await setTimeout(() => {
                setLoading(false)
            }, 2000)
        }
        catch {
            //Code here
        }
    }
    useEffect(() => {
        fetchData()
    }, []);
    const handleTableChange = (newPagination, filters, sorter) => {
        // fetchData({
        //     sortField: sorter.field,
        //     sortOrder: sorter.order,
        //     pagination: newPagination,
        //     ...filters,
        // });
        // data.find(a=>a.)
    };
    const acceptDelete = async () => {
        setLoading(true)
        setIsDisable(true)
        try {
            await setTimeout(() => {
                setLoading(false)
                setIsDeleteVisible(false)
                setIsDisable(false)
                const newArray = data.filter(ele => ele.name !== valueCompare)
                setData(newArray)
            }, 2000)
        }
        catch {

        }
    }
    const handleClickEdit = (row) => {
        setIsEditVisible(true)
        const [dataEdit] = data.filter(ele => ele.key === row.key)
        setDataForEdit(dataEdit)
    }
    const acceptAddNewCareer = async () => {
        setLoading(true)
        setIsDisable(true)
        try {
            await setTimeout(() => {
                setLoading(false)
                setIsAddVisible(false)
                setIsDisable(false)

            }, 2000)
        }
        catch {

        }
    }
    const acceptEditCareer2 = async () => {
        setLoading(true)
        setIsDisable(true)

        try {
            await setTimeout(() => {
                setLoading(false)
                setIsEditVisible(false)
                setIsDisable(false)
                console.log('Okay')
            }, 2000)
        }
        catch {

        }
    }

    return (
        <>
            <div className="flex justify-between mb-4">
                <span className="text-3xl font-bold uppercase">Career</span>

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
                // rowKey={(record) => record.login.uuid}
                dataSource={data}
                pagination={pagination}
                loading={loading}
                onChange={handleTableChange}
            />
            {/* Modal add,edit,delete career start*/}
            <AddNewCareer
                isVisible={isAddVisible}
                onClose={() => setIsAddVisible(false)}
                loading={loading}
                disable={isDisable}
                onOk={acceptAddNewCareer}
            />
            {
                isEditVisible &&
                <EditCareer
                    isVisible={isEditVisible}
                    onClose={() => setIsEditVisible(false)}
                    disable={isDisable}
                    data={dataForEdit}
                    refetchData={fetchData}
                />
            }
            <ConfirmModal
                isVisible={isDeleteVisible}
                text={`xóa Công việc ${valueCompare}`}
                onClose={() => setIsDeleteVisible(false)}
                loading={loading}
                disable={isDisable}
                onOk={acceptDelete}
            />

            {/* Modal add new career end*/}

        </>
    );
};

export default AdminCareer;