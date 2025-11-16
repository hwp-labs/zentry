type DebugValueType = 0 | 1

type DebugType = {
  loader?: DebugValueType,
  portal?: DebugValueType,
  formData?: DebugValueType,
  action?: DebugValueType,
}

export const DEBUG: Record<string, DebugType> = {
  auth: {
    formData: 1,
  }
}