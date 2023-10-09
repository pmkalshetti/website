
(() => {
    'use strict'

    const getStoredTheme = () => localStorage.getItem('theme')
    const setStoredTheme = theme => localStorage.setItem('theme', theme)

    const getPreferredTheme = () => {
        const storedTheme = getStoredTheme()
        if (storedTheme) {
            return storedTheme
        }

        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }

    const setTheme = theme => {
        document.documentElement.setAttribute('data-bs-theme', theme)
    }

    setTheme(getPreferredTheme())

    const showActiveTheme = (theme, focus = false) => {
        let lightSwitch = document.getElementById('lightSwitch');
        if (!lightSwitch) {
            return
        }

        let lightSwitchIcon = document.getElementById('lightSwitchIcon');
        let header = document.getElementById('header_container');


        if (theme === 'dark') {
            lightSwitch.checked = true
            lightSwitchIcon.classList.remove('bi-brightness-high-fill')
            lightSwitchIcon.classList.add('bi-moon-stars-fill')

            header.classList.remove('bg-light')
            header.classList.add('bg-dark')
        }
        else {
            lightSwitch.checked = false
            lightSwitchIcon.classList.remove('bi-moon-stars-fill')
            lightSwitchIcon.classList.add('bi-brightness-high-fill')

            header.classList.remove('bg-dark')
            header.classList.add('bg-light')

        }
    }

    function onToggleMode() {
        const theme = lightSwitch.checked ? 'dark' : 'light'
        setStoredTheme(theme)
        setTheme(theme)
        showActiveTheme(theme)
    }

    window.addEventListener('DOMContentLoaded', () => {
        showActiveTheme(getPreferredTheme())
        let lightSwitch = document.getElementById('lightSwitch')
        lightSwitch.addEventListener('change', onToggleMode)
    })

})()