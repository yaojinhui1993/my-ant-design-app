import { Layout } from 'antd';
import styles from './layout.css';

const { Header, Footer, Sider, Content } = Layout;

export default function() {
  return (
    <div className={styles.normal}>
      <Layout>
        <Header>Header</Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>

      <Layout>
        <Header>Header</Header>
        <Layout>
          <Sider>Sider</Sider>
          <Content>Content</Content>
        </Layout>
        <Footer></Footer>
      </Layout>
    </div>
  );
}
