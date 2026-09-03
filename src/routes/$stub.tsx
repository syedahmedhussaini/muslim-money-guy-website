import { createFileRoute, notFound } from "@tanstack/react-router";
import ReactMarkdown from "react-markdown";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

import { findArticle } from "#/lib/articles";

export const Route = createFileRoute("/$stub")({
	loader: ({ params }) => {
		const article = findArticle(params.stub);
		if (!article) {
			throw notFound();
		}
		return article;
	},
	component: ArticlePage,
	head: ({ params }) => {
		const article = findArticle(params.stub);
		return {
			meta: [
				{ title: article ? `${article.title} — Vertex` : "Article — Vertex" },
				...(article?.keyTakeaway
					? [{ name: "description", content: article.keyTakeaway }]
					: []),
			],
		};
	},
});

function formatDate(date: string) {
	return new Intl.DateTimeFormat("en-US", {
		dateStyle: "long",
		timeZone: "UTC",
	}).format(new Date(`${date}T00:00:00Z`));
}

function ArticlePage() {
	const article = Route.useLoaderData();

	return (
		<article className="mx-auto w-full max-w-3xl px-4 py-20 sm:px-6">
			<header>
				{article.topic && (
					<p className="text-sm font-medium text-primary">{article.topic}</p>
				)}
				<h1 className="mt-2 text-4xl font-extrabold tracking-tight text-balance sm:text-5xl">
					{article.title}
				</h1>
				<time
					dateTime={article.date}
					className="mt-4 block text-sm text-muted-foreground"
				>
					{formatDate(article.date)}
				</time>
				{article.keyTakeaway && (
					<p className="mt-6 border-l-2 border-primary pl-4 text-muted-foreground">
						<strong className="text-foreground">Key takeaway:</strong>{" "}
						{article.keyTakeaway}
					</p>
				)}
				{article.image && (
					<img
						src={article.image}
						alt={article.imageAlt ?? article.title}
						className="mt-8 w-full rounded-lg"
					/>
				)}
			</header>

			<div className="prose mt-10 max-w-none dark:prose-invert">
				<ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeSlug]}>
					{article.body}
				</ReactMarkdown>
			</div>
		</article>
	);
}
