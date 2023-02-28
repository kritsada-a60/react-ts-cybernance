import * as React from 'react';
import './style.css';
import liff from '@line/liff';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const options = [
  'M1 - ส่งข้อความทุกๆ 1 นาที',
  'M1 - ส่งข้อความทุกๆ 5 นาที',
  'M1 - ส่งข้อความทุกๆ 15 นาที',
  'M1 - ส่งข้อความทุกๆ 30 นาที',
  'VIP - Special Signal',
];
const defaultOption = options[0];

const HistoryPage = () => {
  return (
    <div style={{ marginLeft: '5vw' }}>
      <h1>Select Signal2</h1>
      <p>เลือกรูปแบบ Signal ที่คุณต้องการ</p>
      <Dropdown options={options} placeholder="กรุณาเลือก" />
      <div className="iBannerFix">
        <button className="iBack">กลับ</button>
        <button className="iNext">ต่อไป</button>
      </div>
    </div>
  );
};

export default HistoryPage;
