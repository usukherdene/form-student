import { EmailInput, NameInput } from "../register/inputs"

export const StepPersonal = ({ form }: StepComponentsProps) => {
  return (
    <div className="space-y-5">
      <div className="flex gap-5">
        <NameInput />
        <NameInput />
      </div>
      <EmailInput />
    </div>
  )
}
