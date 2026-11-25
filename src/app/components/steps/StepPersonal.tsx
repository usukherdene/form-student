import { EmailInput, NameInput } from "../register/inputs"

export const StepPersonal = ({ form }: StepComponentsProps) => {
  return (
    <div className="space-y-5">
      <div className="flex gap-5">
        <NameInput control={form.control} name="firstName"/>
        <NameInput control={form.control} name="lastName"/>
      </div>
      <EmailInput control={form.control} name="email"/>
    </div>
  )
}
