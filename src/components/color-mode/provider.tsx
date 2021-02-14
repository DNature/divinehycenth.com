import React from 'react';
import {
  getColorScheme,
  Mode,
  root,
  syncBodyClassName,
  addListener,
  ColorModeContext,
  noop,
} from './color-mode';
import { localStorageManager, StorageManager } from './storage-manager';
import { isBrowser } from '@nature-ui/utils';

export interface ColorModeOptions {
  initialColorMode?: Mode;
  useSystemColorMode?: boolean;
}

interface ColorModeProviderProps {
  value?: Mode;
  options: ColorModeOptions;
  children?: React.ReactNode;
  colorModeManager?: StorageManager;
}

export const ColorModeProvider = (props: ColorModeProviderProps) => {
  const {
    value,
    children,
    options: { useSystemColorMode, initialColorMode },
    colorModeManager = localStorageManager,
  } = props;

  const [colorMode, rawSetColorMode] = React.useState<Mode | undefined>(
    colorModeManager.type === 'cookie'
      ? colorModeManager.get(initialColorMode)
      : initialColorMode,
  );

  React.useEffect(() => {
    if (isBrowser && colorModeManager.type === 'localStorage') {
      const mode = useSystemColorMode
        ? getColorScheme(initialColorMode)
        : root.get() || colorModeManager.get();

      if (mode) {
        rawSetColorMode(mode);
      }
    }
  }, [colorModeManager, useSystemColorMode, initialColorMode]);

  React.useEffect(() => {
    const isDark = colorMode === 'dark';

    syncBodyClassName(isDark);
    root.set(isDark ? 'dark' : 'light');
  }, [colorMode]);

  const setColorMode = React.useCallback(
    (value: Mode) => {
      colorModeManager.set(value);
      rawSetColorMode(value);
    },
    [colorModeManager],
  );

  const toggleColorMode = React.useCallback(() => {
    setColorMode(colorMode === 'light' ? 'dark' : 'light');
  }, [colorMode, setColorMode]);

  React.useEffect(() => {
    let removeListener: any;

    if (useSystemColorMode) {
      removeListener = addListener(setColorMode);
    }

    return () => {
      if (removeListener && useSystemColorMode) {
        removeListener();
      }
    };
  }, [setColorMode, useSystemColorMode]);

  const context = {
    colorMode: (value ?? colorMode) as Mode,
    toggleColorMode: value ? noop : toggleColorMode,
    setColorMode: value ? noop : setColorMode,
  };

  return (
    <ColorModeContext.Provider value={context}>
      {children}
    </ColorModeContext.Provider>
  );
};
