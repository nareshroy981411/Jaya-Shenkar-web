import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}", // update this path based on your project
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    fontFamily: {
      sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      heading: ["Montserrat", "ui-sans-serif", "system-ui", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      height: {
        38: "9.5rem",
        42: "10.5rem",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        // Business vertical themes
        pharma: {
          primary: "#1e40af", // blue-800
          accent: "#38bdf8", // sky-400
          light: "#e0f2fe", // sky-100
          dark: "#0c224a", // custom dark
          text: "#0c224a",
        },
        industrial: {
          primary: "#166534", // green-800
          accent: "#22d3ee", // cyan-400
          light: "#f0fdf4", // green-50
          dark: "#052e16", // green-950
          text: "#052e16",
        },
        power: {
          primary: "#f59e42", // orange-400
          accent: "#fbbf24", // amber-400
          light: "#fff7ed", // orange-50
          dark: "#78350f", // orange-900
          text: "#78350f",
        },
        agro: {
          primary: "#65a30d", // lime-700
          accent: "#bef264", // lime-200
          light: "#f7fee7", // lime-50
          dark: "#365314", // lime-900
          text: "#365314",
        },
        // General text themes
        text: {
          heading: "#1e293b", // slate-800
          subheading: "#334155", // slate-700
          body: "#475569", // slate-600
          muted: "#64748b", // slate-500
          white: "#fff",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
