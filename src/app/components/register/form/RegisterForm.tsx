"use client";

import { Card, CardContent } from "@/app/components/ui/card";
import { Stepper } from "@/app/components/register/stepper/Stepper"
import React, { useState, FormEvent } from "react";
import { RegisterActions } from "./RegisterActions";

export const RegisterForm = () => {
  const [step, setStep] = useState<FormStep>(0);

  const handleBack = () => {
    const previousStep = step === 2 ? 1 : 0
    setStep(previousStep)
  }

  const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextStep = step === 0 ? 1 : 2

    setStep(nextStep);
  }

  return (
    <Card className="relative gap-0 rounded-[20px] border-[#ddc2ff5c] bg-transparent py-0">
      <CardContent className="p-4 sm:p-6">
        <form onSubmit={handleSubmit}>
          <Stepper step={step + 1}/>
          <RegisterActions step={step} onBack={handleBack}/>
        </form>
      </CardContent>
    </Card>
  );
};
