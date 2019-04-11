const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateExperienceInput(data) {
  let errors = {};

  //Kötelezően kitöltendő adatok, ha valami üres, hibát dob
  data.school = !isEmpty(data.school) ? data.school : "";
  data.degree = !isEmpty(data.degree) ? data.degree : "";
  data.fieldofstudy = !isEmpty(data.fieldofstudy) ? data.fieldofstudy : "";
  data.from = !isEmpty(data.from) ? data.from : "";

  if (Validator.isEmpty(data.school)) {
    errors.school = "School name is mandatory!";
  }
  if (Validator.isEmpty(data.degree)) {
    errors.degree = "Degree is mandatory!";
  }
  if (Validator.isEmpty(data.fieldofstudy)) {
    errors.fieldofstudy = "Field of study mandatory!";
  }
  if (Validator.isEmpty(data.from)) {
    errors.from = "From date mandatory!";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
