import { Tabs } from 'antd';

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

export default function TabsPage() {
  return (
    <Tabs defaultActiveKey="1" onChange={callback}>
      <TabPane tab="Tab 1" key="1">
        Content of Tab Pane
      </TabPane>
      <TabPane tab="Tab 2" key="2">
        Content of Tab Pane
      </TabPane>
      <TabPane tab="Tab 3" key="3">
        Content of Tab Pane
      </TabPane>
    </Tabs>
  );
}
