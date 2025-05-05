import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { format, parseISO, subDays } from 'date-fns';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(dateInput: string | Date | undefined) {
  if (!dateInput) {
    return 'N/A';
  }

  if (dateInput instanceof Date) {
    return format(dateInput, 'MMMM d, yyyy');
  }

  const lowerInput = dateInput.toLowerCase();
  if (lowerInput === 'yesterday') {
    return format(subDays(new Date(), 1), 'MMMM d, yyyy');
  }

  if (lowerInput === 'today') {
    return format(new Date(), 'MMMM d, yyyy');
  }

  try {
    return format(parseISO(dateInput), 'MMMM d, yyyy');
  } catch {
    console.error("Unrecognized date format:", dateInput);
    return dateInput;
  }
}


