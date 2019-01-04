import { DatePicker } from 'antd';

const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

function onChange(date, dateString) {
  console.log(date, dateString);
}

export default function DatePickerPage() {
  return (
    <div>
      <DatePicker onChange={onChange} />
      <br />
      <MonthPicker onChange={onChange} placeholder="Select month" />
      <br />
      <RangePicker onChange={onChange} />
      <br />
      <WeekPicker onChange={onChange} placeholder="Select week" />
    </div>
  );
}
