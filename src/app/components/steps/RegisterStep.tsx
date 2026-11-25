import { StepPersonal } from "./StepPersonal"
import { StepSecurity } from "./StepSecurity"
import { StepProfile } from "./StepProfile"
import { StepSuccess } from "./StepSuccess"

type RegisterStepProps = {
    step: FormStep | 3;
    
} & StepComponentsProps;

const stepComponents = [StepPersonal, StepSecurity, StepProfile, StepSuccess] as const;

export const RegisterStep = ({step, form}: RegisterStepProps) => {

    if (step === 3){
        const Success = stepComponents[step];
        return <Success/>
    }

    const ActiveStep = stepComponents[step];
    
    return <ActiveStep form={form}/>
}
