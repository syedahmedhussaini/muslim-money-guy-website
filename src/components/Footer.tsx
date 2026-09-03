import { Link } from "@tanstack/react-router";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "lucide-react";

import { Logo } from "#/components/Logo";
import { site } from "#/lib/site";

const COLUMNS: {
	heading: string;
	links: { label: string; to?: string; href?: string }[];
}[] = [
	{
		heading: "Product",
		links: [
			{ label: "Features", to: "/features" },
			{ label: "Pricing", to: "/pricing" },
			{ label: "Integrations", to: "/features" },
			{ label: "Changelog", href: "#" },
		],
	},
	{
		heading: "Company",
		links: [
			{ label: "About", to: "/about" },
			{ label: "Contact", to: "/contact" },
			{ label: "Careers", href: "#" },
			{ label: "Articles", to: "/articles" },
		],
	},
	{
		heading: "Resources",
		links: [
			{ label: "Documentation", href: "#" },
			{ label: "Help center", href: "#" },
			{ label: "Status", href: "#" },
			{ label: "API", href: "#" },
		],
	},
	{
		heading: "Legal",
		links: [
			{ label: "Privacy", href: "#" },
			{ label: "Terms", href: "#" },
			{ label: "Security", href: "#" },
			{ label: "Cookies", href: "#" },
		],
	},
];

const SOCIAL = [
	{ label: "Twitter", href: "#", icon: TwitterIcon },
	{ label: "GitHub", href: "#", icon: GithubIcon },
	{ label: "LinkedIn", href: "#", icon: LinkedinIcon },
];

export default function Footer() {
	return (
		<footer className="border-t bg-muted/30">
			<div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
				<div className="grid gap-10 lg:grid-cols-[1.5fr_repeat(4,1fr)]">
					<div className="max-w-xs">
						<Link to="/" aria-label={`${site.name} home`}>
							<Logo />
						</Link>
						<p className="mt-4 text-sm text-muted-foreground text-pretty">
							{site.tagline}
						</p>
						<div className="mt-5 flex items-center gap-2">
							{SOCIAL.map(({ label, href, icon: Icon }) => (
								<a
									key={label}
									href={href}
									aria-label={label}
									className="flex size-8 items-center justify-center rounded-md border text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
								>
									<Icon className="size-4" />
								</a>
							))}
						</div>
					</div>

					{COLUMNS.map((col) => (
						<div key={col.heading}>
							<h3 className="text-sm font-semibold">{col.heading}</h3>
							<ul className="mt-4 space-y-3 text-sm">
								{col.links.map((link) => (
									<li key={link.label}>
										{link.to ? (
											<Link
												to={link.to}
												className="text-muted-foreground transition-colors hover:text-foreground"
											>
												{link.label}
											</Link>
										) : (
											<a
												href={link.href}
												className="text-muted-foreground transition-colors hover:text-foreground"
											>
												{link.label}
											</a>
										)}
									</li>
								))}
							</ul>
						</div>
					))}
				</div>

				<div className="mt-12 flex flex-col items-center justify-between gap-3 border-t pt-6 text-sm text-muted-foreground sm:flex-row">
					<p>
						© {new Date().getFullYear()} {site.name}, Inc. All rights reserved.
					</p>
					<p>Made for teams that ship.</p>
				</div>
			</div>
		</footer>
	);
}
