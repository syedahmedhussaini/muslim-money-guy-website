import { site } from "#/lib/site";
import { cn } from "#/lib/utils.ts";

export function Logo({
	className,
	withWordmark = true,
}: {
	className?: string;
	withWordmark?: boolean;
}) {
	return (
		<span className={cn("flex items-center gap-2 font-semibold", className)}>
			<span
				aria-hidden
				className="flex size-7 items-center justify-center rounded-md bg-gradient-to-br from-primary to-indigo-400 text-primary-foreground shadow-sm"
			>
				<svg
					viewBox="0 0 24 24"
					className="size-4"
					fill="none"
					stroke="currentColor"
					strokeWidth={2.5}
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<title>{site.name}</title>
					<path d="M12 3 4 21h16L12 3Z" />
				</svg>
			</span>
			{withWordmark && (
				<span className="text-lg tracking-tight">{site.name}</span>
			)}
		</span>
	);
}
