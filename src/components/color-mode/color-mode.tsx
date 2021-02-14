import * as React from 'react';
import { isBrowser } from '@nature-ui/utils';

export type Mode = 'light' | 'dark' | 'system' | undefined;

interface ColorModeContextType {
  colorMode: Mode;
  toggleColorMode: () => void;
  setColorMode: (value: any) => void;
}

export const ColorModeContext = React.createContext({} as ColorModeContextType);

/**
 * React hook that reads from `ColorModeProvider` context
 * Returns the color mode and function to toggle it
 */
export const useColorMode = () => {
  const context = React.useContext(ColorModeContext);
  if (context === undefined) {
    throw new Error('useColorMode must be used within a ColorModeProvider');
  }
  return context;
};

/**
 * Change value based on color mode.
 *
 * @param light the light mode value
 * @param dark the dark mode value
 *
 * @example
 *
 * ```js
 * const Icon = useColorModeValue(MoonIcon, SunIcon)
 * ```
 */
export function useColorModeValue<TLight = unknown, TDark = unknown>(
  light: TLight,
  dark: TDark,
) {
  const { colorMode } = useColorMode();
  return colorMode === 'light' ? light : dark;
}

const setMode = (initialValue: Mode) => {
  const mql = window.matchMedia('(prefers-color-scheme: dark)');
  const systemPreference: Mode = mql.matches ? 'dark' : 'light';

  let persistedPreference: Mode;

  try {
    persistedPreference = localStorage.getItem('nature-ui-color-mode') as Mode;
  } catch (err) {
    console.log(
      'Nature UI: localStorage is not available. Color mode persistence might not work as expected',
    );
  }

  const isInStorage = typeof persistedPreference === 'string';

  let colorMode: Mode;

  if (isInStorage) {
    colorMode = persistedPreference;
  } else {
    colorMode = initialValue === 'system' ? systemPreference : initialValue;
  }

  if (colorMode) {
    const root = document.documentElement;
    root.style.setProperty('--nature-ui-color-mode', colorMode);
  }
};

interface ColorModeScriptProps {
  initialColorMode?: Mode;
}

export const ColorModeScript = (props: ColorModeScriptProps) => {
  const { initialColorMode = 'system' } = props;

  const html = `(${String(setMode)})('${initialColorMode}')`;
  return <script dangerouslySetInnerHTML={{ __html: html }} />;
};

/**
 * Check if JS media query matches the query string passed
 */
function getMediaQuery(query: string) {
  const mediaQueryList = window.matchMedia?.(query);
  if (!mediaQueryList) {
    return undefined;
  }
  return !!mediaQueryList.media === mediaQueryList.matches;
}

export const queries = {
  light: '(prefers-color-scheme: light)',
  dark: '(prefers-color-scheme: dark)',
};

export const lightQuery = queries.light;
export const darkQuery = queries.dark;

export function getColorScheme(fallback?: Mode) {
  const isDark = getMediaQuery(darkQuery) ?? fallback === 'dark';
  return isDark ? 'dark' : 'light';
}

export const root = {
  get: () =>
    document.documentElement.style.getPropertyValue(
      '--nature-ui-color-mode',
    ) as Mode,
  set: (mode: Mode) => {
    if (isBrowser) {
      document.documentElement.style.setProperty(
        '--nature-ui-color-mode',
        mode,
      );
    }
  },
};

export const noop = () => {};

const classNames = {
  light: 'nature-ui-light',
  dark: 'nature-ui-dark',
};

/**
 * SSR: Graceful fallback for the `body` element
 */
const mockBody = {
  classList: { add: noop, remove: noop },
};

const getBody = () => (isBrowser ? document.body : mockBody);

/**
 * Function to add/remove class from `body` based on color mode
 */
export function syncBodyClassName(isDark: boolean) {
  const body = getBody();
  body.classList.add(isDark ? classNames.dark : classNames.light);
  body.classList.remove(isDark ? classNames.light : classNames.dark);
}

export const addListener = (fn: Function) => {
  if (!('matchMedia' in window)) {
    return noop;
  }

  const mediaQueryList = window.matchMedia(darkQuery);

  const listener = () => {
    fn(mediaQueryList.matches ? 'dark' : 'light');
  };

  listener();
  mediaQueryList.addEventListener('change', listener); // FIXME: Try this out

  return () => {
    mediaQueryList.removeEventListener('change', listener);
  };
};
