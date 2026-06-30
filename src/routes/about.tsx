import { createFileRoute } from "@tanstack/react-router";
import { CompassIcon, HeartIcon, ShieldIcon, ZapIcon } from "lucide-react";

import { CTASection } from "#/components/sections/CTASection";
import { PageHeader } from "#/components/sections/PageHeader";
import { Card, CardHeader } from "#/components/ui/card";
import { stats } from "#/lib/site";

export const Route = createFileRoute("/about")({
	component: About,
	head: () => ({ meta: [{ title: "About — Vertex" }] }),
});

const VALUES = [
	{
		icon: CompassIcon,
		title: "Customer-obsessed",
		desc: "Every decision starts with the people who use Vertex. We ship what helps teams, not what looks good in a demo.",
	},
	{
		icon: ZapIcon,
		title: "Bias for momentum",
		desc: "We'd rather ship, learn, and improve than wait for perfect. Progress compounds.",
	},
	{
		icon: ShieldIcon,
		title: "Trust by default",
		desc: "Security and privacy aren't features — they're the foundation everything else is built on.",
	},
	{
		icon: HeartIcon,
		title: "Built to last",
		desc: "We're building a company for the long run, with sustainable growth and a team that's proud of the work.",
	},
];

const TEAM = [
	{ name: "Ava Chen", role: "Co-founder & CEO" },
	{ name: "Daniel Okafor", role: "Co-founder & CTO" },
	{ name: "Mia Rossi", role: "VP Product" },
	{ name: "Leo Martins", role: "VP Engineering" },
	{ name: "Hana Park", role: "Head of Design" },
	{ name: "Omar Haddad", role: "Head of Customer Success" },
];

function About() {
	return (
		<>
			<section className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
				<PageHeader
					eyebrow="About us"
					title="We're on a mission to make work flow"
					subtitle="Vertex started with a simple frustration: great teams were drowning in tools instead of doing their best work. We set out to fix that."
				/>

				<div className="mx-auto mt-14 max-w-3xl space-y-6 text-muted-foreground text-pretty">
					<p>
						Founded in 2021, Vertex was born out of years spent watching
						talented teams lose hours to context-switching, status meetings, and
						copy-pasting between apps. We believed the work itself — not the
						tooling around it — should be the hard part.
					</p>
					<p>
						Today, more than 12,000 teams across 180 countries run their work on
						Vertex. From two-person startups to global enterprises, they all
						share the same goal: spend less time managing work and more time
						doing it. We're just getting started.
					</p>
				</div>

				{/* Stats */}
				<div className="mt-16 grid grid-cols-2 gap-8 rounded-2xl border bg-muted/30 p-10 lg:grid-cols-4">
					{stats.map((s) => (
						<div key={s.label} className="text-center">
							<div className="text-3xl font-extrabold tracking-tight text-primary">
								{s.value}
							</div>
							<div className="mt-1 text-sm text-muted-foreground">
								{s.label}
							</div>
						</div>
					))}
				</div>
			</section>

			{/* Values */}
			<section className="mx-auto w-full max-w-6xl px-4 pb-20 sm:px-6">
				<h2 className="text-center text-3xl font-bold tracking-tight">
					What we value
				</h2>
				<div className="mt-10 grid gap-4 sm:grid-cols-2">
					{VALUES.map(({ icon: Icon, title, desc }) => (
						<Card key={title}>
							<CardHeader className="flex-row items-start gap-4">
								<div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
									<Icon className="size-5" />
								</div>
								<div>
									<h3 className="font-semibold">{title}</h3>
									<p className="mt-1 text-sm text-muted-foreground text-pretty">
										{desc}
									</p>
								</div>
							</CardHeader>
						</Card>
					))}
				</div>
			</section>

			{/* Team */}
			<section className="mx-auto w-full max-w-6xl px-4 pb-20 sm:px-6">
				<h2 className="text-center text-3xl font-bold tracking-tight">
					Meet the team
				</h2>
				<p className="mx-auto mt-3 max-w-xl text-center text-muted-foreground">
					A small, senior team obsessed with craft and customer outcomes.
				</p>
				<div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3">
					{TEAM.map((member) => (
						<div key={member.name} className="text-center">
							<div className="mx-auto flex size-20 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-indigo-400/20 text-xl font-bold text-primary">
								{member.name
									.split(" ")
									.map((n) => n[0])
									.join("")}
							</div>
							<div className="mt-3 font-semibold">{member.name}</div>
							<div className="text-sm text-muted-foreground">{member.role}</div>
						</div>
					))}
				</div>
			</section>

			<CTASection
				title="Want to build with us?"
				subtitle="We're always looking for thoughtful people. See open roles or just say hello."
			/>
		</>
	);
}
