import _debounce from 'lodash.debounce'
import { useCallback } from 'react'

export const Debounce = (callback, delay) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedCallback = useCallback(_debounce(callback, delay), [delay])
  return debouncedCallback
}