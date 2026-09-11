
import { onMounted, watch, type MaybeRefOrGetter, toValue } from 'vue'

export const useLocalStorageValue = (key: MaybeRefOrGetter<string>, initialValue: MaybeRefOrGetter) => {
  onMounted(() => {
    try {
      const raw = localStorage.getItem(toValue(key))
      if (!raw) return
      const data = JSON.parse(raw)
      Object.assign(toValue(initialValue), data)
    } catch {
      /* ignore */
    }
  })

  watch(
    toValue(initialValue),
    () => {
      localStorage.setItem(toValue(key), JSON.stringify(toValue(initialValue)))
    },
    { deep: true },
  )
}
