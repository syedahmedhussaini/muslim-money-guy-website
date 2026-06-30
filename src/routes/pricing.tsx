import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckIcon } from "lucide-react";
import { useState } from "react";

import { PageHeader } from "#/components/sections/PageHeader";
import { Badge } from "#/components/ui/badge";
import { Button } from "#/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "#/components/ui/card";
import { faqs, plans } from "#/lib/site";
import { cn } from "#/lib/utils.ts";

export const Route = createFileRoute("/pricing")({
	component: Pricing,
	head: () => ({ meta: [{ title: "Pricing — Vertex" }] }),
});

function Pricing() {
	const [yearly, setYearly] = useState(true);

	return (
		<section className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
			<PageHeader
				eyebrow="Pricing"
				title="Simple, transparent pricing"
				subtitle="Start free, upgrade when you're ready. Every paid plan comes with a 14-day trial and no setup fees."
			/>

			{/* Billing toggle */}
			<div className="mt-8 flex items-center justify-center gap-3">
				<button
					type="button"
					onClick={() => setYearly(false)}
					className={cn(
						"text-sm font-medium transition-colors",
						!yearly ? "text-foreground" : "text-muted-foreground",
					)}
				>
					Monthly
				</button>
				<button
					type="button"
					role="switch"
					aria-checked={yearly}
					aria-label="Toggle yearly billing"
					onClick={() => setYearly((v) => !v)}
					className="relative h-6 w-11 rounded-full bg-primary/30 transition-colors data-[on=true]:bg-primary"
					data-on={yearly}
				>
					<span
						className={cn(
							"absolute top-0.5 left-0.5 size-5 rounded-full bg-white shadow-sm transition-transform",
							yearly && "translate-x-5",
						)}
					/>
				</button>
				<span className="flex items-center gap-2 text-sm font-medium">
					Yearly
					<Badge variant="secondary" className="text-primary">
						Save 20%
					</Badge>
				</span>
			</div>

			{/* Plans */}
			<div className="mt-12 grid items-start gap-6 lg:grid-cols-3">
				{plans.map((plan) => {
					const price = yearly ? plan.price.yearly : plan.price.monthly;
					return (
						<Card
							key={plan.name}
							className={cn(
								"relative",
								plan.featured && "border-primary shadow-lg shadow-primary/10",
							)}
						>
							{plan.featured && (
								<Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
									Most popular
								</Badge>
							)}
							<CardHeader>
								<CardTitle className="text-xl">{plan.name}</CardTitle>
								<CardDescription className="text-pretty">
									{plan.blurb}
								</CardDescription>
								<div className="mt-4 flex items-baseline gap-1">
									<span className="text-4xl font-extrabold tracking-tight">
										${price}
									</span>
									<span className="text-sm text-muted-foreground">
										/ user / month
									</span>
								</div>
								{yearly && price > 0 && (
									<p className="text-xs text-muted-foreground">
										billed annually
									</p>
								)}
							</CardHeader>
							<CardContent>
								<ul className="space-y-3 text-sm">
									{plan.features.map((f) => (
										<li key={f} className="flex items-start gap-2">
											<CheckIcon className="mt-0.5 size-4 shrink-0 text-primary" />
											<span>{f}</span>
										</li>
									))}
								</ul>
							</CardContent>
							<CardFooter>
								<Button
									asChild
									className="w-full"
									variant={plan.featured ? "default" : "outline"}
								>
									<Link to="/contact">{plan.cta}</Link>
								</Button>
							</CardFooter>
						</Card>
					);
				})}
			</div>

			{/* FAQ */}
			<div className="mx-auto mt-24 max-w-3xl">
				<h2 className="text-center text-3xl font-bold tracking-tight">
					Frequently asked questions
				</h2>
				<div className="mt-8 divide-y rounded-xl border">
					{faqs.map((faq) => (
						<details key={faq.q} className="group px-5">
							<summary className="flex cursor-pointer list-none items-center justify-between py-4 font-medium [&::-webkit-details-marker]:hidden">
								{faq.q}
								<span className="ml-4 text-muted-foreground transition-transform group-open:rotate-45">
									+
								</span>
							</summary>
							<p className="pb-4 text-sm text-muted-foreground text-pretty">
								{faq.a}
							</p>
						</details>
					))}
				</div>
				<p className="mt-8 text-center text-sm text-muted-foreground">
					Still have questions?{" "}
					<Link
						to="/contact"
						className="font-medium text-primary hover:underline"
					>
						Talk to our team
					</Link>
				</p>
			</div>
		</section>
	);
}
