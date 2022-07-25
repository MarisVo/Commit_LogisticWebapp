import { useState } from 'react'
import { Form, Input, DatePicker, Button } from 'antd'
import axios from 'axios'
import { END_POINT } from '../../../utils/constant'

const { Item } = Form
function EditCareer({ onClose, onOk, data, refetchData }) {
    const [dataEdit, setDataEdit] = useState(data)
    const [loading, setLoading] = useState(false)
    const [disable, setDisable] = useState(false)

    console.log('data là', dataEdit)
    const acceptEditCareer = async () => {
        setLoading(true)
        setDisable(true)
        try {
            setTimeout(() => {  //sẽ thay bằng PUT request
                setLoading(false)
                setDisable(false)
                onClose()
                refetchData()
            }, 2000)
            // await axios.put(`${END_POINT}/admin/career/${data._id}`,
            // {
            //     headers: { authorization: `Bearer ${accessToken}` },
            //   }
            // )
            // setLoading(false)
            //     setDisable(false)
            //     onClose()
            //     refetchData()
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
                                value={dataEdit.name}
                                onChange={e => setDataEdit({
                                    ...dataEdit,
                                    name: e.target.value
                                })}
                            />
                        </Item>
                        <Item label="Vị trí công việc">
                            <Input
                                value={dataEdit.job}
                                onChange={e => setDataEdit({
                                    ...dataEdit,
                                    job: e.target.value
                                })}
                            />
                        </Item>
                        <Item label="Hạn nộp hồ sơ">
                            <DatePicker
                            // defaultalue={dataEdit.deadline}
                            onChange={(e,dateString)=>setDataEdit({
                                ...dataEdit,
                                deadline:dateString
                            })}
                            />
                        </Item>
                        <Item label="Địa điểm làm việc">
                            <Input
                                value={dataEdit.locate}
                                onChange={e => setDataEdit({
                                    ...dataEdit,
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