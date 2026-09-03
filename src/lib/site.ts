import type { LucideIcon } from "lucide-react";
import {
	BarChart3Icon,
	BellIcon,
	BlocksIcon,
	GaugeIcon,
	GitBranchIcon,
	GlobeIcon,
	LockIcon,
	PlugIcon,
	ShieldCheckIcon,
	SparklesIcon,
	UsersIcon,
	WorkflowIcon,
} from "lucide-react";

/** Brand + global metadata, referenced everywhere so it changes in one place. */
export const site = {
	name: "Vertex",
	tagline: "The operating system for modern teams.",
	description:
		"Vertex unifies planning, automation, and analytics in one workspace so your team ships faster — with less busywork and fewer tools to wrangle.",
	email: "hello@vertex.example",
	domain: "vertex.example",
} as const;

/** Homepage-only hero branding. Kept separate so global metadata remains unchanged. */
export const homeHero = {
	headline: "Muslim Money Guy",
} as const;

export const nav = [
	{ to: "/articles", label: "Articles" },
	{ to: "/features", label: "Features" },
	{ to: "/pricing", label: "Pricing" },
	{ to: "/about", label: "About" },
	{ to: "/contact", label: "Contact" },
] as const;

export type Feature = {
	icon: LucideIcon;
	title: string;
	desc: string;
};

/** Headline features shown on the home page. */
export const homeFeatures: Feature[] = [
	{
		icon: WorkflowIcon,
		title: "Visual workflows",
		desc: "Design how work moves with a drag-and-drop builder. No scripts, no glue code — just rules that run themselves.",
	},
	{
		icon: BarChart3Icon,
		title: "Live analytics",
		desc: "Dashboards update the moment data changes, so every decision is backed by what's happening right now.",
	},
	{
		icon: PlugIcon,
		title: "100+ integrations",
		desc: "Connect the tools you already use. Vertex syncs both ways and keeps everything in lockstep.",
	},
	{
		icon: ShieldCheckIcon,
		title: "Enterprise security",
		desc: "SOC 2 Type II, SSO, and granular roles. Your data stays yours, encrypted in transit and at rest.",
	},
];

/** Full feature grid for the /features page. */
export const featureGroups: { name: string; features: Feature[] }[] = [
	{
		name: "Plan",
		features: [
			{
				icon: BlocksIcon,
				title: "Flexible boards",
				desc: "Kanban, timeline, table, or calendar — switch views without losing context.",
			},
			{
				icon: GitBranchIcon,
				title: "Dependencies",
				desc: "Link work, set blockers, and let Vertex flag risks before they slip.",
			},
			{
				icon: UsersIcon,
				title: "Capacity planning",
				desc: "See who's overloaded and rebalance in a click, before burnout sets in.",
			},
		],
	},
	{
		name: "Automate",
		features: [
			{
				icon: WorkflowIcon,
				title: "Workflow builder",
				desc: "Trigger actions on any event with a no-code rules engine anyone can edit.",
			},
			{
				icon: BellIcon,
				title: "Smart notifications",
				desc: "The right ping at the right time — and silence for everything else.",
			},
			{
				icon: SparklesIcon,
				title: "AI assist",
				desc: "Summarize threads, draft updates, and surface next steps automatically.",
			},
		],
	},
	{
		name: "Measure",
		features: [
			{
				icon: GaugeIcon,
				title: "Real-time dashboards",
				desc: "Composable widgets that refresh instantly as your team works.",
			},
			{
				icon: GlobeIcon,
				title: "Custom reports",
				desc: "Slice by team, project, or quarter and export to anywhere.",
			},
			{
				icon: BarChart3Icon,
				title: "Goal tracking",
				desc: "Tie daily work to outcomes and watch progress roll up on its own.",
			},
		],
	},
	{
		name: "Trust",
		features: [
			{
				icon: ShieldCheckIcon,
				title: "SOC 2 Type II",
				desc: "Independently audited controls, reviewed and renewed every year.",
			},
			{
				icon: LockIcon,
				title: "SSO & SCIM",
				desc: "SAML single sign-on and automated provisioning on every business plan.",
			},
			{
				icon: GlobeIcon,
				title: "Data residency",
				desc: "Choose where your data lives — US, EU, or your own region.",
			},
		],
	},
];

export type Plan = {
	name: string;
	price: { monthly: number; yearly: number };
	blurb: string;
	cta: string;
	featured?: boolean;
	features: string[];
};

export const plans: Plan[] = [
	{
		name: "Starter",
		price: { monthly: 0, yearly: 0 },
		blurb: "For individuals and small projects getting off the ground.",
		cta: "Start for free",
		features: [
			"Up to 3 members",
			"Unlimited tasks & docs",
			"2 active workflows",
			"7-day activity history",
			"Community support",
		],
	},
	{
		name: "Team",
		price: { monthly: 12, yearly: 10 },
		blurb: "For growing teams that need automation and insight.",
		cta: "Start 14-day trial",
		featured: true,
		features: [
			"Unlimited members",
			"Unlimited workflows",
			"Real-time dashboards",
			"100+ integrations",
			"Priority support",
		],
	},
	{
		name: "Enterprise",
		price: { monthly: 28, yearly: 24 },
		blurb: "For organizations with advanced security and scale needs.",
		cta: "Contact sales",
		features: [
			"Everything in Team",
			"SAML SSO & SCIM",
			"Data residency controls",
			"Audit logs & SLA",
			"Dedicated success manager",
		],
	},
];

export const faqs: { q: string; a: string }[] = [
	{
		q: "Can I change plans later?",
		a: "Anytime. Upgrades take effect immediately and downgrades apply at the end of your billing cycle. We prorate the difference automatically.",
	},
	{
		q: "Is there a free trial?",
		a: "Every paid plan includes a 14-day trial with full access. No credit card required to start, and no automatic charges when it ends.",
	},
	{
		q: "What counts as a member?",
		a: "Anyone with a seat who can create or edit work. Guests and view-only stakeholders are always free on every plan.",
	},
	{
		q: "How does billing work?",
		a: "Choose monthly or yearly billing. Yearly saves roughly two months, and you can switch between them whenever you like.",
	},
	{
		q: "Do you offer discounts?",
		a: "Yes — nonprofits and accredited education teams get 50% off, and we offer volume pricing above 100 seats. Reach out and we'll sort it.",
	},
];

export const stats: { value: string; label: string }[] = [
	{ value: "12k+", label: "Teams onboard" },
	{ value: "180+", label: "Countries" },
	{ value: "99.99%", label: "Uptime SLA" },
	{ value: "4.9/5", label: "Average rating" },
];

export const testimonials: {
	quote: string;
	name: string;
	role: string;
}[] = [
	{
		quote:
			"We replaced four tools with Vertex and shipped our roadmap a full quarter early. The automation alone pays for itself.",
		name: "Priya Nair",
		role: "VP Engineering, Northwind",
	},
	{
		quote:
			"The dashboards finally gave our leadership a single source of truth. No more screenshots in slide decks.",
		name: "Marcus Bell",
		role: "Head of Ops, Lumen Labs",
	},
	{
		quote:
			"Setup took an afternoon and our whole team was productive the next morning. It just feels obvious.",
		name: "Sofia Greco",
		role: "Founder, Atlas Studio",
	},
];
