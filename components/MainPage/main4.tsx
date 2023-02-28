import * as React from 'react';
import './stylemainpage.css';
import liff from '@line/liff';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { useNavigate } from 'react-router-dom';

const options = ['เริ่มทันทีที่ชำระเงิน', 'เริ่ม 00:00:00 ของวันถัดไป'];
const defaultOption = options[0];

const MainPage3 = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate('/history');
  const handleClickBack = () => navigate('/mainpay');
  return (
    <div style={{ marginLeft: '5vw' }}>
      <h1>Select Start time</h1>
      <p>เลือกเวลาที่คุณต้องการเริ่มใช้งาน</p>
      <Dropdown options={options} placeholder="กรุณาเลือก" />
      <div className="iNote2">
        <h4>หมายเหตุ</h4>
        <p className="myNote">ระบบจะตัดรอบเวลาทุกๆ 00:00 น.</p>
        <p className="myNote">
          จึงเรียนมาเพื่อให้ผู้ใช้งานทราบว่าหากผู้ใช้งานซื้อบริการ
        </p>
        <p className="myNote">Package ณ เวลา 23.00 น. ระบบจะนับว่าเป็น 1 วัน</p>
        <p className="myNote">
          ซึ่งเหลือเวลาเพียง 1 ชั่วโมงระบบก็จะนับว่าเป็น 1 วัน
        </p>
        <p className="myNote">ตามที่ชี้แจงไว้ ขอบคุณคะ</p>
      </div>
      <div className="iBannerFix">
        <button
          className="iBack"
          onClick={() => {
            handleClickBack();
          }}
        >
          กลับ
        </button>
        <button
          className="iNext"
          onClick={() => {
            handleClick();
          }}
        >
          ต่อไป
        </button>
      </div>
    </div>
  );
};

export default MainPage3;
