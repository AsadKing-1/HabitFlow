import type {
  FormErrors,
  LoginCredentials,
  RegisterProfileDraft,
  ValidationResult,
  ValidatorMap,
} from "@/types/type";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function buildValidationResult<TForm extends Record<string, unknown>>(
  errors: FormErrors<TForm>,
): ValidationResult<TForm> {
  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

function validateForm<TForm extends Record<string, unknown>>(
  values: TForm,
  validators: ValidatorMap<TForm>,
): ValidationResult<TForm> {
  const errors: FormErrors<TForm> = {};

  for (const field of Object.keys(validators) as Array<keyof TForm>) {
    const fieldValidators = validators[field];

    if (!fieldValidators?.length) {
      continue;
    }

    for (const validator of fieldValidators) {
      const error = validator(values[field], values);

      if (error) {
        errors[field] = error;
        break;
      }
    }
  }

  return buildValidationResult(errors);
}

function validateRequired(label: string) {
  return (value: string) => {
    return value.trim() ? undefined : `${label} is required.`;
  };
}

function validateChecked(message: string) {
  return (value: boolean) => {
    return value ? undefined : message;
  };
}

function validateEmail(value: string) {
  return emailPattern.test(value.trim())
    ? undefined
    : "Enter a valid email address.";
}

function validateMinLength(label: string, minLength: number) {
  return (value: string) => {
    return value.trim().length >= minLength
      ? undefined
      : `${label} must be at least ${minLength} characters.`;
  };
}

function validateMatchingPassword(
  value: RegisterProfileDraft["confirmPassword"],
  values: RegisterProfileDraft,
) {
  return value === values.password ? undefined : "Passwords must match.";
}

const registerValidators: ValidatorMap<RegisterProfileDraft> = {
  name: [validateRequired("Name")],
  email: [validateRequired("Email"), validateEmail],
  password: [validateRequired("Password"), validateMinLength("Password", 8)],
  confirmPassword: [
    validateRequired("Confirm password"),
    validateMatchingPassword,
  ],
  agreedToTerms: [validateChecked("You need to accept the terms to continue.")],
};

const loginValidators: ValidatorMap<LoginCredentials> = {
  email: [validateRequired("Email"), validateEmail],
  password: [validateRequired("Password")],
};

export function useValidation() {
  const validateRegisterForm = (
    values: RegisterProfileDraft,
  ): ValidationResult<RegisterProfileDraft> => {
    return validateForm(values, registerValidators);
  };

  const validateLoginForm = (
    values: LoginCredentials,
  ): ValidationResult<LoginCredentials> => {
    return validateForm(values, loginValidators);
  };

  return {
    validateForm,
    validateRegisterForm,
    validateLoginForm,
    registerValidators,
    loginValidators,
  };
}
