import { Badge } from "#/components/ui/badge";

export function PageHeader({
	eyebrow,
	title,
	subtitle,
}: {
	eyebrow?: string;
	title: string;
	subtitle?: string;
}) {
	return (
		<div className="mx-auto max-w-2xl text-center">
			{eyebrow && (
				<Badge variant="secondary" className="mb-4">
					{eyebrow}
				</Badge>
			)}
			<h1 className="text-4xl font-extrabold tracking-tight text-balance sm:text-5xl">
				{title}
			</h1>
			{subtitle && (
				<p className="mt-5 text-lg text-muted-foreground text-pretty">
					{subtitle}
				</p>
			)}
		</div>
	);
}
