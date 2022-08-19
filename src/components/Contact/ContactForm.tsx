import React from "react";
import { useFormik, Formik, Form } from "formik";
import * as Yup from "yup";

export const ContactForm = () => {
  const { handleSubmit, errors, touched, getFieldProps } = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(25, "El nombre no debe superar los 25 caracteres")
        .required("Campo requerido"),
      email: Yup.string()
        .email("El formato del correo no es válido")
        .required("Debes introducir un correo"),
      subject: Yup.string()
        .max(50, "El asunto no debe superar los 50 caracteres")
        .required("Por favor, introduce un asunto para el mensaje"),
      message: Yup.string().required("No puedes enviar un mensaje en blanco"),
    }),
  });

  return (
    <Formik
      initialValues={{ name: "", email: "", subject: "", message: "" }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form
        onSubmit={handleSubmit}
        action="https://formsubmit.co/contacto@rodrigoglozdev.com"
        method="POST"
      >
        <input type="hidden" name="_subject" value="Nuevo correo entrante" />
        <input
          type="hidden"
          name="_next"
          value="https://rodrigoglozdev.com/thankYou.html"
        />
        {touched.name && errors.name && <span>{errors.name}</span>}
        <input
          type="text"
          placeholder="Nombre"
          autoComplete="none"
          {...getFieldProps("name")}
        />
        {touched.email && errors.email && <span>{errors.email}</span>}
        <input
          type="email"
          placeholder="Email"
          autoComplete="none"
          {...getFieldProps("email")}
        />
        {touched.subject && errors.subject && <span>{errors.subject}</span>}
        <input
          type="subject"
          placeholder="Asunto"
          autoComplete="none"
          {...getFieldProps("subject")}
        />
        {touched.message && errors.message && <span>{errors.message}</span>}
        <textarea
          cols="30"
          rows="8"
          placeholder="Escribe aquí tu mensaje"
          {...getFieldProps("message")}
        />

        <button type="submit">Enviar mensaje</button>
      </Form>
    </Formik>
  );
};
