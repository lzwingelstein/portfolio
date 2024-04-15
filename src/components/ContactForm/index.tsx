"use client";
import { useState } from "react";
import Button from "../Button";
import Input from "../Input";
import TextArea from "../TextArea";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

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

  return (
    <>
      <div className="grid md:grid-cols-2 gap-x-28">
        <div>
          <h1>Contact</h1>
          <p className="pb-5"></p>
          <p>
            I would love to hear about your project and how I could help. Please
            fill in the form, and I’ll get back to you as soon as possible.
          </p>
          <p className="pb-12"></p>
        </div>
        <form className="flex flex-col">
          <Input
            type="text"
            placeholder="Name"
            value={name}
            onChange={handleNameChange}
            className="w-full py-2"
          />
          <p className="pb-3"></p>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            className="w-full py-2"
          />
          <p className="pb-3"></p>
          <TextArea
            placeholder="Message"
            value={message}
            onChange={handleMessageChange}
            className="w-full py-2"
          />
          <p className="pb-3"></p>
          <div className="flex justify-end">
            <Button>Send Message</Button>
          </div>
        </form>
      </div>
      <p className="pb-20"></p>
    </>
  );
}
