import { api } from "@/lib/axios";
import type { ContactFormData } from "@/validations/contactSchema";

// Create contact form.
export const createContact = async (
  data: ContactFormData,
) => {
  const response = await api.post(
    "/api/v1/contact/create-contact",
    data,
  );

  return response.data;
};

export const getContacts = async () => {
  const response = await api.get("/contact-us");

  return response.data;
};

export const getContactById = async (id: string) => {
  const response = await api.get(`/contact-us/${id}`);

  return response.data;
};

export const updateContact = async (
  id: string,
  data: Partial<ContactFormData>,
) => {
  const response = await api.put(
    `/contact-us/${id}`,
    data,
  );

  return response.data;
};

export const deleteContact = async (id: string) => {
  const response = await api.delete(
    `/contact-us/${id}`,
  );

  return response.data;
};