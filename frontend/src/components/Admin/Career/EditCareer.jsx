import { useState } from 'react'
import { Form, Input, DatePicker, Button } from 'antd'

const { Item } = Form
function EditCareer({ isVisible, onClose, onOk, data, refetchData }) {
    const [editData, setEditData] = useState(data)
    const [loading, setLoading] = useState(false)
    const [disable, setDisable] = useState(false)

    console.log('data là', editData)
    const acceptEditCareer = async () => {
        setLoading(true)
        setDisable(true)
        try {
            setTimeout(() => {
                setLoading(false)
                setDisable(false)
                onClose()
                refetchData()
            }, 2000)
        }
        catch{
            //code
        }

    }
    return (
        <>
            <div className='fixed inset-0  bg-slate-600 bg-opacity-50 z-20 flex justify-center items-center'>
                <div className='relative w-[700px] flex flex-col bg-white p-6 gap-y-3 animate-modal_in mx-4 rounded-xl overflow-auto'>
                    <div className='flex justify-between items-center gap-y-3'>
                        <span className='text-xl uppercase font-bold h-fit'>Chỉnh sửa công việc</span>
                        <Button
                            size="large"
                            disabled={disable}
                            className={!disable && 'hover:bg-red-500 hover:border-red-700 hover:text-white border-none'}
                            onClick={onClose}
                        >
                            x
                        </Button>
                    </div>
                    <Form
                        labelCol={{
                            span: 6,
                        }}
                        wrapperCol={{
                            span: 14,
                        }}
                        layout="horizontal"
                    >
                        <Item label="Tên công việc">
                            <Input
                                value={editData.name}
                                onChange={e => setEditData({
                                    ...editData,
                                    name: e.target.value
                                })}
                            />
                        </Item>
                        <Item label="Vị trí công việc">
                            <Input
                                value={editData.job}
                                onChange={e => setEditData({
                                    ...editData,
                                    job: e.target.value
                                })}
                            />
                        </Item>
                        <Item label="Hạn nộp hồ sơ">
                            <DatePicker />
                        </Item>
                        <Item label="Địa điểm làm việc">
                            <Input
                                value={editData.locate}
                                onChange={e => setEditData({
                                    ...editData,
                                    locate: e.target.value
                                })}
                            />
                        </Item>
                        <div className='flex justify-end mt-2 text-sm gap-x-6'>
                            <Button
                                size="large"
                                disabled={disable}
                                className={!disable && 'hover:bg-red-500 hover:border-red-700 hover:text-white rounded-lg'}
                                onClick={onClose}
                            >
                                Hủy
                            </Button>
                            <Button
                                type="primary"
                                size="large"
                                loading={loading}
                                onClick={acceptEditCareer}
                                className="rounded-lg"
                            >
                                Xác nhận
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
        </>
    );
}

export default EditCareer;