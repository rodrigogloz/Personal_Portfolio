import React, { useState } from "react";
import { useFormik, Formik, Form } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";

export const ContactForm = () => {
  const [messageSent, setMessageSent] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const { handleSubmit, errors, touched, getFieldProps } = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    onSubmit: (values, { resetForm }) => {
      emailjs
        .sendForm(
          "service_e7hqua4",
          "template_6jfdsp9",
          ".contactForm",
          "_O_EZMIznLRBItjTr"
        )
        .then(
          (result) => {
            resetForm();
            setMessageSent(true);
          },
          (error) => {
            console.log(error.text);
            setMessageError(true);
          }
        );
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
    <Formik initialValues={{ name: "", email: "", subject: "", message: "" }}>
      <Form onSubmit={handleSubmit} className="contactForm">
        <input type="hidden" name="_subject" value="Nuevo correo entrante" />
        <input
          type="hidden"
          name="_next"
          value="https://rodrigoglozdev.com/pages/thankYou.html"
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
        {messageSent && 
          <p className="message-sent">
            ¡Tu mensaje se ha enviado correctamente!
          </p>
        }
        {messageError && 
          <p className="message-error">
            Ha habido un problema a la hora de enviar tu mensaje, por favor
            contáctame por Linkedin hasta que se solucione el error.
          </p>
        }
      </Form>
    </Formik>
  );
};
