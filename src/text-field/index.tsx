import { useState } from 'react';
import { factoryMasks } from '../utils/masks';
import '../styles.css';

type validationType = Array<(value: string | number) => string>;

type textFieldType = {
  name: string;
  type: 'text' | 'number';
  label: string;
  value: string | number;
  onChange: (value: string | number) => void;
  validations?: any;
  errors?: string[] | [];
  setErrors?: React.Dispatch<React.SetStateAction<any>>;
  mask?: 'cep' | 'cellphone' | 'date' | 'cpf';
};
export function TextField({
  name,
  type,
  label,
  value,
  errors,
  onChange,
  setErrors,
  validations,
  mask,
}: textFieldType) {
  const [focused, setFocused] = useState(false);

  function validate(validations: validationType): void {
    if (validations?.length > 0) {
      setErrors &&
        setErrors((prevState: string[] | []) => ({
          ...prevState,
          [name]: validations
            .map((errorsFor) => errorsFor(value))
            .filter((errorMsg) => errorMsg.length > 0),
        }));
    }
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (mask) {
      // return one mask
      const masks = factoryMasks(event).masks[mask];
      const value = masks();
      onChange(value.currentTarget.value);
      return;
    }
    onChange(event.target.value);
  }

  return (
    <div>
      <div
        className={`form-field ${focused ? 'is-focused' : ''} ${
          String(value).length > 0 ? 'has-value' : ''
        }`}
      >
        <div className="control">
          <label htmlFor={name}>{label}</label>
          <input
            id={name}
            type={type}
            value={value}
            onChange={(event) => handleChange(event)}
            onFocus={() => setFocused(true)}
            onBlur={() => {
              setFocused(false);
              validate(validations);
            }}
          />
        </div>
        {errors && errors.length > 0 ? (
          <div className="has-error">{errors.join(', ')}</div>
        ) : null}
      </div>
    </div>
  );
}
