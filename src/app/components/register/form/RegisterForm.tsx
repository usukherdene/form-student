"use client";

import { Card, CardContent } from "@/app/components/ui/card";
import { useForm } from "react-hook-form"
import { Stepper } from "@/app/components/register/stepper/Stepper"
import { useState, FormEvent } from "react";
import { RegisterActions } from "./RegisterActions";
import { RegisterStep } from "../../steps/RegisterStep";
import { zodResolver } from "@hookform/resolvers/zod"
import { registrationSchema } from "../../schema/register.schema";
import { defaults } from "@/app/constants";

export const RegisterForm = () => {
  const form = useForm<RegisterValues>({
    resolver: zodResolver(registrationSchema),
    mode: "onChange",
    defaultValues: defaults,
  });

  const [step, setStep] = useState<FormStep>(0);

  const submit = (values: RegisterValues) => {
    setStep(3);
  };

  const startOver = () => {
    setStep(0)
  }

  const handleBack = () => {
    const previousStep = step === 2 ? 1 : 0
    setStep(previousStep)
  }

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (step === 2) return form.handleSubmit(submit)(event)

    const nextStep = step === 0 ? 1 : 2

    setStep(nextStep);
  }

  return (
    // <Card className="relative gap-0 rounded-[20px] border-[#ddc2ff5c] bg-transparent py-0">
      <CardContent className="p-4 sm:p-6">
        <form onSubmit={handleSubmit}>
          <Stepper step={step + 1}/>
          <RegisterStep step={step} form={form}/>
          <RegisterActions step={step} onBack={handleBack}/>
        </form>
      </CardContent>
    // </Card>
  );
};
