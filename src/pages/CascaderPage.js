import { Cascader } from 'antd';

const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'xihu',
        label: 'West Lake',
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'zhonghuamen',
        label: 'Zhong Hua Men',
      },
    ],
  },
];

function onChange(value) {
  console.log(value);
}

export default function CascaderPage() {
  return (
    <Cascader
      options={options}
      onChange={onChange}
      placeholder="Please select"
    />
  );
}
