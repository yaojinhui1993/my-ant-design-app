import { Steps } from 'antd';
import styles from './steps.css';

const { Step } = Steps;

export default function StepsPage() {
  return (
    <Steps current={1} style={{ width: '500px' }}>
      <Step title="Finished" description="This is a description" />
      <Step title="In Progress" description="This is a progress" />
      <Step title="Waiting" description="This is a waiting" />
    </Steps>
  );
}
