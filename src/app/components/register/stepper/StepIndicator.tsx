import { LucideIcon } from "lucide-react"

type StepIndicatorProps = {
  label: string;
  Icon: LucideIcon
}

export const StepIndicator = ({label, Icon}: StepIndicatorProps) => {
  return (
    <div className="flex flex-col items-center text-white bg-red-500">
      <span>{label}</span>
      <Icon/>
    </div>
  )
}
