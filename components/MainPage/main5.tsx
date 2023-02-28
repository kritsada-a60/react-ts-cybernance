import * as React from 'react';
import './stylemainpage.css';
import liff from '@line/liff';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { useNavigate } from 'react-router-dom';

const options = ['เริ่มทันทีที่ชำระเงิน', 'เริ่ม 00:00:00 ของวันถัดไป'];
const defaultOption = options[0];

const MainPage5 = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate('/history');
  const handleClickBack = () => navigate('/');
  return (
    <div style={{ marginLeft: '0vw' }}>
      <div className="iNote">
        <h4>Signal</h4>
        <p>M4 - ส่งข้อความทุกๆ 15 นาที</p>
      </div>
      <h1 className="mySuccess">ชำระเงินเสร็จสิ้น</h1>
      <div className="iNote">
        <h4>Package</h4>
        <p>15 วัน แถม 2 วัน</p>
      </div>
      <div className="iNote3">
        <p>เริ่มต้นใช้งานทันที</p>
        <h2>2023/01/05 22:20:12</h2>
        <p>สิ้นสุด</p>
        <h2>2023/01/22 23:59:59</h2>
      </div>
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
          className="iBack2"
          onClick={() => {
            handleClickBack();
          }}
        >
          กลับสู่หน้าหลัก
        </button>
      </div>
    </div>
  );
};

export default MainPage5;
