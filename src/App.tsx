import { useState } from 'react';
import { TextField } from './text-field';
import { hasError, isEmail, isRequired, minLength } from './utils/validations';
import { errorsType, valuesType } from './stateTypes';
import './styles.css';

const defaultValues: valuesType = {
  name: '',
  email: '',
  birthday: '',
  cellphone: '',
  zipCode: '',
};

const defaultErrors: errorsType = {
  name: [],
  email: [],
  birthday: [],
  cellphone: [],
  zipCode: [],
};

const schemaValidation = {
  name: [(value: string) => minLength(6, value), isRequired],
  email: [isRequired, isEmail],
};
function App() {
  const [values, setValues] = useState<valuesType>(defaultValues);
  const [errors, setErrors] = useState<errorsType>(defaultErrors);

  const submit = () => {
    if (hasError(errors)) {
      return;
    }
    alert(`FORMULÁRIO ENVIADO`);
  };
  return (
    <div className="container">
      <TextField
        type="text"
        name="name"
        label="Name"
        value={values.name}
        onChange={(value) => {
          const name = String(value);
          setValues((prevState) => ({
            ...prevState,
            name,
          }));
        }}
        errors={errors.name}
        validations={schemaValidation.name}
        setErrors={setErrors}
      />

      <TextField
        type="text"
        name="email"
        label="Email"
        value={values.email}
        onChange={(value) => {
          const email = String(value);
          setValues((prevState) => ({
            ...prevState,
            email,
          }));
        }}
        validations={schemaValidation.email}
        errors={errors.email}
        setErrors={setErrors}
      />

      <TextField
        type="text"
        name="zipCode"
        label="Zip code"
        value={values.zipCode}
        onChange={(value) => {
          const zipCode = String(value);
          setValues((prevState) => ({
            ...prevState,
            zipCode,
          }));
        }}
        mask="cep"
      />

      <TextField
        type="text"
        name="cellphone"
        label="Cellphone"
        value={values.cellphone}
        onChange={(value) => {
          const cellphone = String(value);
          setValues((prevState) => ({
            ...prevState,
            cellphone,
          }));
        }}
        mask="cellphone"
      />

      <TextField
        type="text"
        name="birthday"
        label="Birthday"
        value={values.birthday}
        onChange={(value) => {
          const birthday = String(value);
          setValues((prevState) => ({
            ...prevState,
            birthday,
          }));
        }}
        mask="date"
      />

      <button onClick={submit} className="btn primary">
        enviar
      </button>
    </div>
  );
}

export default App;
