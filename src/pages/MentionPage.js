import { Mention } from 'antd';

const { toString, toContentState } = Mention;

function onChange(contentState) {
  console.log(toString(contentState));
}

function onSelect(suggestion) {
  console.log('onSelect', suggestion);
}

export default function MentionPage() {
  return (
    <Mention
      style={{ width: '100%' }}
      onChange={onChange}
      onSelect={onSelect}
      defaultValue={toContentState('@afc163')}
      suggestions={['afc163', 'benjycui', 'yiminghe']}
    />
  );
}
