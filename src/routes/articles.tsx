import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";

import { PageHeader } from "#/components/sections/PageHeader";
import { Button } from "#/components/ui/button";
import {
	ARTICLES_PER_PAGE,
	normalizePage,
	paginateArticles,
} from "#/lib/articles";

export const Route = createFileRoute("/articles")({
	validateSearch: (search: Record<string, unknown>) => {
		const page = normalizePage(search.page);
		return { page: page === 1 ? undefined : page };
	},
	loaderDeps: ({ search }) => ({ page: search.page }),
	loader: ({ deps }) => {
		const articlePage = paginateArticles(deps.page);
		if (
			articlePage.totalPages > 0 &&
			articlePage.page > articlePage.totalPages
		) {
			throw notFound();
		}
		return articlePage;
	},
	component: Articles,
	head: () => ({ meta: [{ title: "Articles — Vertex" }] }),
});

function formatDate(date: string) {
	return new Intl.DateTimeFormat("en-US", {
		dateStyle: "long",
		timeZone: "UTC",
	}).format(new Date(`${date}T00:00:00Z`));
}

function Articles() {
	const { articles, page, totalPages, totalArticles } = Route.useLoaderData();

	return (
		<section className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
			<PageHeader
				eyebrow="Articles"
				title="Ideas for making money make sense"
				subtitle={`${totalArticles} ${totalArticles === 1 ? "article" : "articles"}`}
			/>

			<div className="mx-auto mt-12 max-w-3xl divide-y border-y">
				{articles.map((article) => (
					<article key={article.stub} className="py-6 first:pt-0 last:pb-0">
						<Link
							to="/$stub"
							params={{ stub: article.stub }}
							className="group block"
						>
							<time
								dateTime={article.date}
								className="text-sm text-muted-foreground"
							>
								{formatDate(article.date)}
							</time>
							<h2 className="mt-2 text-xl font-bold tracking-tight group-hover:text-primary">
								{article.title}
							</h2>
							{article.topic && (
								<p className="mt-2 text-sm text-muted-foreground">
									{article.topic}
								</p>
							)}
						</Link>
					</article>
				))}
			</div>

			{totalPages > 1 && (
				<nav
					aria-label="Article pages"
					className="mx-auto mt-8 flex max-w-3xl items-center justify-between"
				>
					{page > 1 ? (
						<Button variant="outline" asChild>
							<Link
								to="/articles"
								search={{ page: page - 1 === 1 ? undefined : page - 1 }}
							>
								<ArrowLeftIcon />
								Previous
							</Link>
						</Button>
					) : (
						<span />
					)}
					<span className="text-sm text-muted-foreground">
						Page {page} of {totalPages}
					</span>
					{page < totalPages ? (
						<Button variant="outline" asChild>
							<Link to="/articles" search={{ page: page + 1 }}>
								Next
								<ArrowRightIcon />
							</Link>
						</Button>
					) : (
						<span />
					)}
				</nav>
			)}

			<p className="mx-auto mt-6 max-w-3xl text-center text-xs text-muted-foreground">
				Showing up to {ARTICLES_PER_PAGE} articles per page.
			</p>
		</section>
	);
}
