export default (fieldValue, validators) => {
  for (const validator of validators) {
    const errorMessage = validator(fieldValue);

    if (errorMessage) {
      return errorMessage;
    }
  }
};
