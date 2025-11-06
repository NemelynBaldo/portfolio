/// <reference types="vite/client" />

// Allow importing image assets in TS/TSX without type errors
declare module '*.png' {
	const src: string
	export default src
}
declare module '*.jpg' {
	const src: string
	export default src
}
declare module '*.jpeg' {
	const src: string
	export default src
}
declare module '*.svg' {
	const src: string
	export default src
}
