class ResponseAction {
  constructor() {

  }

  static success(res, docs, code = 200) {
    res.status(code).json(docs);
  }

  static error(res, err, code = 400, message) {
    let response = {
      error: message,
      data: err
    };
    res.status(code).json(response);

  }

}

export default ResponseAction;