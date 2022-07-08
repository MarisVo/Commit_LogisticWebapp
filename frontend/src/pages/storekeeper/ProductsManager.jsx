import { Select, DatePicker, Table, Modal } from 'antd'
import { AiOutlinePlus } from 'react-icons/ai'
import { useState } from 'react'
const columns = [
    {
        title: 'Loại Phiếu',
        dataIndex: 'bill_type',
        key: 'bill_type',
        // render: (text) => <a>{text}</a>,
        width: 150,
    },
    {
        title: 'Mã phiếu',
        dataIndex: 'bill_code',
        key: 'bill_code',
        // width: 250,
        ellipsis: true,
    },
    {
        title: 'Ngày',
        dataIndex: 'date',
        key: 'date',
        width: 180,
        ellipsis: true,


    },
    {
        title: 'Tên chi nhánh',
        dataIndex: 'warehouse',
        key: 'warehouse',
        width: 180,
        ellipsis: true,

    },
    {
        title: 'Mã chi nhánh',
        dataIndex: 'warehouse_code',
        key: 'warehouse_code',
        ellipsis: true,

    },
    {
        title: 'Người tạo phiếu',
        dataIndex: 'person',
        key: 'person',
        ellipsis: true,

    },
    {
        title: 'Trạng thái',
        dataIndex: 'status',
        key: 'status',
        ellipsis: true,

    },

];
const data = [
    {
        key: 1,
        bill_type: 'Xuất',
        bill_code: 'ABCXYZ',
        date: '29.06.2022',
        warehouse: 'Quận 10 HCM',
        warehouse_code: '23BA51',
        person: 'Trần D',
        status: 'đang xử lý',
    }
]
const { Option } = Select
function ProductsManager() {
    const [isModalVisible, setIsModalVisible] = useState(false)
    const handleDate = (date) => {
        console.log(date)
    }
    const showModal = () => {
        setIsModalVisible(true)
    }

    return (
        <div className='mt-20 '>
            <div className="grid grid-cols-[20%_80%] p-4 ">
                {/* trái */}
                <div className="flex flex-col gap-y-3 p-2">
                    <span className='text-base py-2 border-b-2 border-b-emerald-700 font-bold'>Bộ lọc</span>
                    <Select
                        // showSearch
                        allowClear
                        className="w-full"
                        placeholder="Loại phiếu"

                    >
                        <Option value='tất cả'>Tất cả</Option>
                        <Option value='nhập'>Nhập</Option>
                        <Option value='xuất'>Xuất</Option>

                    </Select>
                    <DatePicker
                        placeholder='Chọn ngày'
                        onChange={value => handleDate(value)}

                    >

                    </DatePicker>
                    <button
                        className="text-white bg-yellow-500 hover:bg-yellow-400 focus:ring-2  font-medium rounded-lg text-lg w-full py-2.5 text-center "
                    >Tìm kiếm
                    </button>
                </div>
                {/* Phải */}
                <div className="flex flex-col gap-y-3 border-l ">
                    <span className="text-2xl font-blod py-4 px-2">Phiếu nhập / xuất kho</span>
                    <div className='relative w-full h-10'>
                        <button
                            className='inline-flex justify-around items-center absolute right-10 w-32 border rounded-lg p-2 shadow-xl hover:bg-yellow-100'
                            onClick={showModal}
                        ><AiOutlinePlus className='' />
                            Thêm mới
                        </button>
                    </div>

                    <Table columns={columns} dataSource={data} />
                </div>

            </div>
            {isModalVisible && (
                <div
                    className='fixed inset-0 bg-slate-600 bg-opacity-50 z-20 flex justify-center items-center '
                // onClick={()=>setIsModalVisible(false)}
                >
                    <div className='relative w-[700px] flex flex-col bg-white bg-opacity-100 p-6 rounded-xl gap-y-3 animate-modal_in'>
                        <div className='text-2xl font-bold border-b border-b-sky-600 py-2'>Thêm phiếu</div>
                        <span>Loại phiếu</span>
                        <Select
                            // showSearch
                            allowClear
                            className="w-full"
                            placeholder=""

                        >
                            <Option value='nhập'>Nhập</Option>
                            <Option value='xuất'>Xuất</Option>

                        </Select>
                        <span>Mã phiếu</span>
                        <input
                            placeholder=''
                            className='border p-1'
                            // onChange={}
                        />
                        <span>Tên chi nhánh</span>
                        <input
                            placeholder=''
                            className='border p-1'
                            // onChange={}
                        />
                        <div className=' text-white text-base'>
                            <div className=' right-4 flex flex-row gap-x-3 justify-end'>
                                <button
                                    className=' bg-gradient-to-r from-red-600 to-red-500 px-4 py-2 rounded-lg hover:opacity-80'
                                    onClick={() => setIsModalVisible(false)}
                                >
                                    Hủy
                                </button>
                                <button
                                    className='  bg-gradient-to-r from-orange-500 to-yellow-400 px-8 py-2 rounded-lg hover:opacity-80'
                                    onClick={() => setIsModalVisible(false)}
                                >
                                    Xác nhận
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ProductsManager;