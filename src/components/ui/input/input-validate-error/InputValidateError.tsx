import { IOrderItemForm, TInputLabel } from 'interfaces/interfaces';
import { FC } from 'react';
import { FieldErrors } from 'react-hook-form';

interface IInputValidateErrorProps {
  errors: FieldErrors<IOrderItemForm>;
  label: TInputLabel;
}

const InputValidateError: FC<IInputValidateErrorProps> = ({
  errors,
  label,
}): JSX.Element => {
  return (
    <div>
      {errors[label] && errors[label]?.type === 'required' && (
        <div className="sm-max:text-[12px] text-[red] text-[16px]">
          {errors[label]?.message}
        </div>
      )}
      {errors[label] && errors[label]?.type === 'pattern' && (
        <div className="sm-max:text-[12px] text-[red] text-[16px]">
          {errors[label]?.message}
        </div>
      )}
    </div>
  );
};

export default InputValidateError;
