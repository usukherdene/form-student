import React from 'react'
import { PasswordInput } from '../register/inputs'

export const StepSecurity = ({ form }: StepComponentsProps) => {
  return (
    <div className="space-y-5">
      <PasswordInput control={form.control} name="password"/>
      <PasswordInput control={form.control} name="confirmPassword"/>
    </div>
  )
}
