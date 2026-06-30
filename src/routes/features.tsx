import { createFileRoute } from "@tanstack/react-router";

import { CTASection } from "#/components/sections/CTASection";
import { PageHeader } from "#/components/sections/PageHeader";
import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from "#/components/ui/card";
import { featureGroups } from "#/lib/site";

export const Route = createFileRoute("/features")({
	component: Features,
	head: () => ({ meta: [{ title: "Features — Vertex" }] }),
});

function Features() {
	return (
		<>
			<section className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
				<PageHeader
					eyebrow="Features"
					title="Everything you need to run great work"
					subtitle="Vertex brings planning, automation, and analytics into a single workspace — so your team spends less time in tools and more time shipping."
				/>

				<div className="mt-16 space-y-16">
					{featureGroups.map((group) => (
						<div key={group.name}>
							<div className="flex items-center gap-3">
								<h2 className="text-2xl font-bold tracking-tight">
									{group.name}
								</h2>
								<div className="h-px flex-1 bg-border" />
							</div>
							<div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
								{group.features.map(({ icon: Icon, title, desc }) => (
									<Card
										key={title}
										className="transition-shadow hover:shadow-md"
									>
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
						</div>
					))}
				</div>
			</section>

			<CTASection
				title="See Vertex in action"
				subtitle="Start a free trial and explore every feature with your own team's data."
			/>
		</>
	);
}
