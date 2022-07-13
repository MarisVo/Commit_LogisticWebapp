import {Button} from 'antd'

function ConfirmDeleteModal({ isVisible, onClose, onOk, text = "xóa Item",loading,disable }) {
    return (
        <>
            {
                isVisible &&
                <div className="fixed inset-0  bg-slate-600 bg-opacity-50 z-20 flex justify-center items-center">
                    <div className="relative w-4/5 max-w-[700px] flex flex-col bg-white p-6 gap-y-3 animate-modal_in mx-4 shadow-2xl shadow-zinc-700 rounded-xl">
                        <div className="flex justify-between items-center w-full ">
                            <span className="text-xl font-extrabold">Confirm action</span>

                            <Button
                                size="large"
                                disabled={disable}
                                className={!disable && 'hover:bg-red-500 hover:border-red-700 hover:text-white border-none'}
                                onClick={onClose}
                            >
                                x
                            </Button>
                        </div>
                        <div className="h-[2px] w-3/4 bg-red-600 mb-4"></div>
                        <div className="text-sm">Bạn có chắc muốn {text} này không?</div>
                        <div className='flex justify-end mt-2 text-sm gap-x-6'>
                            {/* <button
                                className="px-6 py-2 border rounded-md hover:bg-red-600 hover:text-white duration-300"
                                onClick={onClose}
                            >
                                Hủy
                            </button> */}
                            {/* <button
                                className='ml-5 px-4 py-2 text-white border rounded-md bg-blue-500 hover:opacity-70 duration-300'
                                onClick={onClose}
                            >Xác nhận
                            </button> */}
                            <Button
                            size="large"
                            disabled={disable}
                            className={!disable && 'text-slate-500 border-slate-500  hover:bg-red-500 hover:border-red-700 hover:text-white'}
                            onClick={onClose}
                            >
                                Hủy
                            </Button>
                            <Button
                            type="primary"
                            size="large"
                            loading={loading}
                            onClick={onOk}
                            >
                                Xác nhận
                            </Button>

                        </div>
                    </div>

                </div>
            }
        </>
    );
}

export default ConfirmDeleteModal;