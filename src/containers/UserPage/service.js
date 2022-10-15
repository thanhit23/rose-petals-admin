import { API_ENDPOINT } from './constants';
import Service from '../../service';

export const getUsers = () => Service.get(API_ENDPOINT);
