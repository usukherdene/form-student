import { cn } from "cn"

type StepLineProps = {
  filled: boolean;
}

export const StepLine = ({filled}: StepLineProps) => {
  return (
    <div className={ cn("flex-1 origin-left bg-[#BE94FD] h-0.5", filled ? "scale-x-100" : "scale-x-0")}/>
  )
}
