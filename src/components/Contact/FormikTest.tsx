import React from "react";
import { useFormik, FormikErrors } from "formik";

interface FormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const FormikTest = () => {
  const validate = ({ name, email, subject, message }: FormValues) => {
    const errors: FormikErrors<FormValues> = {};

    if (!name) {
      errors.name = "Campo requerido";
    } else if (name.length >= 25) {
      errors.name = "El nombre no debe superar los 25 caracteres";
    }

    if (!email) {
      errors.email = "Campo requerido";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      errors.email = "El correo introducido no es válido";
    }

    console.log(errors);
    return errors;
  };

  const { handleChange, values, handleSubmit } = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validate,
  });

  return (
    <div>
      <form noValidate onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          autoComplete="none"
          onChange={handleChange}
          value={values.name}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          autoComplete="none"
          onChange={handleChange}
          value={values.email}
        />

        <input
          type="subject"
          name="subject"
          placeholder="Asunto"
          autoComplete="none"
          onChange={handleChange}
          value={values.subject}
        />
        <textarea
          name="message"
          cols="30"
          rows="8"
          placeholder="Escribe aquí tu mensaje"
          onChange={handleChange}
          value={values.message}
        />

        <button type="submit" className="gradient-div">
          Enviar mensaje
        </button>
      </form>
    </div>
  );
};
