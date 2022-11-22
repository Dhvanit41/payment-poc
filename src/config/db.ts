import { connect } from 'mongoose';
function connects() {
  return connect('mongodb://localhost:27017/trm').then(() => {
    console.info('db connected');
  });
}

export default connects;
