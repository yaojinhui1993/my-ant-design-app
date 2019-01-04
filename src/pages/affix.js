import { Affix, Button } from 'antd';
import styles from './affix.css';

export default function() {
  return (
    <div className={styles.normal}>
      <Affix offsetTop={10}>
        <Button type="primary">Affix top</Button>
      </Affix>
    </div>
  );
}
