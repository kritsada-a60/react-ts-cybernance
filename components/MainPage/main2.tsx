import * as React from 'react';
import './stylemainpage.css';
import liff from '@line/liff';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { useNavigate } from 'react-router-dom';

const options = ['1 วัน $10', '15 วัน แถม 2 วัน', '20 วัน แถม 5 วัน'];
const defaultOption = options[0];

const MainPage2 = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate('/mainpay');
  const handleClickBack = () => navigate('/');
  return (
    <div style={{ marginLeft: '0vw' }}>
      <div style={{ marginLeft: '5vw' }}>
        <h1>Signal M4</h1>
        <p>เลือก Package ที่คุณต้องการ</p>
        <Dropdown options={options} placeholder="กรุณาเลือก" />
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

export default MainPage2;
