import { Table, Input} from 'antd'
import { AiOutlinePlus } from 'react-icons/ai'
import { useState } from 'react'
import { AiFillEdit, AiOutlineDelete } from "react-icons/ai"
function Products() {
    const [isModalVisible, setIsModalVisible] = useState(false)
    const columns2 = [
        {
            title: 'Mã đơn',
            dataIndex: 'code_bill',
            key: 'code_bill',
        },
        {
            title: 'Ngày cập nhật lần cuối',
            dataIndex: 'date_update',
            sorter: true,
        },
        {
            title: 'Giờ cập nhật lần cuối',
            dataIndex: 'time',
            sorter: true,
        },
        {
            title: 'Trạng thái',
            dataIndex: 'status',
            filters: [
                {
                    text: 'Đang giao hàng',
                    value: 'Đang giao hàng',
                },
                {
                    text: 'Đã hoàn thành',
                    value: 'Đã hoàn thành',
                },
            ],
            onFilter: (value, record) => record.status === value,
            render: (status) => (
                <>
                    {status === "Đang giao hàng" ?
                        <div className="text-yellow-600 max-w-[150px] font-bold bg-yellow-200 text-center rounded-lg py-1">Đang giao hàng</div>
                        :
                        <div className='text-green-600 max-w-[150px] font-bold bg-green-300 text-center rounded-lg py-1'>Đã hoàn thành</div>
                    }
                </>
            )
        },
        {
            title: '',
            dataIndex: 'detail',
            key: 'detail',
            render: (a, e) =>
                <div
                    onClick={() => { setIsModalVisible(true) }}
                    className='text-blue-700 cursor-pointer'
                >Chi tiết</div>,

        },
        {
            title: '',
            dataIndex: "action",
            render: (_, record) => (
                <div className='flex flex-row gap-y-1 gap-x-3'>
                    <button
                        className="flex items-baseline gap-x-1 hover:text-blue-600 "
                    // onClick={() => handleClickEdit(record)}
                    >
                        <AiFillEdit className='translate-y-[1px]' />Sửa
                    </button >
                    {/* <button
                        className="flex items-baseline gap-x-1 hover:text-red-600"
                        onClick={() => {
                            setIsDeleteVisible(true)
                            setValueCompare(record.name)
                        }}
                    >
                        <AiOutlineDelete className='translate-y-[1px]' />Xóa
                    </button> */}

                </div>
            )
        }
    ]
    const data2 = [
        {
            key: 1,
            status: 'Đang giao hàng',
            code_bill: 'MXJJA0',
            date_update: '14/02/22',
            time: '19:03',
            detail: 'Chi tiết'
        },
        {
            key: 2,
            status: 'Đã hoàn thành',
            code_bill: 'MXJJB3',
            date_update: '10/11/22',
            time: '17:03',
            detail: 'Chi tiết'
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
                columns={columns2}
                dataSource={data2}
                pagination={true}
                scroll={{ x: 700 }}

            />
        </>
    );
}

export default Products;