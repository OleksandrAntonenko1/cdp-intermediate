import { isEmail, isLatin, isEmpty } from "./validators";
import validateField from "./validateField";

export default function validateInput(email, password) {
  const emailErrorMessage = validateField(email, [isLatin, isEmpty, isEmail]);
  const passwordErrorMessage = validateField(password, [isLatin, isEmpty]);

  const errors = {
    ...(emailErrorMessage && { email: emailErrorMessage }),
    ...(passwordErrorMessage && { password: passwordErrorMessage })
  };

  return {
    errors,
    isValid: Object.entries(errors).length === 0
  };
}
