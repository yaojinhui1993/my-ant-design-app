import { Button } from 'antd';

export default () => (
  <div style={{display: "flex", width: "100%", justifyContent: "space-around"}}>
    <Button type="primary">Primary</Button>
    <Button>Default</Button>
    <Button type="dashed">Dash</Button>
    <Button type="danger">Danger</Button>
  </div>

)
