import { Calendar } from 'antd';

function onPanelChange(value, mode) {
  console.log(value, mode);
}

export default function CalendarPage() {
  return <Calendar onPanelChange={onPanelChange} />;
}
