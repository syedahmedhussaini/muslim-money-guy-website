import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const config = defineConfig({
	resolve: { tsconfigPaths: true },
	// host/allowedHosts let the dev server be reached through a proxy
	// (e.g. a gently workspace preview URL), not just localhost.
	server: { host: true, allowedHosts: true },
	plugins: [tailwindcss(), tanstackStart(), viteReact()],
});

export default config;
