import { IOrderItemForm, TInputLabel } from 'interfaces/interfaces';
import { FC } from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import InputValidateError from './input-validate-error/InputValidateError';
interface IInputProps {
  placeholder: string;
  classNames?: string;
  register: UseFormRegister<IOrderItemForm>;
  label: TInputLabel;
  required: object;
  errors: FieldErrors<IOrderItemForm>;
  inputLabel: string;
}

const Input: FC<IInputProps> = ({
  placeholder,
  classNames,
  register,
  label,
  required,
  errors,
  inputLabel,
}): JSX.Element => {
  return (
    <>
      <label
        htmlFor={label}
        className="sm-max:text-[14px] w-full text-[18px] font-[600]"
      >
        {inputLabel}
      </label>
      <input
        id={label}
        className={`sm-max:text-[12px] h-[45px] w-full py-1 px-2 placeholder:text-main-text focus:placeholder:text-[0px] font-medium rounded-[15px] text-[16px] ${classNames} bg-block-color-bg border-[1px] ${
          Object.hasOwn(errors, label)
            ? 'border-2 border-[red]'
            : 'border-transparent'
        }`}
        placeholder={placeholder}
        {...register(label, required)}
      />
      <InputValidateError errors={errors} label={label} />
    </>
  );
};
export default Input;
