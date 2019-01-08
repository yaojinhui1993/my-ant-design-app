import { Cascader } from 'antd';

import areaJson from '@/components/area_region.json';

const options = areaJson;

function onChange(value) {
  console.log(value);
}

export default function CascaderPage() {
  return (
    <Cascader
      options={options}
      onChange={onChange}
      placeholder="Please select"
      changeOnSelect
    />
  );
}
