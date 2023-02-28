import * as React from 'react';
import './stylemainpage.css';
import liff from '@line/liff';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { useNavigate } from 'react-router-dom';

const options = [
  'M1 - ส่งข้อความทุกๆ 1 นาที',
  'M5 - ส่งข้อความทุกๆ 5 นาที',
  'M4 - ส่งข้อความทุกๆ 15 นาที',
  'M30 - ส่งข้อความทุกๆ 30 นาที',
  'VIP - Special Signal',
];
const defaultOption = options[0];

const MainPage = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate('/mainprice');
  return (
    <div style={{ marginLeft: '0vw' }}>
      <div style={{ marginLeft: '5vw' }}>
        <h1>Select Signal</h1>
        <p>เลือกรูปแบบ Signal ที่คุณต้องการ</p>
        <Dropdown options={options} placeholder="กรุณาเลือก" />
      </div>
      <div className="iBannerFix">
        <button className="iBack">กลับ</button>
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

export default MainPage;
