import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import s from './ContactForm.module.css';

const ContactForm = ({ onAddContact }) => {
  const initialValues = {
    name: '',
    number: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Мінімум 3 символи')
      .max(50, 'Максимум 50 символів')
      .required('Обов’язкове поле'),
    number: Yup.string().required('Обов’язкове поле'),
  });

  const handleSubmit = (values, { resetForm }) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };
    onAddContact(newContact);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isValid }) => (
        <Form className={s.form}>
          <div className={s.fieldContainer}>
            <label>Ім'я:</label>
            <Field type="text" name="name" className={s.input} />
            <ErrorMessage name="name" component="div" className={s.error} />
          </div>

          <div className={s.fieldContainer}>
            <label>Телефон:</label>
            <Field type="text" name="number" className={s.input} />
            <ErrorMessage name="number" component="div" className={s.error} />
          </div>

          <button
            type="submit"
            className={isValid ? `${s.button} ${s.active}` : s.button}
            disabled={!isValid}
          >
            Додати контакт
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
