import { ref, watch } from 'vue'

export const useValidation = (form: Record<string, any>, validations: Record<string, (value: any) => string | null>) => {
  const errors = ref<Record<string, string | null>>({})
  watch(form, () => {
    for (const key in validations) {
      const validation = validations[key]

      if (!validation) continue

      errors.value[key] = validation(form[key])
    }
  })
  return errors
}
