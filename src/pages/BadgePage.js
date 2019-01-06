import { Badge, Icon } from 'antd';

export default function BadgePage() {
  return (
    <div>
      {/* <Badge count={5}>
        <a href="#" />
      </Badge> */}
      {/* <Badge count={0} showZero>
        <a />
      </Badge> */}
      <Badge count={<Icon type="clock-circle" style={{ color: '#f5222d' }} />}>
        <a />
      </Badge>
    </div>
  );
}
