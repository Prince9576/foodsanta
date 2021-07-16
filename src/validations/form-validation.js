export const isImportantValidation = (value) => {
  return value && value.trim() !== "" && value.trim().length < 100
    ? true
    : false;
};

export const looseValidation = (value) => {
  return value.trim().length < 10 ? true : false;
};
