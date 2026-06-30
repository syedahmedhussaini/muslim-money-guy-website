import { Link } from "@tanstack/react-router";
import { MenuIcon, XIcon } from "lucide-react";
import { useState } from "react";

import { Logo } from "#/components/Logo";
import { ModeToggle } from "#/components/mode-toggle";
import { Button } from "#/components/ui/button";
import { nav } from "#/lib/site";
import { cn } from "#/lib/utils.ts";

export default function Header() {
	const [open, setOpen] = useState(false);

	return (
		<header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="mx-auto flex h-16 w-full max-w-6xl items-center gap-2 px-4 sm:px-6">
				<Link to="/" className="mr-6" aria-label={"Vertex home"}>
					<Logo />
				</Link>

				<nav className="hidden items-center gap-1 text-sm md:flex">
					{nav.map((link) => (
						<Button key={link.to} variant="ghost" size="sm" asChild>
							<Link
								to={link.to}
								activeProps={{ "data-active": true }}
								className="text-muted-foreground data-[active]:text-foreground"
							>
								{link.label}
							</Link>
						</Button>
					))}
				</nav>

				<div className="ml-auto flex items-center gap-1">
					<ModeToggle />
					<div className="hidden items-center gap-2 md:flex">
						<Button variant="ghost" size="sm" asChild>
							<a href="https://app.vertex.example" rel="noreferrer">
								Sign in
							</a>
						</Button>
						<Button size="sm" asChild>
							<Link to="/contact">Get started</Link>
						</Button>
					</div>
					<Button
						variant="ghost"
						size="icon"
						className="md:hidden"
						aria-label="Toggle menu"
						aria-expanded={open}
						onClick={() => setOpen((v) => !v)}
					>
						{open ? (
							<XIcon className="size-5" />
						) : (
							<MenuIcon className="size-5" />
						)}
					</Button>
				</div>
			</div>

			<div className={cn("border-t md:hidden", open ? "block" : "hidden")}>
				<nav className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-4 py-3 sm:px-6">
					{nav.map((link) => (
						<Link
							key={link.to}
							to={link.to}
							onClick={() => setOpen(false)}
							activeProps={{ "data-active": true }}
							className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-accent data-[active]:bg-accent data-[active]:text-foreground"
						>
							{link.label}
						</Link>
					))}
					<div className="mt-2 flex flex-col gap-2 border-t pt-3">
						<Button variant="outline" asChild>
							<a href="https://app.vertex.example" rel="noreferrer">
								Sign in
							</a>
						</Button>
						<Button asChild>
							<Link to="/contact" onClick={() => setOpen(false)}>
								Get started
							</Link>
						</Button>
					</div>
				</nav>
			</div>
		</header>
	);
}
