export const metadata = {
  title: "IT Blog - Світ інформаційних технологій | Новини, Статті, Огляди",
  description: "Повноцінний новинний блог про інформаційні технології. Статті про JavaScript, Frontend, Backend, DevOps, Штучний інтелект та Кібербезпеку.",
};

const MOCK_ARTICLES = [
  {
    title: "Майбутнє React Compiler: оптимізація без React.memo",
    slug: "future-of-react-compiler",
    excerpt: "React Compiler автоматично оптимізує рендеринг компонентів. Розбираємося, як працює технологія під капотом та чому ви більше не будете писати useMemo та useCallback вручну.",
    category: "JavaScript / Frontend",
    categorySlug: "javascript-frontend",
    author: "Олександр Шевченко",
    authorSlug: "oleksandr-shevchenko",
    date: "16 Червня, 2026",
    views: 342,
    readTime: "5 хв",
  },
  {
    title: "Шлях до SSR: чому Next.js App Router став стандартом де-факто",
    slug: "ssr-nextjs-app-router-standard",
    excerpt: "Рендеринг на стороні сервера (SSR) суттєво покращує SEO та Core Web Vitals. Аналізуємо переваги Server Components порівняно зі старими підходами Next.js.",
    category: "JavaScript / Frontend",
    categorySlug: "javascript-frontend",
    author: "Марія Ковальчук",
    authorSlug: "mariia-kovalchuk",
    date: "14 Червня, 2026",
    views: 489,
    readTime: "7 хв",
  },
  {
    title: "Створення ультрашвидких API з Node.js та Fastify",
    slug: "fastify-nodejs-high-performance-api",
    excerpt: "Fastify пропонує нижчі накладні витрати порівняно з Express та підтримує потужну валідацію через JSON Schema. Переходимо на новий рівень швидкодії.",
    category: "Backend та DevOps",
    categorySlug: "backend-devops",
    author: "Дмитро Сидоренко",
    authorSlug: "dmytro-sydorenko",
    date: "12 Червня, 2026",
    views: 298,
    readTime: "6 хв",
  },
  {
    title: "Docker та Kubernetes: архітектура оркестрації для початківців",
    slug: "docker-kubernetes-orchestration-basics",
    excerpt: "Як масштабувати та управляти сотнями контейнерів автоматично. Покрокове пояснення концептів Pods, Services, Deployments та Ingres.",
    category: "Backend та DevOps",
    categorySlug: "backend-devops",
    author: "Дмитро Сидоренко",
    authorSlug: "dmytro-sydorenko",
    date: "10 Червня, 2026",
    views: 521,
    readTime: "10 хв",
  },
  {
    title: "Вступ до Agentic AI: як побудувати першого автономного ШІ-агента",
    slug: "introduction-to-agentic-ai-agents",
    excerpt: "Агенти не просто відповідають на питання, вони вміють планувати дії, користуватися інструментами та взаємодіяти з API. Створюємо агента на базі LangChain.",
    category: "Штучний інтелект та ML",
    categorySlug: "ai-ml",
    author: "Олена Кравченко",
    authorSlug: "olena-kravchenko",
    date: "08 Червня, 2026",
    views: 612,
    readTime: "9 хв",
  },
  {
    title: "Топ-5 інструментів для аналізу даних на Python у 2026 році",
    slug: "top-5-python-data-science-tools-2026",
    excerpt: "Крім звичних Pandas та NumPy, з'явилися швидші альтернативи як Polars та DuckDB. Оцінюємо продуктивність та юзкейси нових рішень.",
    category: "Штучний інтелект та ML",
    categorySlug: "ai-ml",
    author: "Олена Кравченко",
    authorSlug: "olena-kravchenko",
    date: "05 Червня, 2026",
    views: 189,
    readTime: "4 хв",
  },
  {
    title: "Захист JWT токенів: кращі практики кібербезпеки для розробників",
    slug: "jwt-token-security-best-practices",
    excerpt: "Куди краще зберігати JWT: у localStorage чи HttpOnly Cookie? Детально розглядаємо вектори атак XSS та CSRF та методи їх нівелювання.",
    category: "Кібербезпека",
    categorySlug: "cybersecurity",
    author: "Максим Лисенко",
    authorSlug: "maksym-lysenko",
    date: "03 Червня, 2026",
    views: 450,
    readTime: "8 хв",
  },
  {
    title: "Як уникнути критичних SQL-ін'єкцій у Node.js застосунках",
    slug: "preventing-sql-injection-nodejs-apps",
    excerpt: "Параметризовані запити та ORM дозволяють повністю захистити базу даних. Практичні приклади вразливого коду та його виправлення.",
    category: "Кібербезпека",
    categorySlug: "cybersecurity",
    author: "Максим Лисенко",
    authorSlug: "maksym-lysenko",
    date: "30 Травня, 2026",
    views: 265,
    readTime: "6 хв",
  },
  {
    title: "Огляд нових фіч у TypeScript 5.8: швидкість та типи",
    slug: "typescript-58-new-features-review",
    excerpt: "Нова версія покращує перевірку типів та оптимізує компіляцію. Що змінилося для повсякденної розробки та як оновитися вже сьогодні.",
    category: "Огляди інструментів та технологій",
    categorySlug: "tools-reviews",
    author: "Олександр Шевченко",
    authorSlug: "oleksandr-shevchenko",
    date: "28 Травня, 2026",
    views: 310,
    readTime: "5 хв",
  },
  {
    title: "Чому PostgreSQL залишається кращою реляційною базою даних",
    slug: "why-postgresql-remains-the-best-choice",
    excerpt: "Потужні JSON-можливості, підтримка векторних пошуків через pgvector та надійність ACID роблять PostgreSQL незамінним вибором у 2026 році.",
    category: "Огляди інструментів та технологій",
    categorySlug: "tools-reviews",
    author: "Марія Ковальчук",
    authorSlug: "mariia-kovalchuk",
    date: "25 Травня, 2026",
    views: 405,
    readTime: "7.5 хв",
  },
];

const CATEGORIES = [
  { name: "JavaScript / Frontend розробка", slug: "javascript-frontend", count: 2 },
  { name: "Backend та DevOps", slug: "backend-devops", count: 2 },
  { name: "Штучний інтелект та ML", slug: "ai-ml", count: 2 },
  { name: "Кібербезпека", slug: "cybersecurity", count: 2 },
  { name: "Огляди інструментів та технологій", slug: "tools-reviews", count: 2 },
];

const POPULAR_TAGS = [
  "Next.js", "React", "Node.js", "Express", "Fastify", "Docker", "Kubernetes", "PostgreSQL", "JWT", "Security", "LangChain", "Agentic AI"
];

export default function Home() {
  return (
    <div className="bg-zinc-950 text-zinc-100 min-h-screen font-sans flex flex-col selection:bg-indigo-500 selection:text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-zinc-950/80 border-b border-zinc-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-200">
                <span className="font-extrabold text-white text-lg tracking-wider">IT</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-white group-hover:text-indigo-400 transition-colors duration-200">
                Blog<span className="text-indigo-500">.</span>
              </span>
            </a>

            {/* Navigation links */}
            <nav className="hidden md:flex items-center gap-6">
              <a href="#" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">Статті</a>
              <a href="#" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">Категорії</a>
              <a href="#" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">Автори</a>
              <a href="#" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">Про нас</a>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            {/* Search Input (Visual Placeholder) */}
            <div className="relative hidden sm:block">
              <input
                type="text"
                placeholder="Пошук статей..."
                className="w-60 h-9 pl-9 pr-4 rounded-full bg-zinc-900 border border-zinc-800 text-xs text-zinc-200 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all duration-200 placeholder:text-zinc-500"
              />
              <svg className="absolute left-3 top-2.5 w-4 h-4 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            {/* Admin Panel Button */}
            <a
              href="/admin"
              className="px-4 h-9 flex items-center justify-center rounded-lg border border-zinc-800 text-xs font-semibold text-zinc-300 hover:bg-zinc-900 hover:text-white hover:border-zinc-700 transition-all"
            >
              Адмін Панель
            </a>
          </div>
        </div>
      </header>

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
              {MOCK_ARTICLES.map((article, idx) => (
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

                  <p className="mt-3 text-sm text-zinc-450 leading-relaxed flex-1 line-clamp-3">
                    {article.excerpt}
                  </p>

                  <div className="mt-6 pt-5 border-t border-zinc-900/60 flex items-center justify-between text-xs text-zinc-500">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center font-bold text-xxs text-zinc-300">
                        {article.author[0]}
                      </div>
                      <a href={`/authors/${article.authorSlug}`} className="hover:text-zinc-350 transition-colors">
                        {article.author}
                      </a>
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
              ))}
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

      {/* Footer */}
      <footer className="bg-zinc-950 border-t border-zinc-900 py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-indigo-500 flex items-center justify-center font-bold text-white text-xs">
              IT
            </div>
            <span className="text-sm font-semibold tracking-tight text-white">
              IT Blog MVP. Всі права захищено.
            </span>
          </div>
          <div className="flex items-center gap-6 text-xs text-zinc-500">
            <span>Побудовано на Next.js App Router (SSR) & Express</span>
            <span>Курс "SEO та пошукова оптимізація", 2026</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
