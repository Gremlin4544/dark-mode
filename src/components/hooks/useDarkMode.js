import React from 'react'
import useLocalStorage from "./useLocalStorage";

const [darkMode, setDarkMode] = useLocalStorage('darkMode', initialValue);

useEffect(() => {
    const body = document.querySelector('body');
    return darkMode ? body.classList.add('darkMode'): body.classList.remove('darkMode');
}, [darkMode]);

const [darkMode, setDarkMode] = useDarkMode(false);

const toggleMode = event => {
    event.preventDefault();
    setDarkMode(!darkMode);
};

export default useDarkMode;