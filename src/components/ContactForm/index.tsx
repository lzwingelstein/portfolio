"use client";
import { useEffect, useState } from "react";
import Input from "../Input";
import TextArea from "../TextArea";
import ButtonCTA from "../ButtonCTA";
import { sendEmail } from "@/lib/sendEmail";

export type FormData = {
  name: string;
  email: string;
  message: string;
};

type Errors = Partial<FormData>;

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [isFormValid, setIsFormValid] = useState(false);
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
    validateForm();
    if (isFormValid) {
      const [response, err] = await sendEmail({ name, email, message });
      if (err) {
        console.error("Failed to send email:", err);
        setError("Failed to send email. Please try again later.");
        return;
      }
      console.log("Email sent successfully.");
      setResponse(response);
    } else {
      console.log("Form has errors. Please correct them.");
    }
  };

  const validateForm = () => {
    let errors: Errors = {};

    if (!name) {
      errors.name = "Name is required.";
    }

    if (!email) {
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid.";
    }

    if (!message) {
      errors.message = "Message is required.";
    }

    setErrors(errors);
    setIsFormValid(Object.keys(errors).length === 0);
  };

  return (
    <>
      <div id="contact" className="flex flex-col md:flex-row justify-between">
        <div className="md:text-start md:w-[445px]">
          <h1>Contact</h1>
          <p className="pb-5"></p>
          <p>
            I would love to hear about your project and how I could help. Please
            fill in the form, and I’ll get back to you as soon as possible.
          </p>
          <p className="pb-12"></p>
        </div>
        <div className="flex flex-col md:w-[445px]">
          <p>{response}</p>
          <p className="text-red-500">{error}</p>
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
          <div className="flex justify-end">
            <ButtonCTA onClick={sendMessage}>Send Message</ButtonCTA>
          </div>
        </div>
      </div>
      <p className="pb-20"></p>
    </>
  );
}
