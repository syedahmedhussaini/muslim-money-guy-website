import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRightIcon, CheckIcon, StarIcon } from "lucide-react";

import { CTASection } from "#/components/sections/CTASection";
import { Badge } from "#/components/ui/badge";
import { Button } from "#/components/ui/button";
import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from "#/components/ui/card";
import { homeFeatures, homeHero, site, stats, testimonials } from "#/lib/site";

export const Route = createFileRoute("/")({ component: Home });

const LOGOS = [
	"Northwind",
	"Lumen Labs",
	"Atlas",
	"Corewave",
	"Monarch",
	"Drift",
];

const HERO_POINTS = [
	"No credit card required",
	"Set up in minutes",
	"Cancel anytime",
];

function Home() {
	return (
		<>
			{/* Hero */}
			<section className="relative overflow-hidden">
				<div
					aria-hidden
					className="pointer-events-none absolute inset-0 -z-10 [background:radial-gradient(60%_50%_at_50%_0%,color-mix(in_oklch,var(--primary)_18%,transparent),transparent)]"
				/>
				<div className="mx-auto w-full max-w-6xl px-4 py-20 text-center sm:px-6 sm:py-28">
					<Badge variant="secondary" className="mb-5">
						<StarIcon className="size-3 fill-current" />
						Trusted by 12,000+ teams worldwide
					</Badge>
					<h1 className="mx-auto max-w-3xl text-4xl font-extrabold tracking-tight text-balance sm:text-6xl">
						<span className="bg-gradient-to-r from-primary to-indigo-400 bg-clip-text text-transparent">
							{homeHero.headline}
						</span>
					</h1>
					<p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground text-pretty">
						{site.description}
					</p>
					<div className="mt-8 flex flex-wrap items-center justify-center gap-3">
						<Button asChild size="lg">
							<Link to="/contact">
								Start free trial
								<ArrowRightIcon />
							</Link>
						</Button>
						<Button asChild size="lg" variant="outline">
							<Link to="/features">See how it works</Link>
						</Button>
					</div>
					<ul className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
						{HERO_POINTS.map((p) => (
							<li key={p} className="flex items-center gap-1.5">
								<CheckIcon className="size-4 text-primary" />
								{p}
							</li>
						))}
					</ul>

					{/* Product preview */}
					<div className="mx-auto mt-14 max-w-4xl">
						<div className="rounded-xl border bg-card p-2 shadow-2xl shadow-primary/5">
							<div className="rounded-lg border bg-muted/40">
								<div className="flex items-center gap-1.5 border-b px-4 py-3">
									<span className="size-3 rounded-full bg-destructive/60" />
									<span className="size-3 rounded-full bg-amber-400/70" />
									<span className="size-3 rounded-full bg-emerald-400/70" />
									<span className="ml-3 text-xs text-muted-foreground">
										{site.domain}/dashboard
									</span>
								</div>
								<div className="grid gap-3 p-4 sm:grid-cols-3">
									{["Backlog", "In progress", "Shipped"].map((col, ci) => (
										<div
											key={col}
											className="rounded-lg border bg-background p-3"
										>
											<div className="mb-3 flex items-center justify-between text-xs font-medium text-muted-foreground">
												{col}
												<span className="rounded bg-muted px-1.5">
													{[5, 3, 8][ci]}
												</span>
											</div>
											<div className="space-y-2">
												{[0, 1, 2].map((r) => (
													<div
														key={r}
														className="rounded-md border bg-card p-2 text-left"
													>
														<div className="h-2 w-3/4 rounded bg-muted" />
														<div className="mt-2 flex items-center gap-1.5">
															<span className="size-4 rounded-full bg-primary/20" />
															<span className="h-1.5 w-10 rounded bg-muted" />
														</div>
													</div>
												))}
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Logo cloud */}
			<section className="border-y bg-muted/30">
				<div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
					<p className="text-center text-sm text-muted-foreground">
						Powering the world's most productive teams
					</p>
					<div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
						{LOGOS.map((logo) => (
							<span
								key={logo}
								className="text-lg font-semibold tracking-tight text-muted-foreground/70"
							>
								{logo}
							</span>
						))}
					</div>
				</div>
			</section>

			{/* Features */}
			<section className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
				<div className="mx-auto max-w-2xl text-center">
					<Badge variant="secondary" className="mb-4">
						Everything in one place
					</Badge>
					<h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">
						One workspace for the whole team
					</h2>
					<p className="mt-4 text-muted-foreground text-pretty">
						Stop stitching together a dozen tools. Plan, automate, and measure
						your work where it actually happens.
					</p>
				</div>
				<div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
					{homeFeatures.map(({ icon: Icon, title, desc }) => (
						<Card key={title} className="transition-shadow hover:shadow-md">
							<CardHeader>
								<div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
									<Icon className="size-5" />
								</div>
								<CardTitle>{title}</CardTitle>
								<CardDescription className="text-pretty">
									{desc}
								</CardDescription>
							</CardHeader>
						</Card>
					))}
				</div>
				<div className="mt-8 text-center">
					<Button asChild variant="link">
						<Link to="/features">
							Explore all features
							<ArrowRightIcon />
						</Link>
					</Button>
				</div>
			</section>

			{/* Stats */}
			<section className="border-y bg-muted/30">
				<div className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-8 px-4 py-14 sm:px-6 lg:grid-cols-4">
					{stats.map((s) => (
						<div key={s.label} className="text-center">
							<div className="text-4xl font-extrabold tracking-tight text-primary">
								{s.value}
							</div>
							<div className="mt-1 text-sm text-muted-foreground">
								{s.label}
							</div>
						</div>
					))}
				</div>
			</section>

			{/* Testimonials */}
			<section className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
				<div className="mx-auto max-w-2xl text-center">
					<h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">
						Loved by teams everywhere
					</h2>
					<p className="mt-4 text-muted-foreground text-pretty">
						Don't take our word for it — here's what customers say.
					</p>
				</div>
				<div className="mt-12 grid gap-4 lg:grid-cols-3">
					{testimonials.map((t) => (
						<Card key={t.name}>
							<CardHeader>
								<div className="mb-2 flex gap-0.5 text-amber-400">
									{Array.from({ length: 5 }).map((_, i) => (
										<StarIcon
											// biome-ignore lint/suspicious/noArrayIndexKey: static star list
											key={i}
											className="size-4 fill-current"
										/>
									))}
								</div>
								<CardDescription className="text-base text-foreground text-pretty">
									“{t.quote}”
								</CardDescription>
								<div className="mt-4">
									<div className="font-semibold">{t.name}</div>
									<div className="text-sm text-muted-foreground">{t.role}</div>
								</div>
							</CardHeader>
						</Card>
					))}
				</div>
			</section>

			<CTASection />
		</>
	);
}
