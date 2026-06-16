import React from "react";
import { AUTHORS, MOCK_ARTICLES } from "../../data";
import { notFound } from "next/navigation";

// Generate metadata dynamically for the page
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const author = AUTHORS[slug];
  
  if (!author) {
    return {
      title: "Автор не знайдений | IT Blog",
      description: "Запитуваний автор не існує в нашій базі даних."
    };
  }

  return {
    title: `${author.name} - Профіль автора | IT Blog`,
    description: `${author.name}: ${author.bio.substring(0, 150)}...`,
  };
}

export default async function AuthorPage({ params }) {
  const { slug } = await params;
  const author = AUTHORS[slug];

  if (!author) {
    notFound();
  }

  // Filter articles by author
  const authorArticles = MOCK_ARTICLES.filter(
    (article) => article.authorSlug === slug
  );

  return (
    <div className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
      
      {/* Breadcrumbs */}
      <nav className="text-xs text-zinc-500 mb-8" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2">
          <li>
            <a href="/" className="hover:text-zinc-350 transition-colors">Головна</a>
          </li>
          <li className="flex items-center gap-2">
            <svg className="w-3 h-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-zinc-500">Автори</span>
          </li>
          <li className="flex items-center gap-2" aria-current="page">
            <svg className="w-3 h-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-zinc-300 font-medium">{author.name}</span>
          </li>
        </ol>
      </nav>

      {/* Author Profile Card */}
      <div className="bg-zinc-900/30 border border-zinc-900 rounded-3xl p-8 md:p-10 mb-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 relative z-10 text-center md:text-left">
          {/* Avatar */}
          <img
            src={author.avatar}
            alt={author.name}
            className="w-28 h-28 md:w-32 md:h-32 rounded-2xl object-cover border-2 border-indigo-500/20 shadow-lg shadow-indigo-500/10"
          />

          {/* Info */}
          <div className="flex-1 space-y-4">
            <div>
              <span className="text-xxs font-semibold uppercase tracking-wider text-indigo-400 bg-indigo-500/5 px-2.5 py-1 rounded-md border border-indigo-500/10">
                Сертифікований Автор
              </span>
              <h1 className="text-3xl font-extrabold text-white tracking-tight mt-2.5">
                {author.name}
              </h1>
            </div>

            <p className="text-sm text-zinc-350 leading-relaxed max-w-2xl">
              {author.bio}
            </p>

            {/* Social Links & Stats */}
            <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-6 text-xs text-zinc-400">
              <div className="flex gap-3">
                <a
                  href={author.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <svg className="w-4 h-4 text-indigo-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                  </svg>
                  LinkedIn
                </a>
                <a
                  href={author.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <svg className="w-4 h-4 text-indigo-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
                  </svg>
                  GitHub
                </a>
              </div>
              
              <div className="hidden md:block w-1.5 h-1.5 bg-zinc-800 rounded-full"></div>

              <div className="flex items-center gap-2">
                <span className="text-zinc-550">Опубліковано статей:</span>
                <span className="font-semibold text-white px-2 py-0.5 bg-indigo-500/10 border border-indigo-500/20 rounded-md font-mono">
                  {authorArticles.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Author's Articles Feed */}
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-white mb-6 pb-4 border-b border-zinc-900">
          Публікації автора ({authorArticles.length})
        </h2>

        {authorArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {authorArticles.map((article, idx) => (
              <article
                key={idx}
                className="flex flex-col bg-zinc-900/40 border border-zinc-900 hover:border-zinc-800/80 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold text-indigo-400 bg-indigo-500/5 px-2.5 py-1 rounded-md border border-indigo-500/10">
                    {article.category}
                  </span>
                  <span className="text-xs text-zinc-500">{article.readTime}</span>
                </div>

                <h3 className="text-lg font-bold text-white leading-snug group-hover:text-indigo-400 transition-colors">
                  <a href={`/articles/${article.slug}`}>{article.title}</a>
                </h3>

                <p className="mt-3 text-sm text-zinc-400 leading-relaxed flex-1 line-clamp-3">
                  {article.excerpt}
                </p>

                <div className="mt-6 pt-5 border-t border-zinc-900/60 flex items-center justify-between text-xs text-zinc-500">
                  <span>Опубліковано: {article.date}</span>
                  <span className="flex items-center gap-1">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    {article.views}
                  </span>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-zinc-900/10 border border-zinc-900 rounded-2xl">
            <p className="text-zinc-500">Цей автор ще не опублікував жодної статті.</p>
          </div>
        )}
      </div>

    </div>
  );
}
