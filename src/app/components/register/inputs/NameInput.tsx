import { useController } from 'react-hook-form'
import { Field, FieldLabel, FieldError } from '../../ui/field'
import { Input } from '../../ui/input'

export const NameInput = ({control, name}: RegistrationFieldProps) => {
  const {field, fieldState} = useController({ control, name})

  const isFirstName = field.name === "firstName";

  return (
    <Field className={fieldState.invalid ? "text-[#E7000B] gap-2" : "gap-2"}>
      <FieldLabel htmlFor="username">{isFirstName ? "First name" : "Last name"}</FieldLabel>

      <Input id={field.name} {...field} />

      <FieldError>{fieldState.error?.message}</FieldError>
    </Field>
  )
}
