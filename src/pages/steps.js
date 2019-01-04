import { Steps } from 'antd';
import styles from './steps.css';

const Step = Steps.Step;

export default function() {
  return (
    <Steps current={1} style={{width: '500px'}}>
      <Step title="Finished" description="This is a description"></Step>
      <Step title="In Progress" description="This is a progress"></Step>
      <Step title="Waiting" description="This is a waiting"></Step>
    </Steps>
  );
}
