import { Checkbox } from 'antd';

function onChange(e) {
  console.log(`checked=${e.target.checked}`);
}

export default function CheckBoxPage() {
  return (
    <div>
      <Checkbox onChange={onChange}>Checkbox</Checkbox>
    </div>
  );
}
