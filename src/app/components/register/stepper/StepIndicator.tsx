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
      <span className={cn("size-8 rounded-full flex items-center justify-center", step > number ? "bg-[#BE94FD] transform duration-300" : "bg-[#34253F] border border-[#E2E8F0]")}>
        {step > number ? <Check className="text-[#261432] size-4"/> : number}
        </span>
      <span className="flex gap-[6px] items-center">
      <Icon size={12} className="text-[#45556C]"/>
      <span>{label}</span>
      </span>
    </div>
  )
}
