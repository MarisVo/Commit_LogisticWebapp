import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
export default function MienNamSuper() {
    return (
        <div className="px-[22px] lg:px-[56px] py-[44px]">
            <div x-show="service3 =='mn'">
                <div className="grid grid-cols-1  lg:grid-cols-4  lg:gap-y-[30px]">
                    <div className="flex items-center py-[16px] border-b-2 lg:py-0 lg:border-0 border-[#F2F2F2]">
                        <a className='text-lg font-light text-black-500' href="https://jtexpress.vn/storage/app/uploads/public/628/5f1/a41/6285f1a41d0c9745459906.pdf" target="_blank">
                            <FontAwesomeIcon icon={faLocationDot} />
                            <span className="ml-2">TP. Hồ Chí Minh</span>
                        </a>
                    </div>
                    <div className="flex items-center py-[16px] border-b-2 lg:py-0 lg:border-0 border-[#F2F2F2]">
                        <a className='text-lg font-light text-black-500' href="https://jtexpress.vn/storage/app/uploads/public/628/5f1/99f/6285f199f0ce2436866603.pdf" target="_blank">
                            <FontAwesomeIcon icon={faLocationDot} />
                            <span className="ml-2">Bình Dương</span>
                        </a>
                    </div>
                    <div className="flex items-center py-[16px] border-b-2 lg:py-0 lg:border-0 border-[#F2F2F2]">
                        <a className='text-lg font-light text-black-500' href="https://jtexpress.vn/storage/app/uploads/public/628/5f1/8d8/6285f18d816de685654644.pdf" target="_blank">
                            <FontAwesomeIcon icon={faLocationDot} />
                            <span className="ml-2">Cần Thơ</span>
                        </a>
                    </div>
                    <div className="flex items-center py-[16px] border-b-2 lg:py-0 lg:border-0 border-[#F2F2F2]">
                        <a className='text-lg font-light text-black-500' href="https://jtexpress.vn/storage/app/uploads/public/628/5f1/833/6285f1833211c580443420.pdf" target="_blank">
                            <FontAwesomeIcon icon={faLocationDot} />
                            <span className="ml-2">Đồng Nai</span>
                        </a>
                    </div>
                    <div className="flex items-center py-[16px] border-b-2 lg:py-0 lg:border-0 border-[#F2F2F2]">
                        <a className='text-lg font-light text-black-500' href="https://jtexpress.vn/storage/app/uploads/public/628/5f1/794/6285f17945521894333807.pdf" target="_blank">
                            <FontAwesomeIcon icon={faLocationDot} />
                            <span className="ml-2">Tiền Giang</span>
                        </a>
                    </div>
                    <div className="flex items-center py-[16px] border-b-2 lg:py-0 lg:border-0 border-[#F2F2F2]">
                        <a className='text-lg font-light text-black-500' href="https://jtexpress.vn/storage/app/uploads/public/628/5f2/340/6285f234044f1030448691.pdf" target="_blank">
                            <FontAwesomeIcon icon={faLocationDot} />
                            <span className="ml-2">Vĩnh Long</span>
                        </a>
                    </div>
                </div>
            </div>
            <div x-show="service3 =='mb'">
                <div className="grid grid-cols-1  lg:grid-cols-4  lg:gap-y-[30px]">
                </div>
            </div>
        </div>
    )
}
