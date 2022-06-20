import React from 'react'
import { Tabs } from 'antd';
import MienNam from './area/tieuChuan/MienNam';
import MienNamNhanh from './area/nhanh/MienNam.nhanh';
import MienNamSuper from './area/Super/MienNam.super';

const { TabPane } = Tabs;
export default function BangGia() {
    return (
        <div className='price_list '>
            <div className='p-7'>
                <div className="flex rounded-[2px] h-[43px] items-center w-full my-[20px] mb-[40px]">
                    <form className="w-full mb-[10px] lg:mb-0" data-request="onSearchPriceList" id="form-price-list">
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-[20px]">
                            <div className="flex items-center border border-[#b2b2b2] w-full input_block_tab">
                                <input className="bg-transparent focus:outline-none ml-2 w-full h-[43px]" id="price-from" placeholder="Gửi từ Tỉnh/Thành phố" type="text" />
                            </div>
                            <div className="flex flex-row items-center w-full lg:w-[180px]">
                                <button className="w-full lg:w-[180px] mr-0 lg:mr-2 bg-[#FF0000] h-[45px] rounded-[2px] text-white">
                                    Tìm kiếm
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                <h5 className="uppercase  text-center mb-4 text-[20px]" name={1}>
                    CƯỚC VẬN CHUYỂN DỊCH VỤ TIÊU CHUẨN
                </h5>
                <div className='border border-black rounded-[10px] area'>
                    <h2 className='text-center text-xl mt-10'>KHU VỰC MIỀN NAM</h2>
                    <MienNam/>
                </div>

                <h5 className="uppercase text-center mb-4 mt-10 text-[20px]" name={1}>
                    CƯỚC VẬN CHUYỂN NHANH
                </h5>
                <div className='border border-black rounded-[10px] area'>
                    <h2 className='text-center text-xl mt-10'>KHU VỰC MIỀN NAM</h2>
                    <MienNamNhanh />
                </div>

                <h5 className="uppercase  text-center mb-4 mt-10 text-[20px]" name={1}>
                    CƯỚC VẬN CHUYỂN DỊCH VỤ SUPER
                </h5>
                <div className='border border-black rounded-[10px] area '>
                    <h2 className='text-center text-xl mt-10'>KHU VỰC MIỀN NAM</h2>
                    <MienNamSuper />
                </div>


            </div>
        </div>

    )
}
