import { message } from 'antd';

export const dva = {
  config: {
    onError(err) {
      err.preventDefault();
      message.error(err.message);
    },
    initialState: {
      products: [
        { name: 'dva', id: 1 },
        { name: 'antd', id: 2 }
      ],
      apples: [
        1, 2, 3
      ]
    }
  },
};
