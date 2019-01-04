import { Switch } from 'antd';

function onChange(checked) {
  console.log(`Switch to ${checked}`);
}

export default function SwitchPage() {
  return <Switch defaultChecked onChange={onChange} />;
}
