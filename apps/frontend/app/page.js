import { MOCK_ARTICLES, CATEGORIES, POPULAR_TAGS, AUTHORS } from "./data";

export const metadata = {
  title: "IT Blog - Світ інформаційних технологій | Новини, Статті, Огляди",
  description: "Повноцінний новинний блог про інформаційні технології. Статті про JavaScript, Frontend, Backend, DevOps, Штучний інтелект та Кібербезпеку.",
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden border-b border-zinc-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.08),transparent_50%)]"></div>
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center sm:text-left">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-400 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"></span>
              Лабораторна робота №1 MVP
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Світ інформаційних технологій у статтях <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">та оглядах</span>
            </h1>
            <p className="mt-6 text-lg text-zinc-400 leading-relaxed max-w-2xl">
              Вітаємо на MVP-версії нашого IT Blog! Платформа для обміну знаннями, новинами, гайдами та кращими практиками з розробки програмного забезпечення, ШІ та кібербезпеки.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center sm:justify-start">
              <a
                href="#articles"
                className="px-6 py-3 rounded-xl bg-indigo-600 text-sm font-semibold text-white hover:bg-indigo-500 shadow-lg shadow-indigo-500/10 hover:shadow-indigo-500/20 transition-all duration-200"
              >
                Читати статті
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-xl bg-zinc-900 border border-zinc-850 hover:border-zinc-800 text-sm font-semibold text-zinc-300 hover:text-white transition-all duration-200"
              >
                GitHub репозиторій
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Grid Content */}
      <main id="articles" className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          
          {/* Articles Feed */}
          <div className="lg:col-span-3 space-y-12">
            <div className="flex items-center justify-between border-b border-zinc-900 pb-5">
              <h2 className="text-2xl font-bold tracking-tight text-white">Останні публікації</h2>
              <span className="text-xs text-zinc-500">Показано {MOCK_ARTICLES.length} статей</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {MOCK_ARTICLES.map((article, idx) => {
                const author = AUTHORS[article.authorSlug];
                return (
                  <article
                    key={idx}
                    className="flex flex-col bg-zinc-900/40 border border-zinc-900 hover:border-zinc-800/80 rounded-2xl p-6 transition-all duration-350 hover:shadow-xl hover:shadow-indigo-500/[0.02] hover:-translate-y-0.5 group"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-semibold text-indigo-400 bg-indigo-500/5 px-2.5 py-1 rounded-md border border-indigo-500/10">
                        {article.category}
                      </span>
                      <span className="text-xs text-zinc-500">{article.readTime}</span>
                    </div>

                    <h3 className="text-lg font-bold text-white leading-snug group-hover:text-indigo-400 transition-colors duration-250">
                      <a href={`/articles/${article.slug}`}>{article.title}</a>
                    </h3>

                    <p className="mt-3 text-sm text-zinc-400 leading-relaxed flex-1 line-clamp-3">
                      {article.excerpt}
                    </p>

                    <div className="mt-6 pt-5 border-t border-zinc-900/60 flex items-center justify-between text-xs text-zinc-500">
                      <div className="flex items-center gap-2">
                        {author ? (
                          <>
                            <img
                              src={author.avatar}
                              alt={author.name}
                              className="w-6 h-6 rounded-full object-cover border border-zinc-750"
                            />
                            <a href={`/authors/${author.slug}`} className="hover:text-indigo-400 transition-colors font-medium">
                              {author.name}
                            </a>
                          </>
                        ) : (
                          <span>Unknown</span>
                        )}
                      </div>

                      <div className="flex items-center gap-3">
                        <span>{article.date}</span>
                        <span className="flex items-center gap-1">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          {article.views}
                        </span>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-10">
            {/* Categories Card */}
            <div className="bg-zinc-900/30 border border-zinc-900 rounded-2xl p-6">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 pb-2 border-b border-zinc-900">
                Категорії
              </h3>
              <ul className="space-y-3">
                {CATEGORIES.map((cat, idx) => (
                  <li key={idx}>
                    <a
                      href={`/categories/${cat.slug}`}
                      className="flex items-center justify-between text-sm text-zinc-400 hover:text-indigo-400 transition-colors"
                    >
                      <span>{cat.name}</span>
                      <span className="text-xs bg-zinc-900 px-2 py-0.5 rounded-md border border-zinc-850 text-zinc-500 font-mono">
                        {cat.count}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Tags Card */}
            <div className="bg-zinc-900/30 border border-zinc-900 rounded-2xl p-6">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 pb-2 border-b border-zinc-900">
                Популярні теги
              </h3>
              <div className="flex flex-wrap gap-2">
                {POPULAR_TAGS.map((tag, idx) => (
                  <a
                    key={idx}
                    href={`/tags/${tag.toLowerCase().replace(/\s+/g, '-').replace(/\./g, '')}`}
                    className="text-xs bg-zinc-900 hover:bg-zinc-850 text-zinc-400 hover:text-white px-2.5 py-1.5 rounded-lg border border-zinc-850 hover:border-zinc-800 transition-colors"
                  >
                    #{tag}
                  </a>
                ))}
              </div>
            </div>

            {/* Info Box */}
            <div className="bg-gradient-to-br from-indigo-950/20 to-purple-950/20 border border-indigo-900/30 rounded-2xl p-6">
              <h3 className="text-sm font-bold text-white mb-2">Напрям роботи</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Наступні етапи розробки блогу будуть включати підключення бази даних PostgreSQL, налаштування динамічного sitemap.xml, правил robots.txt, а також додавання JWT-авторизації для захищеної панелі керування.
              </p>
            </div>
          </aside>

        </div>
      </main>
    </>
  );
}
