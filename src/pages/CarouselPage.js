import { Carousel } from 'antd';
import style from './CarouselPage.less';

function onChange(a, b, c) {
  console.log(a, b, c);
}

export default function CarouselPage() {
  return (
    <div style={{ width: '500px', height: '500px', backgroundColor: 'blue' }}>
      <Carousel afterChange={onChange} autoplay>
        <div>
          <h3>11</h3>
        </div>
        <div>
          <h3>21</h3>
        </div>
        <div>
          <h3>31</h3>
        </div>
      </Carousel>
    </div>
  );
}
