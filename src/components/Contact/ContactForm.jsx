import React from "react";
import { useForm } from "../../hooks/useForm";

export const ContactForm = () => {
  const {
    formData,
    onChange,
    resetForm,
    isValidEmail,
    name,
    email,
    subject,
    message,
  } = useForm({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form noValidate onSubmit={onSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Nombre"
        autoComplete="none"
        value={name}
        onChange={onChange}
        className={`${name.trim().length <= 0 && "has-error"}`}
      />
      {name.trim().length <= 0 && <span>Este campo es obligatorio</span>}
      <input
        type="email"
        name="email"
        placeholder="Email"
        autoComplete="none"
        value={email}
        onChange={onChange}
        className={`${!isValidEmail(email) && "has-error"}`}
      />
      {!isValidEmail(email) && <span>El email no es válido</span>}
      <input
        type="subject"
        name="subject"
        placeholder="Asunto"
        autoComplete="none"
        value={subject}
        onChange={onChange}
      />
      <textarea
        name="message"
        cols="30"
        rows="8"
        placeholder="Escribe aquí tu mensaje"
        value={message}
        onChange={onChange}
        className={`${message.trim().length <= 0 && "has-error"}`}
      />
      {message.trim().length <= 0 && (
        <span>No puedes enviar un mensaje en blanco</span>
      )}
      <button type="submit" className="gradient-div">
        Enviar mensaje
      </button>
      <button type="button" onClick={resetForm}>
        Reset Form
      </button>
    </form>
  );
};
