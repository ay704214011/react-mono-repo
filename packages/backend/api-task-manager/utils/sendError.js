const sendError = (res, status, errorCode, errorMessage) => {
   res.status(status).json({
      success: false,
      error: {
        code: errorCode,
        errorMessage
      }
   });
};

module.exports = sendError;