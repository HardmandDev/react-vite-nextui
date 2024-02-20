import { useState, useEffect } from 'react';
import { Button } from '@nextui-org/react'
import { Moon, Sun } from '../../assets/Icons'

function Theme() {
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem('theme');

        if (savedTheme) {
            return savedTheme;
        } else {

            return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
                ? 'dark'
                : 'light';
        }
    });

    useEffect(() => {
        document.documentElement.className = theme;
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <div>
            <Button size="sm" radius="full" variant="light" isIconOnly color="primary" onClick={toggleTheme} >
                {theme === 'dark' ? <Moon /> : <Sun />}
            </Button>
        </div>
    );
}

export default Theme;
