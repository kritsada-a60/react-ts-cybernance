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
  const handleClick = () => navigate('/selecttime');
  const handleClickBack = () => navigate('/mainprice');
  return (
    <div style={{ marginLeft: '5vw' }}>
      <h1>Select Start time</h1>
      <p>เลือกเวลาที่คุณต้องการเริ่มใช้งาน</p>
      <Dropdown options={options} placeholder="กรุณาเลือก" />
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
