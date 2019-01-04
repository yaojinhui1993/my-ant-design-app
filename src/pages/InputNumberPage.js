import { InputNumber } from 'antd';
import styles from './InputNumber.css';

function onChange(value) {
  console.log('changed', value);
}

export default function InputNumberPage() {
  return <InputNumber min={1} max={10} defaultValue={3} onChange={onChange} />;
}
