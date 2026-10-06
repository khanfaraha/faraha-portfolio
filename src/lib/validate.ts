export const LIMITS = {
  name: 100,
  email: 254,
  subject: 150,
  message: 5000,
} as const;

export type ContactField = "name" | "email" | "subject" | "message";
export type ContactValues = Record<ContactField, string>;
export type FieldErrors = Partial<Record<ContactField, string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function clean(value: unknown, singleLine: boolean): string {
  const text = typeof value === "string" ? value : "";
  const normalised = singleLine
    ? text.replace(/[\r\n\t]+/g, " ")
    : text.replace(/\r\n/g, "\n");
  return normalised.trim();
}

/**
 * Shared by the form (instant feedback) and the API route (the real check).
 * Single-line fields have line breaks removed so they can never inject
 * extra email headers.
 */
export function validateContact(input: Partial<Record<ContactField, unknown>>): {
  values: ContactValues;
  errors: FieldErrors;
} {
  const values: ContactValues = {
    name: clean(input.name, true),
    email: clean(input.email, true),
    subject: clean(input.subject, true),
    message: clean(input.message, false),
  };
  const errors: FieldErrors = {};

  if (!values.name) {
    errors.name = "Enter your name.";
  } else if (values.name.length > LIMITS.name) {
    errors.name = `Name must be ${LIMITS.name} characters or fewer.`;
  }

  if (!values.email) {
    errors.email = "Enter your email address.";
  } else if (values.email.length > LIMITS.email || !EMAIL_PATTERN.test(values.email)) {
    errors.email = "Enter a valid email address, like name@example.com.";
  }

  if (!values.subject) {
    errors.subject = "Enter a subject.";
  } else if (values.subject.length > LIMITS.subject) {
    errors.subject = `Subject must be ${LIMITS.subject} characters or fewer.`;
  }

  if (!values.message) {
    errors.message = "Write a message.";
  } else if (values.message.length < 10) {
    errors.message = "Message should be at least 10 characters.";
  } else if (values.message.length > LIMITS.message) {
    errors.message = `Message must be ${LIMITS.message} characters or fewer.`;
  }

  return { values, errors };
}
