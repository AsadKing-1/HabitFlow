// =========================== Данные ============================== //

export type ProfileDraft = {
  name: string;
  email: string;
};

export type UserProfile = ProfileDraft & {
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type RegisterProfileDraft = ProfileDraft & {
  password: string;
  confirmPassword: string;
  agreedToTerms: boolean;
};

export type LoginCredentials = {
  email: string;
  password: string;
};

// ========================== Ключи Полей ================================ //

export type RegisterFieldName = keyof RegisterProfileDraft;
export type LoginFieldName = keyof LoginCredentials;

// ========================== Валидация ============================== //

export type FormErrors<TForm extends Record<string, unknown>> = Partial<
  Record<keyof TForm, string>
>;

export type FormTouchedState<TForm extends Record<string, unknown>> = Partial<
  Record<keyof TForm, boolean>
>;

export type ValidationStatus = "idle" | "invalid" | "valid";

export type ValidationResult<TForm extends Record<string, unknown>> = {
  isValid: boolean;
  errors: FormErrors<TForm>;
};

export type FieldValidator<
  TForm extends Record<string, unknown>,
  TField extends keyof TForm,
> = (value: TForm[TField], values: TForm) => string | undefined;

export type ValidatorMap<TForm extends Record<string, unknown>> = Partial<{
  [TField in keyof TForm]: FieldValidator<TForm, TField>[];
}>;

export type AuthFormState<TForm extends Record<string, unknown>> = {
  values: TForm;
  errors: FormErrors<TForm>;
  touched: FormTouchedState<TForm>;
  status: ValidationStatus;
};
