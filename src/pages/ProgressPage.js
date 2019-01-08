import { Progress } from 'antd';

export default function ProgressPage() {
  return (
    <div>
      <Progress percent={30} />
      <Progress percent={50} status="active" />
      <Progress percent={70} status="exception" />
      <Progress percent={100} />
      <Progress percent={50} showInfo={false} />

      <Progress type="circle" percent={75} />
    </div>
  );
}
