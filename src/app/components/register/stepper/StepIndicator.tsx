import { cn } from "cn";
import { Check, LucideIcon } from "lucide-react"

type StepIndicatorProps = {
  label: string;
  Icon: LucideIcon
  number: number;
  step: number;
}

export const StepIndicator = ({label, Icon, number, step}: StepIndicatorProps) => {
  return (
    <div className="flex flex-col items-center first:items-start last:items-end text-white">
      <span className={cn("size-8 rounded-full flex items-center justify-center", step > number ? "bg-[#BE94FD]" : "bg-black")}>
        {step > number ? <Check/> : number}
        </span>
      <span className="flex gap-[6px]">
      <Icon size={12}/>
      <span>{label}</span>
      </span>
    </div>
  )
}
