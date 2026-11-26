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
    <div className="flex flex-col first:items-start items-center last:items-end text-white">
      <span className={cn("size-8 rounded-full flex items-center justify-center text-[12px]", step >= number ? "bg-[#BE94FD] transform duration-300 text-black" : "bg-[#34253F] border border-[#E2E8F0]")}>
        {step > number ? <Check className="text-[#261432] size-4"/> : number}
        </span>
      <span className="flex gap-[6px] items-center">
      <Icon size={12} className="text-[#45556C]"/>
      <span className={cn("text-[12px]", step >= number ? "text-white" : "text-[#c3b7d4]")}>{label}</span>
      </span>
    </div>
  )
}
