import { Select, DatePicker, Tabs, Table } from 'antd'

const { Option } = Select
const { TabPane } = Tabs
const columnsSummary = [
    {
        title: 'Mã chi nhánh',
        dataIndex: 'warehouse_code',
        key: 'warehouse_code',
        // render: (text) => <a>{text}</a>,
        width: 150,
    },
    {
        title: 'Tên chi nhánh',
        dataIndex: 'warehouse-name',
        key: 'warehouse-name',
        width: 250,
        ellipsis: true,
    },
    {
        title: 'Số phiếu tồn kho',
        dataIndex: 'quantity',
        key: 'quantity',
        width: 180,
        ellipsis: true,


    },
    {
        title: 'Trọng lượng tồn kho',
        dataIndex: 'weight',
        key: 'weight',
        width: 180,
        ellipsis: true,

    },
    {
        title: 'Vận phí tồn kho',
        dataIndex: 'fee',
        key: 'fee',
        ellipsis: true,

    },
    {
        title: 'COD tồn kho',
        dataIndex: 'cod',
        key: 'cod',
        ellipsis: true,

    },
];
const columnsDetail = [
    {
        title: 'Mã vận đơn',
        dataIndex: 'bill_code',
        key: 'bill_code',
        // render: (text) => <a>{text}</a>,
        width: 150,
    },
    {
        title: 'Mã số bưu kiện',
        dataIndex: 'warehouse-name',
        key: 'warehouse-name',
        width: 150,
        ellipsis: true,
    },
    {
        title: 'Tiền phải thu',
        dataIndex: 'cost',
        key: 'cost',
        width: 150,
        ellipsis: true,


    },
    {
        title: 'Thời gian hàng đến',
        dataIndex: 'time-in',
        key: 'time-in',
        width: 180,
        ellipsis: true,

    },
    {
        title: 'Thời gian phát hàng',
        dataIndex: 'fee',
        key: 'fee',
        // ellipsis: true,

    },
    {
        title: 'Bưu cục hàng đến',
        dataIndex: 'warehouse-to',
        key: 'warehouse-to',
        // ellipsis: true,

    },
    {
        title: 'Mã Bưu cục hàng đến',
        dataIndex: 'warehouse-code-to',
        key: 'warehouse-code-to',
        // ellipsis: true,
    },
    {
        title: 'Trọng lượng tính cước',
        dataIndex: 'weight-fee',
        key: 'weight-fee',
        // ellipsis: true,
    },
    {
        title: 'Thời gian quét mã gỡ gói',
        dataIndex: 'seal-time',
        key: 'seal-time',
        // ellipsis: true,
    },
    
];

function Inventory() {
    const handleDate = (date) => {

    }
    const switchTab = () => {

    }

    return (
        <div className='mt-20'>
            <div className='flex flex-col p-4'>
                <div className="flex flex-col justify-around gap-y-3 p-2 border-2">
                    <span className='text-lg py-2 border-b-2 border-b-emerald-700 font-bold'>Bộ lọc</span>
                    <div className='grid grid-cols-3 gap-x-4 items-center'>
                        <Select
                            showSearch
                            allowClear
                            className=""
                            placeholder="Chi nhánh"
                        >
                            <Option value='HCM'>Thành phố Hồ Chí Minh</Option>
                        </Select>
                        <DatePicker
                            placeholder='Chọn ngày'
                            onChange={value => handleDate(value)}
                        >
                        </DatePicker>
                        <button
                            className="text-white bg-yellow-500 hover:bg-yellow-400 focus:ring-2  font-medium rounded-lg text-lg w-1/3 py-1.5 text-center  "
                        >Tìm kiếm
                        </button>
                    </div>
                </div>
                <div className='mt-5'>
                    <Tabs onChange={switchTab} type="card">
                        <TabPane tab="Tổng" key="1">
                            <Table columns={columnsSummary} />

                        </TabPane>
                        <TabPane tab="Chi tiết" key="2">
                            <Table columns={columnsDetail} />
                        </TabPane>
                    </Tabs>
                </div>
            </div>
        </div>
    );
}

export default Inventory;