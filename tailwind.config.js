/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                "background-light": "#FAFAFA",
                "surface-light": "#FFFFFF",
                "text-light": "#1A1A1A",
                "text-muted-light": "#666666",
                "navy": "#0f172a",
                ink: "#0a0a0c",
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                "muted-foreground": "hsl(var(--muted-foreground))",
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
            },
            fontFamily: {
                sans: ["Geist", "-apple-system", "BlinkMacSystemFont", "Avenir Next", "system-ui", "sans-serif"],
                serif: ["Instrument Serif", "ui-serif", "Georgia", "serif"],
                display: ["Instrument Serif", "ui-serif", "Georgia", "serif"],
                mono: ["Geist Mono", "JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"],
            },
            borderRadius: {
                DEFAULT: "0.75rem",
                'xl': "1rem",
                '2xl': "1.5rem",
                '3xl': "1.75rem",
            },
            boxShadow: {
                'soft': '0 10px 40px -10px rgba(0,0,0,0.08)',
                'glow': '0 8px 24px -8px rgba(249,115,22,0.40)',
                'card': '0 10px 40px -10px rgba(0,0,0,0.08)',
            }
        },
    },
    plugins: [],
};
