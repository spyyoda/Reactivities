import { DateArg, format } from "date-fns";
import { z } from "zod";

export function formatDate(date: DateArg<Date>) {
  return format(date, "dd MMM yyyy h:mm a");
}

export const requiredString = (fieldname: string) =>
  z
    .string({ required_error: `${fieldname} is required` })
    .min(1, { message: `${fieldname} is required` });