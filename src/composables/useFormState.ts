import type { MaybeRefOrGetter } from "vue";
import { ref, toValue, watch } from "vue";

export const useFormState = (value: MaybeRefOrGetter) => {
  const state = ref(Object.keys(toValue(value)).reduce((acc, key) => {
    acc[key] = false
    return acc
  }, {} as Record<string, boolean>))
  Object.keys(state.value).forEach(key => {
    watch(() => toValue(value)[key], () => {
      state.value[key] = true
    })
  })
  return state
}
