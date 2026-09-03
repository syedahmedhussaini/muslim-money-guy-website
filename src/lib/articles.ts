export const ARTICLES_PER_PAGE = 10;

const RESERVED_STUBS = new Set([
	"about",
	"articles",
	"contact",
	"features",
	"pricing",
]);

export type Article = {
	title: string;
	date: string;
	stub: string;
	topic?: string;
	keyTakeaway?: string;
	image?: string;
	imageAlt?: string;
	body: string;
};

export type ArticlePage = {
	articles: Article[];
	page: number;
	totalPages: number;
	totalArticles: number;
};

const articleFiles = import.meta.glob("../content/articles/*.md", {
	query: "?raw",
	import: "default",
	eager: true,
}) as Record<string, string>;

function assertString(value: unknown, field: string, filePath: string): string {
	if (typeof value !== "string" || value.trim() === "") {
		throw new Error(`Article ${filePath} must include a non-empty ${field}.`);
	}
	return value.trim();
}

function parseFrontmatter(source: string, filePath: string) {
	if (!source.startsWith("---\n")) {
		throw new Error(`Article ${filePath} must start with frontmatter.`);
	}

	const end = source.indexOf("\n---", 4);
	if (end === -1) {
		throw new Error(`Article ${filePath} has unterminated frontmatter.`);
	}

	const data: Record<string, string> = {};
	for (const line of source.slice(4, end).split("\n")) {
		const separator = line.indexOf(":");
		if (separator === -1) continue;
		const key = line.slice(0, separator).trim();
		const value = line.slice(separator + 1).trim();
		data[key] = value.replace(/^(["'])(.*)\1$/, "$2");
	}

	return { data, content: source.slice(end + 4) };
}

function parseArticle(filePath: string, source: string): Article {
	const parsed = parseFrontmatter(source, filePath);
	const title = assertString(parsed.data.title, "title", filePath);
	const date = assertString(parsed.data.date, "date", filePath);
	const stub = assertString(parsed.data.stub, "stub", filePath);

	if (
		!/^\d{4}-\d{2}-\d{2}$/.test(date) ||
		Number.isNaN(Date.parse(`${date}T00:00:00Z`))
	) {
		throw new Error(
			`Article ${filePath} must use an ISO date in YYYY-MM-DD format.`,
		);
	}
	if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(stub)) {
		throw new Error(
			`Article ${filePath} must use a lowercase, hyphenated stub.`,
		);
	}
	if (RESERVED_STUBS.has(stub)) {
		throw new Error(`Article ${filePath} uses the reserved stub "${stub}".`);
	}

	return {
		title,
		date,
		stub,
		topic:
			typeof parsed.data.topic === "string"
				? parsed.data.topic.trim()
				: undefined,
		keyTakeaway:
			typeof parsed.data.keyTakeaway === "string"
				? parsed.data.keyTakeaway.trim()
				: undefined,
		image:
			typeof parsed.data.image === "string"
				? parsed.data.image.trim()
				: undefined,
		imageAlt:
			typeof parsed.data.imageAlt === "string"
				? parsed.data.imageAlt.trim()
				: undefined,
		body: parsed.content.trim(),
	};
}

const parsedArticles = Object.entries(articleFiles).map(([filePath, source]) =>
	parseArticle(filePath, source),
);

const duplicateStubs = parsedArticles
	.map((article) => article.stub)
	.filter((stub, index, stubs) => stubs.indexOf(stub) !== index);
if (duplicateStubs.length > 0) {
	throw new Error(
		`Duplicate article stub(s): ${[...new Set(duplicateStubs)].join(", ")}.`,
	);
}

const articles = [...parsedArticles].sort(
	(a, b) => b.date.localeCompare(a.date) || a.stub.localeCompare(b.stub),
);

export function listArticles(): Article[] {
	return articles;
}

export function findArticle(stub: string): Article | undefined {
	return articles.find((article) => article.stub === stub);
}

export function normalizePage(value: unknown): number {
	const page = typeof value === "number" ? value : Number(value);
	return Number.isInteger(page) && page > 0 ? page : 1;
}

export function paginateArticles(value: unknown): ArticlePage {
	const page = normalizePage(value);
	const totalArticles = articles.length;
	const totalPages = Math.ceil(totalArticles / ARTICLES_PER_PAGE);

	return {
		articles: articles.slice(
			(page - 1) * ARTICLES_PER_PAGE,
			page * ARTICLES_PER_PAGE,
		),
		page,
		totalPages,
		totalArticles,
	};
}
