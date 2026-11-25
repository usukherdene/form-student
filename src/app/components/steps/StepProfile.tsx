import React from 'react'
import { DateOfBirthInput, PhoneNumberInput, ProfileImageInput } from '../register/inputs'

export const StepProfile = ({ form }: StepComponentsProps) => {
  return (
    <div className="space-y-5">
      <PhoneNumberInput />
      <DateOfBirthInput />
      <ProfileImageInput />
    </div>
  )
}
