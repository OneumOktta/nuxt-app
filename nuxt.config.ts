export default defineNuxtConfig({
	devtools: { enabled: true },
	compatibilityDate: '2024-11-01',
	future: {
		compatibilityVersion: 4,
	},

	// experimental: {
	// 	scanPageMeta: 'after-resolve',
	// 	sharedPrerenderData: false,
	// 	compileTemplate: true,
	// 	resetAsyncDataToUndefined: true,
	// 	templateUtils: true,
	// 	relativeWatchPaths: true,
	// 	normalizeComponentNames: false,
	// 	defaults: {
	// 		useAsyncData: {
	// 			deep: true,
	// 		},
	// 	},
	// },

	// unhead: {
	// 	renderSSRHeadOptions: {
	// 		omitLineBreaks: false,
	// 	},
	// },
	components: {
		dirs: [
			{
				path: '~/components',
				pathPrefix: false,
			},
		],
	},

	modules: ['@nuxtjs/google-fonts', '@nuxt/icon', '@nuxt/image', '@nuxt/ui'],

	googleFonts: {
		families: {
			'Golos Text': true,
		},
	},
	colorMode: {
		preference: 'auto',
	},
})
