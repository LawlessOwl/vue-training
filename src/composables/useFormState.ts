import type { MaybeRefOrGetter } from "vue";
import { reactive, toValue } from "vue";
import { useFieldState } from "./useFieldState";

export const useFormState = (value: MaybeRefOrGetter) => {
  const state = reactive(Object.keys(toValue(value)).reduce((acc, key) => {
    acc[key] = useFieldState(() => toValue(value)[key])
    return acc
  }, {} as Record<string, ReturnType<typeof useFieldState>>))
  console.log(state)
  return state
}
