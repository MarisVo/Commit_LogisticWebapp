import { useState } from 'react'
import { Form, Input, DatePicker, Button } from 'antd'

const { Item } = Form
function AddCareerModal({ isVisible, closeModel }) {

    return (
        <>
            {
                isVisible &&
                <div className='fixed inset-0  bg-slate-600 bg-opacity-50 z-20 flex justify-center items-center'>
                    <div className='relative w-[700px] flex flex-col bg-white  p-6  gap-y-3 animate-modal_in mx-4 overflow-auto'>
                        <div className='flex justify-between items-center'>
                            <span className='text-xl uppercase font-bold'>Thêm công việc mới</span>
                            <button
                                className='px-3 py-1 text-base hover:bg-slate-300'
                                onClick={closeModel}>x</button>
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
                                <Input />
                            </Item>
                            <Item label="Vị trí công việc">
                                <Input />
                            </Item>
                            <Item label="Hạn nộp hồ sơ">
                                <DatePicker />
                            </Item>
                            <Item label="Địa điểm làm việc">
                                <Input />
                            </Item>
                            <div className='flex justify-end'>
                                <button
                                    className='mt-2 px-4 py-2 border border-black hover:bg-slate-300 hover:-translate-y-[2px] duration-300'
                                    onClick={closeModel}
                                >Xác nhận</button>
                            </div>
                        </Form>
                    </div>



                </div>
            }
        </>
    );
}

export default AddCareerModal;