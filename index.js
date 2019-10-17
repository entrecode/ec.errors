const config = {
  errorCodeSystemIdentifier: 9,
  logging: false,
  locale: '',
  convertValidationErrorAsArray: false,
};

const errorCodes = require('./errorCodes.json');

/**
 * Helper Function to produce an error object containing message and HTTP status code.
 *
 * @param  {int|string?} code internal error code without system identifier (three digits).
 *   Can also be an integer (when not 000…).
 * @param  {string?} detail subject the error concerns.
 * @param  {string?} verbose even more information about the error.
 * @return {Error} An JavaScript Error instance.
 */
function newError(code = '000', detail = '', verbose = '') {
  const { message = 'General Error', status = 500 } = errorCodes[code] || {};
  const error = new Error(message);
  Object.assign(error, {
    status,
    detail,
    verbose,
    codeWithoutSystemID: code,
    code: parseInt(`${config.errorCodeSystemIdentifier}${code}`, 10),
  });
  return error;
}

/**
 * This Function maps the errors of the tiny validator 4 library to the entrecode error format.
 *
 * @private
 * @param  {object} error tv4 error object.
 * @return {object} error object as generated by newError(...) to return.
 */
function mapTV4Error(error) {
  if (error.code === 302) {
    // missing object
    return newError(
      201,
      `${error.dataPath}/${error.message.replace(/^Missing required property: /, '')}`,
      error.message,
    );
  }
  if (
    error.code === 0 ||
    error.code === 1 ||
    error.code === 500 ||
    error.code === 400 ||
    (error.code > 99 && error.code < 299) ||
    (error.code === 11 && error.subErrors[0].code > 99 && error.subErrors[0].code < 299) ||
    (error.code === 11 && error.subErrors[0].code === 0)
  ) {
    // special case password to short
    if (error.dataPath.match(/^\/(\w*)[Pp]assword/)) {
      return newError(251, error.message, error.dataPath);
    }
    return newError(211, error.dataPath.replace(/^\//, ''), error.message);
  }

  if (config.logging) {
    /* eslint-disable-next-line no-console */
    console.error('Unmatched Validation Error');
    /* eslint-disable-next-line no-console */
    console.error(error);
  }

  return newError(252, error.message, error.dataPath); // special error "unmatched validation error"
}

/**
 * Converts an Error of tini validator into entrecode error format.
 *
 * @param {object} tv4Result Error from tini validator.
 * @returns {Error} Mapped error in entrecode format.
 */
function convertValidationError(tv4Result) {
  let j;
  const error = [];
  if (tv4Result.errors) {
    for (j = 0; j < tv4Result.errors.length; j += 1) {
      error.push(mapTV4Error(tv4Result.errors[j]));
    }
  } else {
    error.push(tv4Result);
  }

  if (!config.convertValidationErrorAsArray) {
    const mainError = error.shift();
    if (error.length) {
      Object.assign(mainError, {
        subErrors: error,
      });
    }
    return mainError;
  }

  return error;
}

/**
 * Create a localized version of any given entrecode error.
 *
 * @param {Error} error Error in entrecode error format.
 * @param {string?} locale Two character localization (currently only 'de' supported).
 *   Leave blank for english.
 * @returns {Error} localized entrecode error.
 */
function getLocalised(error, locale = config.locale) {
  let code3 = `${error.code % 1000}`;
  while (code3.length < 3) {
    code3 = `0${code3}`;
  }

  if (`message${locale.toUpperCase()}` in errorCodes[code3]) {
    Object.assign(error, {
      message: errorCodes[code3][`message${locale.toUpperCase()}`],
    });
  }
  if ('subErrors' in error) {
    Object.assign(error, {
      subErrors: error.subErrors.map((e) => {
        if (`message${locale.toUpperCase()}` in errorCodes[code3]) {
          Object.assign(e, {
            message: errorCodes[code3][`message${locale.toUpperCase()}`],
          });
        }
        return e;
      }),
    });
  }
  return error;
}

module.exports = (cfg) => {
  Object.assign(config, cfg);

  return {
    newError,
    convertValidationError,
    getLocalised,
  };
};
