import type { RegisterValues } from "@/schemas";
import type { Control, FieldPath } from "react-hook-form";

declare global {
  type FormStep = 0 | 1 | 2;

  type UploadResult = { url: string };

  type ApiError = { error: string };

  type UploadedImageType = {
    file: File;
    result: UploadResult;
  };

  type RegistrationFieldProps<Name extends FieldPath<RegisterValues>> = { control: Control<RegisterValues>; name: Name };
}
