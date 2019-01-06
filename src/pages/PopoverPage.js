import { Popover, Button } from 'antd';
import styles from './Popover.css';

const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

export default function PopoverPage() {
  return (
    <Popover content={content} title="Title">
      <Button type="primary">Hover me</Button>
    </Popover>
  );
}
