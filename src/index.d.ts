import { z } from "zod"
import { UseFormReturn} from "react-hook-form"
import { registrationSchema } from "./app/components/schema/register.schema";

declare global {
    type FormStep = 0 | 1 | 2 | 3;

    type RegisterValues = z.infer<typeof registrationSchema>;

    type StepComponentsProps = {form: UseFormReturn<RegisterValues>};
}
