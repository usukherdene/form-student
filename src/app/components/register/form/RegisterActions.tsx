import { Button } from "../../ui/button";

type RegisterActionsProps = {
    step: FormStep;
}

export const RegisterActions = ({step}: RegisterActionsProps) => {
  return (
    <div>
        {step > 0 && <Button type="button">Back</Button>}
        <Button type="submit">Continue</Button>
    </div>
  )
}
