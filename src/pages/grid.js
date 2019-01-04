import { Row, Col } from 'antd';
import style from './grid.css';

export default function() {
  return (
    <div style={{width: '100%', height: '100', backgroundColor: 'gray'}}>
      <Row>
        <Col span={12}>col-12</Col>
        <Col span={12} style={{ backgroundColor: 'lightBlue'}}>col-12</Col>
      </Row>

      <Row gutter={16}>
        <Col span={6} className={style.col}>
          <div className={style.blue}>col-6</div>
        </Col>
        <Col span={6} className={style.col}>
          <div className={style.blue}>col-6</div>
        </Col>
        <Col span={6} className={style.col}>
          <div className={style.blue}>col-6</div>
        </Col>
        <Col span={6} className={style.col}>
          <div className={style.blue}>col-6</div>
        </Col>
      </Row>
    </div>
  );
}
