import { Link } from "@tanstack/react-router";
import { ArrowRightIcon } from "lucide-react";

import { Button } from "#/components/ui/button";

export function CTASection({
	title = "Ready to get started?",
	subtitle = "Join thousands of teams running their work on Vertex. Free for 14 days, no card required.",
}: {
	title?: string;
	subtitle?: string;
}) {
	return (
		<section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
			<div className="relative overflow-hidden rounded-2xl border bg-gradient-to-br from-primary to-indigo-500 px-6 py-14 text-center text-primary-foreground sm:px-12">
				<div
					aria-hidden
					className="pointer-events-none absolute inset-0 opacity-20 [background:radial-gradient(circle_at_top,white,transparent_60%)]"
				/>
				<div className="relative">
					<h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">
						{title}
					</h2>
					<p className="mx-auto mt-4 max-w-xl text-primary-foreground/90 text-pretty">
						{subtitle}
					</p>
					<div className="mt-8 flex flex-wrap items-center justify-center gap-3">
						<Button asChild size="lg" variant="secondary">
							<Link to="/contact">
								Get started
								<ArrowRightIcon />
							</Link>
						</Button>
						<Button
							asChild
							size="lg"
							variant="outline"
							className="border-white/30 bg-transparent text-primary-foreground hover:bg-white/10 hover:text-primary-foreground"
						>
							<Link to="/pricing">View pricing</Link>
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
