import * as React from 'react';
import './stylemainpage.css';
import liff from '@line/liff';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { useNavigate } from 'react-router-dom';
import Logo from '../../Image/QR.png';
import logo1 from '../../Image/QR.png';

const options = ['เริ่มทันทีที่ชำระเงิน', 'เริ่ม 00:00:00 ของวันถัดไป'];
const defaultOption = options[0];

const MainPage3 = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate('/history');
  const handleClickBack = () => navigate('/mainpay');
  return (
    <div style={{ marginLeft: '5vw' }}>
      <div className="iNote">
        <h4>Signal</h4>
        <p>M4 - ส่งข้อความทุกๆ 15 นาที</p>
      </div>
      <img src={Logo} />
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
