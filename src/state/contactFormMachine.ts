import { createMachine, assign } from "xstate";

// ContactFormEvent defines possible events
type ContactFormEvent =
  | { type: "SUBMIT" }
  | { type: "SUCCESS" }
  | { type: "FAILURE" }
  | { type: "RETRY" };

// ContactFornContext can be used to store data
interface ContactFormContext {
  errorMessage?: string;
}

// ContactFormState defines possible states
type ContactFormState =
  | { value: "idle"; context: ContactFormContext }
  | { value: "loading"; context: ContactFormContext }
  | { value: "success"; context: ContactFormContext }
  | { value: "failure"; context: ContactFormContext };

const contactFormMachine = createMachine({
  id: "contactForm",
  initial: "idle",
  context: {
    errorMessage: undefined,
  },
  states: {
    idle: {
      on: { SUBMIT: "loading" },
    },
    loading: {
      on: {
        SUCCESS: "success",
        FAILURE: "failure",
      },
    },
    success: {
      type: "final",
    },
    failure: {
      on: {
        RETRY: "loading",
      },
    },
  },
});

export default contactFormMachine;
