// useTheme.js
import { useState } from 'react';

function useTheme(initialTheme = 'light') {
    const [theme, setTheme] = useState(initialTheme);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return { theme, toggleTheme };
}

export default useTheme;
