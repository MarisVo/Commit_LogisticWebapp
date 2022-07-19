import { Table, Input} from 'antd'
import { AiOutlinePlus } from 'react-icons/ai'
import { useState } from 'react'
import { AiFillEdit, AiOutlineDelete } from "react-icons/ai"
function InventoryDetail() {
    const [isModalVisible, setIsModalVisible] = useState(false)
    const columns2 = [
        {
            title: 'Mã bưu kiện',
            dataIndex: 'code_bill',
        },
        {
            title: 'Tiền phải thu',
            dataIndex: 'cost',
            sorter: true,
        },
        {
            title: 'Thời gian hàng đến',
            dataIndex: 'time_in',
            sorter: true,
        },
        // {
        //     title: 'Thời gian phát hàng',
        //     dataIndex: 'fee',
        // },
        {
            title: 'Bưu cục hàng đến',
            dataIndex: 'warehouse_to',

        },
        {
            title: 'Mã Bưu cục hàng đến',
            dataIndex: 'warehouseCode_to',
        },
        // {
        //     title: 'Trọng lượng tính cước',
        //     dataIndex: 'weight_fee',
        // },
        // {
        //     title: 'Thời gian quét mã gỡ gói',
        //     dataIndex: 'seal-time',
        //     key: 'seal-time',
        // },
        // {
        //     title: '',
        //     dataIndex: "action",
        //     render: (_, record) => (
        //         <div className='flex flex-row gap-y-1 gap-x-3'>
        //             <button
        //                 className="flex items-baseline gap-x-1 hover:text-blue-600 "
        //             // onClick={() => handleClickEdit(record)}
        //             >
        //                 <AiFillEdit className='translate-y-[1px]' />Sửa
        //             </button >
        //         </div>
        //     )
        // }
    ]
    const data2 = [
        {
            key: 1,
            code_bill: 'MXJJA0',
            cost: 200,
            time_in: '10:03',
            warehouse_to: '50 Thủ Đức',
            warehouseCode_to:'ABCD'
        },
        {
            key: 2,
            code_bill: 'MXJJB3',
            cost: 921,
            time_in: '08:03',
            warehouse_to: '50 Bình Thạnh',
            warehouseCode_to:'MAXX'
        }
    ]
    return (
        <>
            <div className='text-2xl font-bold my-5'>Chi nhánh 50 Tân Bình</div>
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

export default InventoryDetail;