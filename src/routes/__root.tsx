import { TanStackDevtools } from "@tanstack/react-devtools";
import type { QueryClient } from "@tanstack/react-query";
import {
	createRootRouteWithContext,
	HeadContent,
	Link,
	Scripts,
} from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { ThemeProvider } from "../components/theme-provider";
import { Button } from "../components/ui/button";
import { Toaster } from "../components/ui/sonner";
import TanStackQueryDevtools from "../integrations/tanstack-query/devtools";
import { site } from "../lib/site";
import appCss from "../styles.css?url";

interface MyRouterContext {
	queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
			{ title: `${site.name} — ${site.tagline}` },
			{ name: "description", content: site.description },
			{ property: "og:title", content: `${site.name} — ${site.tagline}` },
			{ property: "og:description", content: site.description },
			{ property: "og:type", content: "website" },
		],
		links: [{ rel: "stylesheet", href: appCss }],
	}),
	notFoundComponent: NotFound,
	shellComponent: RootDocument,
});

function NotFound() {
	return (
		<section className="mx-auto flex w-full max-w-6xl flex-col items-center px-4 py-28 text-center sm:px-6">
			<p className="text-6xl font-extrabold tracking-tight text-primary">404</p>
			<h1 className="mt-4 text-2xl font-bold tracking-tight">
				This page wandered off
			</h1>
			<p className="mt-3 max-w-md text-muted-foreground text-pretty">
				The page you're looking for doesn't exist or may have moved. Let's get
				you back on track.
			</p>
			<Button asChild size="lg" className="mt-8">
				<Link to="/">Back to home</Link>
			</Button>
		</section>
	);
}

function RootDocument({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<HeadContent />
			</head>
			<body>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<div className="flex min-h-svh flex-col">
						<Header />
						<main className="flex-1">{children}</main>
						<Footer />
					</div>
					<Toaster />
					<TanStackDevtools
						config={{ position: "bottom-right" }}
						plugins={[
							{
								name: "Tanstack Router",
								render: <TanStackRouterDevtoolsPanel />,
							},
							TanStackQueryDevtools,
						]}
					/>
				</ThemeProvider>
				<Scripts />
			</body>
		</html>
	);
}
