"use client";
import { useState } from "react";
import Input from "../Input";
import TextArea from "../TextArea";
import ButtonCTA from "../ButtonCTA";
import { sendEmail } from "@/lib/sendEmail";
import { useMachine } from "@xstate/react";
import contactFormMachine from "@/state/contactFormMachine";

export type FormData = {
  name: string;
  email: string;
  message: string;
};

type Errors = Partial<FormData>;

export default function ContactForm({ className }: { className?: string }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [state, send] = useMachine(contactFormMachine);
  const [error, setError] = useState<string | null>(null);
  const [response, setResponse] = useState<string | null>(null);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const handleMessageChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setMessage(event.target.value);
  };

  const sendMessage = async () => {
    send({ type: "SUBMIT" });
    const isFormValid = validateForm({ name, email, message });
    if (isFormValid) {
      const [response, err] = await sendEmail({ name, email, message });
      if (err) {
        send({ type: "FAILURE" });
        console.error("Failed to send email:", err);
        setError("Failed to send email. Please try again later.");
        return;
      }
      send({ type: "SUCCESS" });
      console.log("Email sent successfully.");
      setResponse(response);
    } else {
      send({ type: "FAILURE" });
      console.log("Form has errors. Please correct them.");
    }
  };

  const validateForm = (form: FormData): Boolean => {
    let errors: Errors = {};

    if (!form.name) {
      errors.name = "Name is required.";
    }

    if (!form.email) {
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      errors.email = "Email is invalid.";
    }

    if (!form.message) {
      errors.message = "Message is required.";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  return (
    <>
      <div
        id="contact"
        className={`${className} flex flex-col xl:flex-row items-center justify-center xl:justify-between md:min-h-[50vh]`}
      >
        <div className="md:text-start md:w-[445px]">
          <h1>Contact</h1>
          <p className="pb-5"></p>
          <p>
            I would love to hear about your project and how I could help. Please
            fill in the form, and I’ll get back to you as soon as possible.
          </p>
          <p className="pb-12"></p>
        </div>
        {state.matches("success") && (
          <div className="flex justify-center">
            <p>
              Message sent{" "}
              <span className="underline text-accent">successfully</span> !
            </p>
          </div>
        )}
        {!state.matches("success") && (
          <div className="flex flex-col w-full md:w-[445px]">
            <Input
              type="text"
              placeholder="Name"
              value={name}
              onChange={handleNameChange}
              error={errors.name}
              className="w-full py-2"
            />
            <p className="pb-3"></p>
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
              error={errors.email}
              className="w-full py-2"
            />
            <p className="pb-3"></p>
            <TextArea
              placeholder="Message"
              value={message}
              onChange={handleMessageChange}
              error={errors.message}
              className="w-full py-2"
            />
            <p className="pb-3"></p>
            {state.matches("idle") && (
              <div className="flex justify-end">
                <ButtonCTA onClick={sendMessage}>Send Message</ButtonCTA>
              </div>
            )}
            {state.matches("loading") && (
              <div className="flex justify-start">
                <p>Sending...</p>
              </div>
            )}

            {state.matches("failure") && (
              <div className="flex justify-between items-center">
                <p>Oops! Something went wrong. {state.context.errorMessage}</p>
                <ButtonCTA onClick={sendMessage}>Retry</ButtonCTA>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}
