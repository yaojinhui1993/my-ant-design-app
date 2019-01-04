import { Pagination } from 'antd';
import styles from './pagination.css';

export default function() {
  return (
    <Pagination defaultCurrent={1} total={500} showSizeChanger showQuickJumper size="small"/>
  );
}
