import { FormData } from "@/components/ContactForm";

export async function sendEmail(data: FormData) {
  const apiEndpoint = "/api/email";

  try {
    const res = await fetch(apiEndpoint, {
      method: "POST",
      body: JSON.stringify(data),
    });
    const response = await res.json();
    return [response.message, null];
  } catch (err) {
    return [null, err];
  }
}
