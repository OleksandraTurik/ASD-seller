import { SERVER_EXCEPTION } from 'exceptions/types';

function ServerException({ data, status }, key = 'message') {
  this.type = SERVER_EXCEPTION;
  this.message = data[key];
  this.status = status;
}

export default ServerException;
