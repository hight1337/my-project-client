const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{3,32}$/g;
const NAME_REGEX = /^[a-zA-Z]{2,}$/;

export const EMAIL_VALIDATION = {
  required: "Email is required",
  pattern: {
    value: EMAIL_REGEX,
    message: "Invalid email address",
  },
};

export const PASSWORD_VALIDATION = {
  required: "Password is required",
  minLength: {
    value: 3,
    message: "Password must be at least 3 characters",
  },
  maxLength: {
    value: 32,
    message: "Password must be less than 32 characters",
  },
  pattern: {
    value: PASSWORD_REGEX,
    message:
      "Password must contain at least one uppercase letter, one lowercase letter, and one number",
  },
};

export const FIRST_NAME_VALIDATION = {
  required: "First name is required",
  minLength: {
    value: 2,
    message: "First name must be at least 2 characters",
  },
  pattern: {
    value: NAME_REGEX,
    message: "First name must contain only letters",
  },
};

export const LAST_NAME_VALIDATION = {
  required: "Last name is required",
  minLength: {
    value: 2,
    message: "Last name must be at least 2 characters",
  },
  pattern: {
    value: NAME_REGEX,
    message: "Last name must contain only letters",
  },
};

export const TITLE_VALIDATION = {
  required: "Title is required",
  minLength: {
    value: 2,
    message: "Title must be at least 2 characters",
  },
};

export const SHORT_DESCRIPTION_VALIDATION = {
  required: "Short description is required",
};

export const CONTENT_VALIDATION = {
  required: "Content is required",
};
