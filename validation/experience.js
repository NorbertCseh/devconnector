const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateExperienceInput(data) {
  let errors = {};
  data.title = !isEmpty(data.title) ? data.title : "";
  data.company = !isEmpty(data.company) ? data.company : "";
  data.from = !isEmpty(data.from) ? data.from : "";

  if (Validator.isEmpty(data.title)) {
    errors.title = "Job title mandatory";
  }
  if (Validator.isEmpty(data.company)) {
    errors.company = "Company mandatory";
  }
  if (Validator.isEmpty(data.from)) {
    errors.from = "From date mandatory";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};