import { useController } from 'react-hook-form'
import { Field, FieldLabel, FieldError } from '../../ui/field'
import { Input } from '../../ui/input'

export const EmailInput = ({ control }: RegistrationFieldProps) => {
  const {field, fieldState} = useController({ control, name: "email" })

  return (
    <Field className={fieldState.invalid ? "text-[#E7000B] gap-2" : "gap-2"}>
      <FieldLabel htmlFor="email">Email address</FieldLabel>

      <Input id={field.name} {...field} />

      <FieldError>{fieldState.error?.message}</FieldError>
    </Field>
  )
}
