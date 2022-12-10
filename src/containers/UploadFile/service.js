import { map } from 'lodash';
import Service from '../../service';

const formData = new FormData();

export const setHeaderContent = () =>
  Service.setHeaderDefault({
    'Content-Type': 'multipart/form-data',
  });

export const uploadFile = data => {
  map(data, i => formData.append('file', i));
  return Service.post('/file', formData);
};
