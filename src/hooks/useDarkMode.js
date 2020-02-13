import {useEffect} from 'react';
import useLocalStorage from "../hooks/useLocalStorage";

const useDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage('darkMode');

    useEffect(() => {
        darkMode ? document.body.classList.add('dark-mode') : document.body.classList.remove('dark-mode') ; 
    },[darkMode])

    return [darkMode, setDarkMode];
}

export default useDarkMode;