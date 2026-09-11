import type { MaybeRefOrGetter } from "vue";
import { ref, watch, toValue } from "vue";

export const useFieldState = (value: MaybeRefOrGetter) => {
  const state = ref(false)
  watch(
    () => toValue(value),
    () => {
      state.value = true
    }
  )
  console.log(state)
  return state
}
