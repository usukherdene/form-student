"use client";

import { Card, CardContent } from "@/app/components/ui/card";
import { Stepper } from "@/app/components/register/stepper/Stepper"
import { useState } from "react";
import { RegisterActions } from "./RegisterActions";

export const RegisterForm = () => {
  const [step, setStep] = useState<FormStep>(0);

  const handleSubmit = (event:React.ChangeEvent) => {
    setStep(step + 1);
  }

  return (
    <Card className="relative gap-0 rounded-[20px] border-[#ddc2ff5c] bg-transparent py-0">
      <CardContent className="p-4 sm:p-6">
        <form onSubmit={}>
          <Stepper step={step + 1}/>
          <RegisterActions step={step}/>
        </form>
      </CardContent>
    </Card>
  );
};
