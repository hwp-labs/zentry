import { format } from 'date-fns'

type InputType = Date | string | null

// 1970-01-01
const dateOnly = (date?: InputType) => {
  const d = date || new Date()
  return format(d, "yyyy-MM-dd");
}

// 01/01/1970
const formalDate = (date?: InputType) => {
  const d = date || new Date()
  return format(d, "dd/MM/yyyy");
}

// Jan 1st
const birthDate = (date?: InputType) => {
  const d = date || new Date()
  return format(d, "MMM do");
}

// Jan 1
const shortDate = (date?: InputType) => {
  const d = date || new Date()
  return format(d, "MMM d");
}

// Jan 1, 1970
const longDate = (date?: InputType) => {
  const d = date || new Date()
  return format(d, "MMM d, yyyy");
}

// Sun, Jan 1, 1970
const longerDate = (date?: InputType) => {
  const d = date || new Date()
  return format(d, "EEE, MMM d, yyyy");
}

// 00:00:00
const timeOnly = (date?: InputType) => {
  const d = date || new Date()
  return format(d, "HH:mm:ss");
}

// 00:00
const shortTime = (date?: InputType) => {
  const d = date || new Date()
  return format(d, "HH:mm");
}

// 1:00 AM
const longTime = (date?: InputType) => {
  const d = date || new Date()
  return format(d, "h:mm a");
}

// Jan 1, 1970 | 1:00 AM
const longDateTime = (date?: InputType) => {
  const d = date || new Date()
  return format(d, "MMM d, yyyy | h:mm a");
}

export const dateUtil = {
  dateOnly,
  formalDate,
  birthDate,
  shortDate,
  longDate,
  longerDate,
  timeOnly,
  shortTime,
  longTime,
  longDateTime,
}