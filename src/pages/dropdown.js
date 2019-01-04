import { Menu, Dropdown, Icon } from 'antd';
import styles from './dropdown.css';

const menu = (
  <Menu>
    <Menu.Item>
      <a>1st</a>
    </Menu.Item>
    <Menu.Item>
      <a>2st</a>
    </Menu.Item>
    <Menu.Item>
      <a>3st</a>
    </Menu.Item>
  </Menu>
)

export default function() {
  return (
    <Dropdown overlay={menu}>
      <a href="" className="ant-dropdown-link">
        Hover me <Icon type="down" />
      </a>
    </Dropdown>
  );
}
