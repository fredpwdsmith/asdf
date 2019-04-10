/**
 * Configuration.
 *
 * Project Configuration for gulp tasks.
 *
 * In paths you can add <<glob or array of globs>>. Edit the variables as per your project requirements.
 */

module.exports = {

	// START Editing Project Variables.
	// Project options.
	project: 'WACO', // Project Name.
	projectURL: 'http://dev.waco', // Local project URL of your already running WordPress site. Could be something like wpgulp.local or localhost:8888.
	productURL: './', // Theme/Plugin URL. Leave it like it is, since our gulpfile.js lives in the root folder.
	browserAutoOpen: true,
	browsersOpen: [
		'google chrome'
	],
	injectChanges: true,

	// Style options.
	styleSRC: './assets/css/main.scss', // Path to main .scss file.
	styleDestination: './assets/css/', // Path to place the compiled CSS file. Default set to root folder.
	outputStyle: 'compact', // Available options → 'compact' or 'compressed' or 'nested' or 'expanded'
	errLogToConsole: true,
	precision: 10,

	// JS Vendor options.
	jsVendorSRC: './assets/js/vendor/*.js', // Path to JS vendor folder.
	jsVendorDestination: './assets/js/', // Path to place the compiled JS vendors file.
	jsVendorFile: 'vendors', // Compiled JS vendors file name. Default set to vendors i.e. vendors.js.

	// JS Custom options.
	jsCustomSRC: './assets/js/custom/*.js', // Path to JS custom scripts folder.
	jsCustomDestination: './assets/js/', // Path to place the compiled JS custom scripts file.
	jsCustomFile: 'custom', // Compiled JS custom file name. Default set to custom i.e. custom.js.

	// Images options.
	// imagesSRC: './assets/img/raw/**.{png,jpg,gif,svg}', // Source folder of images which should be optimized.
	imgSRC: './assets/img/raw/*', // Source folder of images which should be optimized and watched.
	imgDST: './assets/img/', // Destination folder of optimized images. Must be different from the imagesSRC folder.

	// Watch files paths.
	styleWatchFiles: './assets/css/**/*.scss', // Path to all *.scss files inside css folder and inside them.
	vendorJSWatchFiles: './assets/js/vendor/*.js', // Path to all vendor JS files.
	customJSWatchFiles: './assets/js/custom/*.js', // Path to all custom JS files.
	projectPHPWatchFiles: './**/*.php', // Path to all PHP files.

	// Translation options.
	textDomain: 'WPGST', // Your textdomain here.
	translationFile: 'WPGST.pot', // Name of the transalation file.
	translationDestination: './languages', // Where to save the translation files.
	packageName: 'WPGST', // Package name.
	bugReport: 'https://adbdigital.com.au', // Where can users report bugs.
	lastTranslator: 'Adam Butterworth <your_email@email.com>', // Last translator Email ID.
	team: 'ADBDigital <your_email@email.com>', // Team's Email ID.

	// Browsers you care about for autoprefixing. Browserlist https://github.com/ai/browserslist
	BROWSERS_LIST: [
		'last 2 version',
		'> 1%',
		'ie >= 9',
		'ie_mob >= 10',
		'ff >= 30',
		'chrome >= 34',
		'safari >= 7',
		'opera >= 23',
		'ios >= 7',
		'android >= 4',
		'bb >= 10'
	]

	// STOP Editing Project Variables.
};
