import {existsSync, lstatSync, readdirSync, writeFileSync} from 'fs';
import {readFileSync} from 'node:fs';
import path from 'path';

export const packages = [
	'ai-improvements',
	'animation-utils',
	'astro-example',
	'babel-loader',
	'bugs',
	'bundler',
	'cli-autocomplete',
	'cli',
	'cloudrun',
	'compositor-darwin-arm64',
	'compositor-darwin-x64',
	'compositor-linux-arm64-gnu',
	'compositor-linux-arm64-musl',
	'compositor-linux-x64-gnu',
	'compositor-linux-x64-musl',
	'compositor-win32-x64-msvc',
	'core',
	'create-video',
	'discord-poster',
	'docs',
	'enable-scss',
	'eslint-config',
	'eslint-plugin',
	'example-without-zod',
	'example',
	'fonts',
	'gif',
	'google-fonts',
	'install-whisper-cpp',
	'it-tests',
	'lambda-go-example',
	'lambda-go',
	'lambda-php',
	'lambda-python',
	'lambda',
	'layout-utils',
	'lottie',
	'media-utils',
	'motion-blur',
	'noise',
	'paths',
	'player-example',
	'player',
	'preload',
	'renderer',
	'rive',
	'shapes',
	'skia',
	'streaming',
	'studio-server',
	'studio-shared',
	'studio',
	'tailwind',
	'test-utils',
	'three',
	'transitions',
	'video-parser',
	'zod-types',
] as const;

export type Pkgs = (typeof packages)[number];

export const getAllPackages = () => {
	const pkgDir = path.join(__dirname, '..', '..', '..');
	const filePackages = readdirSync(pkgDir)
		.filter((pkg) => lstatSync(path.join(pkgDir, pkg)).isDirectory())
		.sort()
		.map((pkg) => ({
			pkg: pkg as Pkgs,
			path: path.join(pkgDir, pkg, 'package.json'),
		}))
		.filter(({path}) => existsSync(path));

	const notInFile = packages
		.slice()
		.sort()
		.map((pkg) => pkg);

	if (
		JSON.stringify(filePackages.map((pkg) => pkg.pkg).sort()) !==
		JSON.stringify(notInFile)
	) {
		const diff = notInFile.filter(
			(pkg) => !filePackages.map((pkg) => pkg.pkg).includes(pkg),
		);
		const diff2 = filePackages
			.map((pkg) => pkg.pkg)
			.filter((pkg) => !notInFile.includes(pkg));

		throw new Error(
			`Add the new package to 'get-all-packages.ts'. Diff: ${JSON.stringify(diff, null, 2)} ${JSON.stringify(
				diff2,
				null,
				2,
			)}`,
		);
	}

	return filePackages;
};

export const updatePackageJson = (
	json: string,
	updater: (data: Record<string, unknown>) => Record<string, unknown>,
) => {
	const contents = readFileSync(json, 'utf8');
	const pkg = JSON.parse(contents);
	const updatedPkg = updater(pkg);
	writeFileSync(json, JSON.stringify(updatedPkg, null, '\t') + '\n');
};

export const descriptions: {[key in Pkgs]: string | null} = {
	player: 'React component for embedding a Remotion preview into your app',
	cloudrun: 'Render Remotion videos on Google Cloud Run',
	renderer: 'Render Remotion videos using Node.js or Bun',
	cli: 'Control Remotion features using the `npx remotion` command',
	core: 'Make videos programmatically',
	lambda: 'Render Remotion videos on AWS Lambda',
	bundler: 'Bundle Remotion compositions using Webpack',
	'studio-server': 'Run a Remotion Studio with a server backend',
	'install-whisper-cpp': 'Helpers for installing and using Whisper.cpp',
	'google-fonts': 'Use Google Fonts in Remotion',
	'media-utils': 'Utilities for working with media files',
	lottie: 'Include Lottie animations in Remotion',
	'layout-utils': 'Utilities for working with layouts',
	noise: 'Noise generation functions',
	'motion-blur': 'Motion blur effect for Remotion',
	preload: 'Preloads assets for use in Remotion',
	shapes: 'Generate SVG shapes',
	'zod-types': 'Zod types for Remotion',
	gif: 'Embed GIFs in a Remotion video',
	'eslint-plugin': 'Rules for writing Remotion code',
	'eslint-config': 'Default configuration for Remotion templates',
	'compositor-linux-x64-gnu': 'Linux x64 binary for the Remotion Rust code',
	'compositor-linux-x64-musl': 'Linux x64 binary for the Remotion Rust code',
	'compositor-darwin-x64': 'MacOS x64 binary for the Remotion Rust code',
	'compositor-darwin-arm64':
		'MacOS Apple Silicon binary for the Remotion Rust code',
	'compositor-linux-arm64-gnu': 'Linux ARM64 binary for the Remotion Rust code',
	'compositor-linux-arm64-musl':
		'Linux ARM64 binary for the Remotion Rust code',
	'babel-loader': 'Babel loader for Remotion',
	fonts: 'Helpers for loading local fonts into Remotion',
	transitions: 'Library for creating transitions in Remotion',
	'enable-scss': 'Enable SCSS support in Remotion',
	'create-video': 'Create a new Remotion project',
	'studio-shared':
		'Internal package for shared objects between the Studio backend and frontend',
	tailwind: 'Enable TailwindCSS support in Remotion',
	streaming: 'Utilities for streaming data between programs',
	'video-parser': null,
	rive: 'Embed Rive animations in a Remotion video',
	paths: 'Utilities for working with SVG paths',
	studio: 'APIs for interacting with the Remotion Studio',
	skia: 'Include React Native Skia components in a Remotion video',
	three: 'Include React Three Fiber components in a Remotion video',
	'astro-example': null,
	'lambda-go-example': null,
	'compositor-win32-x64-msvc': null,
	'animation-utils': 'Helpers for animating CSS properties',
	'test-utils': null,
	'example-without-zod': null,
	'lambda-go': null,
	example: null,
	'lambda-php': null,
	bugs: null,
	docs: null,
	'it-tests': null,
	'lambda-python': null,
	'player-example': null,
	'ai-improvements': null,
	'discord-poster': null,
	'cli-autocomplete': null,
};

export const apiDocs: {[key in Pkgs]: string | null} = {
	player: 'https://www.remotion.dev/docs/player',
	cloudrun: 'https://www.remotion.dev/docs/cloudrun',
	renderer: 'https://www.remotion.dev/docs/renderer',
	cli: 'https://www.remotion.dev/docs/cli',
	core: 'https://www.remotion.dev/docs/remotion',
	lambda: 'https://www.remotion.dev/docs/lambda',
	bundler: 'https://www.remotion.dev/docs/bundler',
	'studio-server': null,
	'install-whisper-cpp': 'https://www.remotion.dev/docs/install-whisper-cpp',
	'google-fonts': 'https://www.remotion.dev/docs/google-fonts',
	'media-utils': 'https://www.remotion.dev/docs/media-utils',
	lottie: 'https://www.remotion.dev/docs/lottie',
	'layout-utils': 'https://www.remotion.dev/docs/layout-utils',
	noise: 'https://www.remotion.dev/docs/noise',
	'motion-blur': 'https://www.remotion.dev/docs/motion-blur',
	preload: 'https://www.remotion.dev/docs/preload',
	shapes: 'https://www.remotion.dev/docs/shapes',
	'zod-types': 'https://www.remotion.dev/docs/zod-types',
	gif: 'https://www.remotion.dev/docs/gif',
	'eslint-plugin':
		'https://www.remotion.dev/docs/brownfield#install-the-eslint-plugin',
	'eslint-config':
		'https://www.remotion.dev/docs/brownfield#install-the-eslint-plugin',
	'compositor-linux-x64-gnu': null,
	'compositor-linux-x64-musl': null,
	'compositor-darwin-x64': null,
	'ai-improvements': null,
	'discord-poster': null,
	'cli-autocomplete': null,
	'animation-utils': null,
	'example-without-zod': null,
	'lambda-go': null,
	example: null,
	'lambda-php': null,
	bugs: null,
	docs: null,
	'it-tests': null,
	'lambda-python': null,
	'player-example': null,
	'astro-example': null,
	'lambda-go-example': null,
	'test-utils': null,
	'babel-loader': 'https://www.remotion.dev/docs/legacy-babel',
	'compositor-darwin-arm64': null,
	'compositor-linux-arm64-gnu': null,
	'compositor-linux-arm64-musl': null,
	'compositor-win32-x64-msvc': null,
	'enable-scss': 'https://www.remotion.dev/docs/enable-scss/overview',
	'create-video': 'https://remotion.dev/templates',
	'studio-shared': null,
	'video-parser': null,
	fonts: 'https://www.remotion.dev/docs/fonts-api',
	paths: 'https://www.remotion.dev/paths',
	rive: 'https://www.remotion.dev/docs/rive',
	tailwind: 'https://www.remotion.dev/docs/tailwind/tailwind',
	skia: 'https://www.remotion.dev/docs/skia',
	three: 'https://www.remotion.dev/docs/three',
	streaming: null,
	studio: null,
	transitions: 'https://www.remotion.dev/transitions',
};
