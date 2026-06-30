import { createFileRoute } from "@tanstack/react-router";
import { ClockIcon, MailIcon, MapPinIcon } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import { PageHeader } from "#/components/sections/PageHeader";
import { Button } from "#/components/ui/button";
import { Card, CardContent } from "#/components/ui/card";
import { Input } from "#/components/ui/input";
import { Label } from "#/components/ui/label";
import { Textarea } from "#/components/ui/textarea";
import { site } from "#/lib/site";

export const Route = createFileRoute("/contact")({
	component: Contact,
	head: () => ({ meta: [{ title: "Contact — Vertex" }] }),
});

const DETAILS = [
	{ icon: MailIcon, label: "Email", value: site.email },
	{
		icon: MapPinIcon,
		label: "Office",
		value: "548 Market St, San Francisco, CA",
	},
	{ icon: ClockIcon, label: "Hours", value: "Mon–Fri, 9am–6pm PT" },
];

function Contact() {
	const [submitting, setSubmitting] = useState(false);

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const form = e.currentTarget;
		setSubmitting(true);
		// No backend in this template — simulate a request, then confirm.
		setTimeout(() => {
			setSubmitting(false);
			form.reset();
			toast.success("Thanks — we'll be in touch within one business day.");
		}, 700);
	}

	return (
		<section className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
			<PageHeader
				eyebrow="Contact"
				title="Let's talk"
				subtitle="Questions about pricing, a custom plan, or just want a demo? Send us a note and a real human will reply."
			/>

			<div className="mx-auto mt-14 grid max-w-5xl gap-8 lg:grid-cols-[1fr_1.2fr]">
				{/* Details */}
				<div className="space-y-4">
					{DETAILS.map(({ icon: Icon, label, value }) => (
						<div key={label} className="flex items-start gap-3">
							<div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
								<Icon className="size-5" />
							</div>
							<div>
								<div className="text-sm font-medium">{label}</div>
								<div className="text-sm text-muted-foreground">{value}</div>
							</div>
						</div>
					))}
					<div className="rounded-xl border bg-muted/30 p-5 text-sm text-muted-foreground text-pretty">
						Looking for help with an existing account? Visit the{" "}
						<a
							href="https://help.vertex.example"
							className="font-medium text-primary hover:underline"
						>
							help center
						</a>{" "}
						for guides and answers to common questions.
					</div>
				</div>

				{/* Form */}
				<Card>
					<CardContent>
						<form onSubmit={handleSubmit} className="space-y-5">
							<div className="grid gap-5 sm:grid-cols-2">
								<div className="space-y-2">
									<Label htmlFor="name">Name</Label>
									<Input
										id="name"
										name="name"
										required
										placeholder="Jane Doe"
									/>
								</div>
								<div className="space-y-2">
									<Label htmlFor="email">Work email</Label>
									<Input
										id="email"
										name="email"
										type="email"
										required
										placeholder="jane@company.com"
									/>
								</div>
							</div>
							<div className="space-y-2">
								<Label htmlFor="company">Company</Label>
								<Input id="company" name="company" placeholder="Acme Inc." />
							</div>
							<div className="space-y-2">
								<Label htmlFor="message">How can we help?</Label>
								<Textarea
									id="message"
									name="message"
									required
									rows={5}
									placeholder="Tell us a bit about your team and what you're looking for…"
								/>
							</div>
							<Button type="submit" size="lg" disabled={submitting}>
								{submitting ? "Sending…" : "Send message"}
							</Button>
							<p className="text-xs text-muted-foreground">
								By submitting, you agree to our privacy policy. We'll never
								share your details.
							</p>
						</form>
					</CardContent>
				</Card>
			</div>
		</section>
	);
}
