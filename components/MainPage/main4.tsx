import * as React from 'react';
import './stylemainpage.css';
import liff from '@line/liff';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { useNavigate } from 'react-router-dom';

const options = ['เริ่มทันทีที่ชำระเงิน', 'เริ่ม 00:00:00 ของวันถัดไป'];
const defaultOption = options[0];

const MainPage4 = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate('/history');
  const handleClickBack = () => navigate('/mainfinish');
  return (
    <div style={{ marginLeft: '0vw' }}>
      <div className="iNoteQR">
        <h4>Signal</h4>
        <p>M4 - ส่งข้อความทุกๆ 15 นาที</p>
      </div>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png"
        alt="new"
        width="318"
        height="318"
        className="center"
      />
      <div className="iNoteQR">
        <h4>Package</h4>
        <p>15 วัน แถม 2 วัน</p>
      </div>
      <h1 className="myPrice">฿350.00</h1>
      <div className="iNote">
        <a href="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png">
          ดาวโหลดภาพ QR Code เพื่อชำระเงิน
        </a>
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

export default MainPage4;
