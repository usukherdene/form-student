import React from 'react'
import { Field, FieldLabel, FieldError } from '../../ui/field'
import { Input } from '../../ui/input'

export const PhoneNumberInput = () => {
  return (
    <Field>
      <FieldLabel htmlFor="username">Username</FieldLabel>
      <Input id="username" autoComplete="off" aria-invalid />
      <FieldError>Choose another username.</FieldError>
    </Field>
  )
}
