import ResponseAction from '../../utils/ResponseAction';

class UserController {
  constructor() {

  }

  getAll(req, res) {
    ResponseAction.success(res, 'Get all user')
  }
}

export default UserController;