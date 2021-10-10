import { useEffect, useState } from 'react';
import _ from 'lodash';
import { setToLS, getFromLS } from '../utils/storage';

const useTheme = () => {
  const themes = getFromLS('all-themes');
  const [theme, setTheme] = useState(themes.data.light);
  const [themeLoaded, setThemeLoaded] = useState(false);

  const setMode = (mode) => {
    setToLS('theme', mode);
    setTheme(mode);
  };

  const getFonts = () => {
    const allFonts = _.values(_.mapValues(themes.data, 'font'));
    return allFonts;
  };

  useEffect(() => {
    let localTheme = getFromLS('theme');
    localTheme = localTheme || themes.data.light;
    setTheme(localTheme);
    setThemeLoaded(true);
  }, []);

  return {
    theme, themeLoaded, setMode, getFonts, themes,
  };
};

export default useTheme;
