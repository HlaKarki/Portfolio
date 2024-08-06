import type {Config} from "tailwindcss"

const config = {
    darkMode: ["class"], content: [
        './pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}',
    ], prefix: "", theme: {
        container: {
            center: true, padding: "2rem", screens: {
                "2xl": "1400px",
            },
        }, extend: {
            colors: {
                light: {
                    primary: "#aa4fec", secondary: "#ed6eff", background: "#fbefed", text: "#000000", neutral: {
                        light: "#?", dark: "#?"
                    },
                }, dark: {
                    primary: "#662f8d", secondary: "#8a2be2", background: {
                        from: "#210F2E", to: "#210F2E", via: "#3e2757"
                    }, text: "#fbefed", neutral: {
                        light: "#?", dark: "#?"
                    },
                },
            }, keyframes: {
                "accordion-down": {
                    from: {height: "0"}, to: {height: "var(--radix-accordion-content-height)"},
                }, "accordion-up": {
                    from: {height: "var(--radix-accordion-content-height)"}, to: {height: "0"},
                },
            }, animation: {
                "accordion-down": "accordion-down 0.2s ease-out", "accordion-up": "accordion-up 0.2s ease-out",
            },
        },
    }, plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config