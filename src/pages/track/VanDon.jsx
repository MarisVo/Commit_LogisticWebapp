import React from 'react'

export default function VanDon() {
    return (
        <div className='p-7'>
            <textarea className="border border-[#ced4da] focus:outline-none w-full rounded-[2px] px-[20px] py-[16px] h-[80px]" name="billcode" placeholder="Ví dụ: 841000072647 & 840000598444" defaultValue={""} />
            <div>
                <span className="text-[#161D25] block my-[24px]">
                    Nhập mã vận đơn của bạn (cách nhau bởi dấu phẩy), tối đa 10 vận đơn.
                </span>
                <button className="w-full bg-[#e5a663] h-[55px] rounded-[2px] text-white font-semibold text-lg">
                    Tra cứu vận đơn
                </button>
            </div>

        </div>
    )
}
