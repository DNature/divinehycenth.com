import {Mode} from './color-mode'

const hasLocalStorage = typeof Storage !== 'undefined'
export const storageKey = "nature-ui-color-mode"

export interface StorageManager {
  get(init?: Mode): Mode | undefined
  set(value: Mode): void
  type: "cookie" | "localStorage"
}

/**
 * Simple object to handle read-write to localStorage
 */
export const localStorageManager: StorageManager = {
  get(init){
    if(!hasLocalStorage){
      return init
    }

    const maybeValue = window.localStorage.getItem(storageKey) as Mode

    return maybeValue ?? init
  },
  set(value) {
    if(hasLocalStorage){
      window.localStorage.setItem(storageKey, value)
    }
  },
  type: "localStorage"
}

/**
 * Simple object to handle read-write to cookies
 */
export const cookieStorageManager = (cookies = ''): StorageManager => ({
  get(init?) {
    const match = cookies.match(new RegExp(`(^| )${storageKey}=([^;]+)`) )

    if(match){
      return match[2] as Mode
    }

    return init
  },
  set(value) {
    document.cookie = `${storageKey}=${value}; max-age=31536000; path=/`
  },
  type: 'cookie'
})