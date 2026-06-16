import React from "react";
import { MOCK_ARTICLES, AUTHORS } from "../../data";
import { notFound } from "next/navigation";

// Generate metadata dynamically for the article
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = MOCK_ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    return {
      title: "Стаття не знайдена | IT Blog",
      description: "Запитувана стаття не існує на нашому порталі."
    };
  }

  return {
    title: `${article.title} | IT Blog`,
    description: article.excerpt,
  };
}

export default async function ArticlePage({ params }) {
  const { slug } = await params;
  const article = MOCK_ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const author = AUTHORS[article.authorSlug];

  // Find related articles (same category, excluding current article)
  const relatedArticles = MOCK_ARTICLES.filter(
    (a) => a.categorySlug === article.categorySlug && a.slug !== article.slug
  ).slice(0, 2);

  return (
    <div className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
      
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
            <a href="/#articles" className="hover:text-zinc-350 transition-colors">Статті</a>
          </li>
          <li className="flex items-center gap-2">
            <svg className="w-3 h-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-zinc-550">{article.category}</span>
          </li>
          <li className="flex items-center gap-2" aria-current="page">
            <svg className="w-3 h-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-zinc-300 font-medium truncate max-w-xs sm:max-w-sm">
              {article.title}
            </span>
          </li>
        </ol>
      </nav>

      {/* Main Article Container */}
      <article className="space-y-8">
        
        {/* Article Header */}
        <div className="space-y-4">
          <span className="inline-flex text-xs font-semibold text-indigo-400 bg-indigo-500/5 px-2.5 py-1 rounded-md border border-indigo-500/10">
            {article.category}
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            {article.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-500 pt-2 border-b border-zinc-900 pb-6">
            <div className="flex items-center gap-2">
              {author && (
                <>
                  <img
                    src={author.avatar}
                    alt={author.name}
                    className="w-5 h-5 rounded-full object-cover border border-zinc-850"
                  />
                  <a href={`/authors/${author.slug}`} className="hover:text-indigo-400 transition-colors font-medium">
                    {author.name}
                  </a>
                </>
              )}
            </div>
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-800"></span>
            <span className="flex items-center gap-1">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Опубліковано: {article.date}
            </span>
            {article.updatedDate && (
              <>
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-800"></span>
                <span className="flex items-center gap-1 text-indigo-400/80">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 7.89H18" />
                  </svg>
                  Оновлено: {article.updatedDate}
                </span>
              </>
            )}
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-800"></span>
            <span className="flex items-center gap-1">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              {article.views} переглядів
            </span>
          </div>
        </div>

        {/* Article Content */}
        <div 
          className="prose prose-invert max-w-none text-zinc-300 space-y-6 text-base leading-relaxed"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        {/* Reputable Sources Block */}
        {article.sources && article.sources.length > 0 && (
          <div className="bg-zinc-900/10 border border-zinc-900 rounded-2xl p-6 mt-8 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Джерела та корисні посилання:
            </h4>
            <ul className="space-y-1.5 text-sm">
              {article.sources.map((src, sIdx) => (
                <li key={sIdx} className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-zinc-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  <a
                    href={src.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-400 hover:text-indigo-300 hover:underline transition-colors"
                  >
                    {src.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Author Signature Block (E-E-A-T) */}
        {author && (
          <div className="bg-zinc-900/40 border border-zinc-900 rounded-2xl p-6 mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 rounded-full blur-2xl pointer-events-none"></div>
            
            <img
              src={author.avatar}
              alt={author.name}
              className="w-16 h-16 rounded-xl object-cover border border-indigo-500/20 shrink-0 shadow-md"
            />
            
            <div className="space-y-2 text-center sm:text-left flex-1 relative z-10">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <h3 className="text-base font-bold text-white">
                  Автор статті: <a href={`/authors/${author.slug}`} className="text-indigo-400 hover:text-indigo-300 hover:underline transition-colors">{author.name}</a>
                </h3>
                
                <div className="flex justify-center sm:justify-start gap-3 text-xs text-zinc-400">
                  <a href={author.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
                  <span>&middot;</span>
                  <a href={author.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
                </div>
              </div>
              
              {/* Short Bio (1-2 sentences about expertise) */}
              <p className="text-xs text-zinc-400 leading-relaxed">
                {author.bio.split(".").slice(0, 2).join(".") + "."}
              </p>
            </div>
          </div>
        )}

      </article>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <div className="mt-16 pt-12 border-t border-zinc-900">
          <h3 className="text-xl font-bold text-white mb-6">Схожі матеріали</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedArticles.map((rel, rIdx) => {
              const relAuthor = AUTHORS[rel.authorSlug];
              return (
                <div
                  key={rIdx}
                  className="bg-zinc-900/20 border border-zinc-900 hover:border-zinc-800 rounded-2xl p-6 transition-all duration-200"
                >
                  <span className="text-xxs font-semibold text-indigo-400 bg-indigo-500/5 px-2.5 py-1 rounded-md border border-indigo-500/10">
                    {rel.category}
                  </span>
                  
                  <h4 className="text-base font-bold text-white mt-3 hover:text-indigo-400 transition-colors">
                    <a href={`/articles/${rel.slug}`}>{rel.title}</a>
                  </h4>
                  
                  <p className="text-xs text-zinc-450 mt-2 line-clamp-2 leading-relaxed">
                    {rel.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-zinc-900/60 text-xxs text-zinc-500">
                    <span>{relAuthor?.name}</span>
                    <span>{rel.date}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

    </div>
  );
}
