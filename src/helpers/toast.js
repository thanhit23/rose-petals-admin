import { toast } from 'react-toastify';

export const toastError = err => {
  const { message } = err;
  if (message) toast.error(message);
};
