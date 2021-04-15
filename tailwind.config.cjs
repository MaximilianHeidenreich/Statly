module.exports = {
    mode: 'jit',
    purge: ['./src/**/*.{html,js,svelte,ts}'],
    darkMode: 'class',
    theme: {
        fontFamily: {
            'sans': 'Roboto, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji'
        }
    },
    variants: {
        extend: {
            backgroundColor: ['dark']
        }
    }
}
