import { USER_EXCEPTION } from './types';

function UserException(message, type = USER_EXCEPTION) {
  this.type = type;
  this.message = message;
}

export default UserException;
