import React from 'react';

function ThemeSelector({ themes, changeTheme }) {
  return (
    <div>
      {(Object.keys(themes.data)).map((theme) => (
        <button
          type="button"
          onClick={() => { changeTheme(themes.data[theme]); }}
        >
          {theme}
        </button>
      ))}
    </div>
  );
}

export default ThemeSelector;
