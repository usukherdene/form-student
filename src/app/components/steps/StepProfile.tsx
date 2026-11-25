import React from 'react'
import { DateOfBirthInput, PhoneNumberInput, ProfileImageInput } from '../register/inputs'

export const StepProfile = ({ form }: StepComponentsProps) => {
  return (
    <div className="space-y-5">
      <PhoneNumberInput control={form.control} name="phoneNumber"/>
      <DateOfBirthInput control={form.control} name="dateOfBirth"/>
      <ProfileImageInput control={form.control} name="profileImage"/>
    </div>
  )
}
