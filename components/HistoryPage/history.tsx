import * as React from 'react';
import './style.css';
import liff from '@line/liff';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
      <h1>ประวัติ</h1>
      <p>ประวัติการชำระเงิน</p>
      <Container fluid="md">
        <Row>
          <Col>1 of 2</Col>
          <Col>2 of 2</Col>
        </Row>
        <Row>
          <Col>1 of 3</Col>
          <Col>2 of 3</Col>
          <Col>3 of 3</Col>
        </Row>
      </Container>
      <div className="iBannerFix">
        <button className="iBack">กลับ</button>
        <button className="iNext">ต่อไป</button>
      </div>
    </div>
  );
};

export default HistoryPage;
