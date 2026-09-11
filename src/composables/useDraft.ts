import { type MaybeRefOrGetter } from 'vue'
import { useLocalStorageValue } from './useLocalStorageValue'

export const useDraft = (key: MaybeRefOrGetter, value: MaybeRefOrGetter) => {
  useLocalStorageValue(key, value)
}
