import React from 'react';
import { Tabs } from 'antd';
import CuocVanChuyen from './CuocVanChuyen';
import HangCamGui from './HangCamGui';
import VanDon from './VanDon';
import BuuCuc from './BuuCuc';
import BangGia from './BangGia';
const { TabPane } = Tabs;

export default function Track() {
    const onChange = (key) => {
        console.log(key);
    };
    return (
        <>
            <div className='carousel'>
                <a href="#">
                    <img className='h-full' src="https://jtexpress.vn/storage/app/uploads/public/628/5cf/ebd/6285cfebd1130135260962.jpg" alt="" />
                </a>
            </div>
            <div className='custom-tab shadow-[#000000] container mx-auto relative bottom-65 ' 
            style={{maxWidth:"1200px"}} >
                <Tabs onChange={onChange} type="card"  >
                    <TabPane tab="Cước vận chuyển " key="1" >
                        <CuocVanChuyen/>
                    </TabPane>
                    <TabPane tab="Vận đơn" key="2" >
                        <VanDon/>
                    </TabPane> 
                    <TabPane tab="Bưu cục" key="3" >
                        <BuuCuc/>
                    </TabPane>
                    <TabPane tab="Bảng giá" key="4">
                        <BangGia/>
                    </TabPane>
                    <TabPane tab="Hàng cấm gửi" key="5" >
                       <HangCamGui/>
                    </TabPane>
                </Tabs>
            </div>
        </>
    )
}
