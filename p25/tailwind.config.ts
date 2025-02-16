import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
    theme: {
    extend: {
		fontFamily: {
			// Primary font
			'lexend': ['var(--font-lexend)'],
			// Section-specific heading fonts
			'cinzel': ['var(--font-cinzel)'],      // Game Writing
			'space-grotesk': ['var(--font-space-grotesk)'],   // Game Design
			'space': ['var(--font-space-mono)'],    // Engineering
			'cormorant': ['var(--font-cormorant)'], // Creative Writing
		  },
		colors: {
			// Game Writing Colors
			'home_page': {
				primary: '#8B7355',    // warm brown
				secondary: '#A08B70',  // lighter brown
				accent: '#D4A373',     // soft terracotta
				'bg': {
					light: '#FDFCFA',    // lightest beige
					medium: '#faf9f5',   // provided beige
					dark: '#F3F1E9',     // slightly darker beige
				},
				text: {
					primary: '#2C241F',  // deep brown
					secondary: '#514439', // medium brown
				},
			},
			// Game Writing Colors
			'gw': {
				primary: '#6D28D9',    // purple-700
				secondary: '#8B5CF6',  // purple-500
				accent: '#FBBF24',     // amber-400
				'bg': {
					light: '#F5F3FF',    // purple-50
					medium: '#EDE9FE',   // purple-100
					dark: '#DDD6FE',     // purple-200
				},
				text: {
					primary: '#4C1D95',  // purple-900
					secondary: '#6D28D9', // purple-700
				},
			},
			// Game Design Colors
			'gd': {
				primary: '#1D4ED8',    // blue-700
				secondary: '#3B82F6',  // blue-500
				accent: '#22D3EE',     // cyan-400
				'bg': {
					light: '#EFF6FF',    // blue-50
					medium: '#DBEAFE',   // blue-100
					dark: '#BFDBFE',     // blue-200
				},
				text: {
					primary: '#1E3A8A',  // blue-900
					secondary: '#1D4ED8', // blue-700
				},
			},
			// Engineering Colors
			'eng': {
				primary: '#334155',    // slate-700
				secondary: '#64748B',  // slate-500
				accent: '#38BDF8',     // sky-400
				'bg': {
					light: '#F8FAFC',    // slate-50
					medium: '#F1F5F9',   // slate-100
					dark: '#E2E8F0',     // slate-200
				},
				text: {
					primary: '#0F172A',  // slate-900
					secondary: '#334155', // slate-700
				},
			},
			// Creative Writing Colors
			'cw': {
				primary: '#B45309',    // amber-700
				secondary: '#F59E0B',  // amber-500
				accent: '#F87171',     // red-400
				'bg': {
					light: '#FFFBEB',    // amber-50
					medium: '#FEF3C7',   // amber-100
					dark: '#FDE68A',     // amber-200
				},
				text: {
					primary: '#78350F',  // amber-900
					secondary: '#B45309', // amber-700
				},
			},
		},
    },
  },
  plugins: [],
} satisfies Config;
