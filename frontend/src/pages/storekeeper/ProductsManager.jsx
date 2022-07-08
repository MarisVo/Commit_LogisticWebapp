import { Select, DatePicker, Table, Modal } from 'antd'
import { AiOutlinePlus } from 'react-icons/ai'
import { useState } from 'react'

const { Option } = Select
function ProductsManager() {
    const columns2 = [
        {
            title: 'Trạng thái',
            dataIndex: 'status',
            key: 'status',
            ellipsis: true,
        },
        {
            title: 'Mã đơn',
            dataIndex: 'code_bill',
            key: 'code_bill',
            ellipsis: true,
        },
        {
            title: 'ngày cập nhật lần cuối',
            dataIndex: 'date_update',
            key: 'date_update',
            ellipsis: true,
        },
        {
            title: 'giờ cập nhật lần cuối',
            dataIndex: 'time',
            key: 'time',
            ellipsis: true,
        },
        {
            title: '',
            dataIndex: 'detail',
            key: 'detail',
            ellipsis: true,
            render: (_,e) => <div onClick={() => {
                setIsModalVisible(true)
                console.log(e)
            }} className='text-blue-700 cursor-pointer'>Chi tiết</div>,

        },
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
    const detailResponse = [

        {
            date: '14 Th02',
            time: '19:03',
            content: 'Giao hàng thành công'
        },
        {
            date: '14 Th02',
            time: '16:03',
            content: 'Đang giao hàng'
        },
        {
            date: '13 Th02',
            time: '10:55',
            content: 'Đơn hàng đã đến kho 100 Tân Bình'
        },
        {
            date: '13 Th02',
            time: '10:55',
            content: 'Đơn hàng đã rời kho 50 Thủ Đức'
        },
        {
            date: '13 Th02',
            time: '10:55',
            content: 'Đơn hàng đã đến kho 50 Thủ Đức'
        },
        {
            date: '13 Th02',
            time: '10:55',
            content: 'Lấy hàng thành công'
        },
        {
            date: '13 Th02',
            time: '10:55',
            content: 'Người bán đang chuẩn bị đơn hàng'
        },

    ]

    const [isModalVisible, setIsModalVisible] = useState(false)
    const handleDate = (date) => {
        console.log(date)
    }
    const handleDetail = ()=>{

    }

    return (
        <div className='mt-20 '>
            <div className="flex flex-col p-4 ">
                {/* trái */}
                <div className="flex flex-col gap-y-3 p-2">
                    <span className='text-base py-2 border-b-2 border-b-emerald-700 font-bold'>Bộ lọc</span>
                    {/* <div className='flex flex-row items-center justify-start gap-x-5'>
                        <span className='min-w-[100px]'>Chọn chi nhánh</span>
                        <Select
                            showSearch
                            allowClear
                            className="w-1/4"
                            placeholder="Thành phố"
                        >
                            <Option value='HCM'>Thành phố Hồ Chí Minh</Option>
                        </Select>
                        <Select
                            showSearch
                            allowClear
                            className="w-1/4"
                            placeholder="Tên chi nhánh"
                        >
                            <Option value='HCM'>Thành phố Hồ Chí Minh</Option>
                        </Select>
                    </div> */}
                    <div className='flex flex-row items-center justify-start gap-x-5'>
                        <span className='min-w-[100px]'>Trang thái</span>
                        <Select
                            showSearch
                            allowClear
                            className="w-1/4"
                            placeholder="Trạng thái đơn hàng"
                        >
                            <Option value='HCM'>Đang giao hàng</Option>
                            <Option value='HCM'>Chờ lấy hàng</Option>
                            <Option value='HCM'>Giao thành công</Option>
                        </Select>
                    </div>
                    <div className='flex flex-row items-center justify-start gap-x-5'>
                        <span className='min-w-[100px]'>Mã đơn</span>
                        <input
                            placeholder='Tìm mã đơn hàng'
                            className='w-1/4 border py-1 px-3'
                        ></input>
                    </div>

                    {/* <button
                        className="text-white bg-yellow-500 hover:bg-yellow-400 focus:ring-2  font-medium rounded-lg text-lg w-full sm:w-1/4 py-2.5 text-center "
                    >Tìm kiếm
                    </button> */}
                </div>
                {/* Phải */}
                <div className="flex flex-col gap-y-3 border-l ">
                    <span className="text-2xl font-blod py-4 px-2">Đơn hàng</span>
                    {/* <div className='relative w-full h-10'>
                        <button
                            className='inline-flex justify-around items-center absolute right-10 w-32 border rounded-lg p-2 shadow-xl hover:bg-yellow-100'
                            onClick={showModal}
                        ><AiOutlinePlus className='' />
                            Thêm mới
                        </button>
                    </div> */}

                    <Table columns={columns2} dataSource={data2} />
                </div>
            </div>
            {isModalVisible && (
                <div
                    className='fixed inset-0 bg-slate-600 bg-opacity-50 z-20 flex justify-center items-center '
                // onClick={()=>setIsModalVisible(false)}
                >
                    <div className='relative w-[700px] flex flex-col bg-white bg-opacity-100 p-6  gap-y-3 animate-modal_in h-5/6 overflow-auto'>
                        <div className='text-2xl font-bold border-b border-b-sky-600 py-2'>Chi tiết đơn hàng MXJJA0</div>
                        <button
                            className='py-2 px-5 text-white absolute right-0 top-2 bg-red-600 hover:opacity-75'
                            onClick={() => setIsModalVisible(false)}
                        >X</button>
                        {/* <div>
                            <div className='grid grid-cols-[20%_60%] border p-2'>
                                <span>Người nhận</span>
                                <div className='flex flex-col border-l'>
                                    <span>Họ và tên:</span>
                                    <span>Số điện thoại:</span>
                                    <span>Địa chỉ:</span>                                 
                                </div>
                            </div>
                        </div> */}
                        <table className='border'>
                            <tr className='border-b'>
                                <td className='px-3 w-1/4 font-semibold'>Người gửi</td>
                                <td className='flex flex-col px-3 py-1 border-l'>
                                    <span>Họ và tên</span>
                                    <span>Số điện thoại</span>
                                    <span>Địa chỉ</span>
                                </td>
                            </tr>
                            <tr >
                                <td className='px-3 w-1/4 font-semibold'>Người nhận</td>
                                <td className='flex flex-col px-3 py-1 border-l'>
                                    <span>Họ và tên</span>
                                    <span>Số điện thoại</span>
                                    <span>Địa chỉ</span>
                                </td>
                            </tr>

                        </table>

                        <table className=''>
                            <tr className='border-y bg-slate-300 text-base'>
                                <th className='w-1/4 p-2'>Thời gian</th>
                                <th className='border-l border-white'>Trạng thái</th>
                            </tr>
                            {detailResponse.map((detail, key) => (
                                <tr className='[&:nth-child(2)]:text-blue-600'>
                                    <td className='flex flex-col text-center py-2'>
                                        <span>{detail.date}</span>
                                        <span>{detail.time}</span>
                                    </td>
                                    <td className='border-l px-2'>{detail.content}</td>
                                </tr>

                            ))}

                        </table>
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