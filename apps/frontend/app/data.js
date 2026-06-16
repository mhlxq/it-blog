export const AUTHORS = {
  "oleksandr-shevchenko": {
    name: "Олександр Шевченко",
    slug: "oleksandr-shevchenko",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=256&h=256&q=80",
    bio: "Senior Frontend Engineer з понад 8 роками досвіду в розробці інтерфейсів. Спеціалізується на продуктивності React, архітектурі вебдодатків та впровадженні сучасних інструментів автоматизації розробки. Активний контриб'ютор в open-source проєкти.",
    linkedin: "https://www.linkedin.com/in/oleksandr-shevchenko-mock",
    github: "https://github.com/oleksandr-shevchenko-mock",
    articleCount: 2
  },
  "mariia-kovalchuk": {
    name: "Марія Ковальчук",
    slug: "mariia-kovalchuk",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=256&h=256&q=80",
    bio: "Tech Lead у продуктових компаніях, експертка з побудови масштабованих frontend-систем та інтеграції Server-Side Rendering (SSR). Досліджує розвиток веб-стандартів та нових можливостей фреймворків. Співавторка багатьох освітніх ініціатив для веброзробників.",
    linkedin: "https://www.linkedin.com/in/mariia-kovalchuk-mock",
    github: "https://github.com/mariia-kovalchuk-mock",
    articleCount: 2
  },
  "dmytro-sydorenko": {
    name: "Дмитро Сидоренко",
    slug: "dmytro-sydorenko",
    avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=256&h=256&q=80",
    bio: "DevOps Architect та Backend-розробник з глибокою експертизою в хмарних обчисленнях, контейнеризації та автоматизації розгортання додатків. Створює високонавантажені API на Node.js та Fastify, оптимізуючи швидкість обробки тисяч запитів на секунду.",
    linkedin: "https://www.linkedin.com/in/dmytro-sydorenko-mock",
    github: "https://github.com/dmytro-sydorenko-mock",
    articleCount: 2
  },
  "olena-kravchenko": {
    name: "Олена Кравченко",
    slug: "olena-kravchenko",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=256&h=256&q=80",
    bio: "AI/ML Engineer та Data Scientist. Займається розробкою автономних ШІ-агентів, інтеграцією LLM моделей у бізнес-системи та аналізом великих обсягів даних на Python. Має досвід наукової діяльності в галузі обробки природної мови (NLP).",
    linkedin: "https://www.linkedin.com/in/olena-kravchenko-mock",
    github: "https://github.com/olena-kravchenko-mock",
    articleCount: 2
  },
  "maksym-lysenko": {
    name: "Максим Лисенко",
    slug: "maksym-lysenko",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=256&h=256&q=80",
    bio: "Спеціаліст з інформаційної безпеки (SecOps) та етичний хакер. Досліджує вразливості вебдодатків, методи захисту API та захищену автентифікацію. Проводить аудити коду для запобігання атакам XSS, CSRF та SQL-ін'єкціям.",
    linkedin: "https://www.linkedin.com/in/maksym-lysenko-mock",
    github: "https://github.com/maksym-lysenko-mock",
    articleCount: 2
  }
};

export const MOCK_ARTICLES = [
  {
    title: "Майбутнє React Compiler: оптимізація без React.memo",
    slug: "future-of-react-compiler",
    excerpt: "React Compiler автоматично оптимізує рендеринг компонентів. Розбираємося, як працює технологія під капотом та чому ви більше не будете писати useMemo та useCallback вручну.",
    category: "JavaScript / Frontend розробка",
    categorySlug: "javascript-frontend",
    authorSlug: "oleksandr-shevchenko",
    date: "16 Червня, 2026",
    updatedDate: "17 Червня, 2026",
    views: 342,
    readTime: "5 хв",
    sources: [
      { name: "Офіційна документація React Compiler", url: "https://react.dev/learn/react-compiler" },
      { name: "Обговорення React Working Group на GitHub", url: "https://github.com/reactwg/react-19/discussions" }
    ],
    content: `
      <p>Коли я вперше почув про проект React Compiler (раніше відомий як React Forget), я поставився до нього зі здоровим скептицизмом. Ми роками вчили розробників правильно використовувати <code>useMemo</code>, <code>useCallback</code> та <code>React.memo</code>, щоб уникати зайвих рендерів. Але тепер команда React пропонує повністю перекласти цю роботу на компілятор. У цій статті я поділюся своїм практичним досвідом тестування React Compiler у реальному проекті.</p>
      
      <h3>Як це працює під капотом?</h3>
      <p>React Compiler — це плагін Babel (і незабаром частина інших збирачів), який аналізує ваш код на JavaScript/TypeScript та автоматично додає мемоізацію. Він використовує строгі правила React (наприклад, незмінність props та state), щоб визначити, коли значення або дерево компонентів можна кешувати.</p>
      
      <p>Ось приклад типового коду, який ми писали раніше:</p>
      <pre><code>const MemoizedComponent = React.memo(({ data }) => {
  const processedData = useMemo(() => {
    return heavyCalculation(data);
  }, [data]);
  
  return &lt;div&gt;{processedData}&lt;/div&gt;;
});</code></pre>
      
      <p>З React Compiler цей код перетворюється на звичайний чистий JavaScript, а оптимізацію виконує компілятор автоматично під час збірки. Під час моїх бенчмарків на проекті середньої складності я зафіксував зменшення кількості зайвих рендерів на <strong>35%</strong> без жодного рядка коду з <code>useMemo</code>.</p>
      
      <h3>Мій досвід інтеграції</h3>
      <p>Я інтегрував компілятор у бета-версію нашого продукту. Перше, з чим я зіткнувся, — це помилки лінтера. React Compiler вимагає суворого дотримання правил React. Якщо ваші компоненти змінюють вхідні props або мають побічні ефекти під час рендеру, компілятор просто проігнорує їх та виведе попередження.</p>
      
      <p>Для детальнішого ознайомлення з правилами рекомендую звернутися до <a href="https://react.dev/learn/react-compiler" target="_blank" rel="noopener noreferrer" class="text-indigo-400 hover:underline">офіційної документації React Compiler</a>. Це революційний крок, який робить React простішим для новачків і продуктивнішим для ветеранів.</p>
    `
  },
  {
    title: "Шлях до SSR: чому Next.js App Router став стандартом де-факто",
    slug: "ssr-nextjs-app-router-standard",
    excerpt: "Рендеринг на стороні сервера (SSR) суттєво покращує SEO та Core Web Vitals. Аналізуємо переваги Server Components порівняно зі старими підходами Next.js.",
    category: "JavaScript / Frontend розробка",
    categorySlug: "javascript-frontend",
    authorSlug: "mariia-kovalchuk",
    date: "14 Червня, 2026",
    updatedDate: "15 Червня, 2026",
    views: 489,
    readTime: "7 хв",
    sources: [
      { name: "Документація Next.js App Router", url: "https://nextjs.org/docs/app" },
      { name: "Web.dev - Core Web Vitals Guide", url: "https://web.dev/vitals" }
    ],
    content: `
      <p>Протягом останніх років клієнтський рендеринг (CSR) домінував у розробці SPA. Проте з погляду SEO та швидкості першого відображення сторінки (FCP), CSR має значні недоліки. У своїй практиці я перевела понад 10 великих проектів на архітектуру SSR, і сьогодні я хочу пояснити, чому саме Next.js App Router став новим стандартом розробки.</p>
      
      <h3>React Server Components (RSC) як основа</h3>
      <p>Головна перевага App Router — це вбудована підтримка серверних компонентів. Вони рендеряться виключно на сервері, і їхній код не потрапляє в клієнтський бандл. Це кардинально зменшує розмір JavaScript, який завантажує користувач.</p>
      
      <p>Давайте порівняємо показники Core Web Vitals після нашої міграції:</p>
      <ul>
        <li><strong>Largest Contentful Paint (LCP):</strong> зменшився з 3.8с до 1.4с (покращення на ~63%).</li>
        <li><strong>Cumulative Layout Shift (CLS):</strong> знизився майже до нуля завдяки оптимізованому завантаженню шрифтів та зображень.</li>
        <li><strong>First Input Delay (FID):</strong> покращився завдяки зменшенню навантаження на головний потік браузера (main thread).</li>
      </ul>
      
      <h3>SEO переваги</h3>
      <p>Пошукові боти, такі як Googlebot, набагато ефективніше індексують сторінки, які одразу віддають готовий HTML. Хоча Google вміє виконувати JS, це відбувається в два етапи (двопрохідна індексація), що створює затримки в появі вашого сайту в результатах пошуку. З SSR ваш вміст індексується миттєво.</p>
      
      <p>Більше про оптимізацію швидкості завантаження читайте у гайді <a href="https://web.dev/vitals" target="_blank" rel="noopener noreferrer" class="text-indigo-400 hover:underline">Web.dev Core Web Vitals</a>. Перехід на SSR — це інвестиція у ваш бізнес та SEO.</p>
    `
  },
  {
    title: "Створення ультрашвидких API з Node.js та Fastify",
    slug: "fastify-nodejs-high-performance-api",
    excerpt: "Fastify пропонує нижчі накладні витрати порівняно з Express та підтримує потужну валідацію через JSON Schema. Переходимо на новий рівень швидкодії.",
    category: "Backend та DevOps",
    categorySlug: "backend-devops",
    authorSlug: "dmytro-sydorenko",
    date: "12 Червня, 2026",
    updatedDate: "13 Червня, 2026",
    views: 298,
    readTime: "6 хв",
    sources: [
      { name: "Офіційний сайт Fastify", url: "https://fastify.dev" },
      { name: "Порівняльні бенчмарки Node.js фреймворків", url: "https://fastify.dev/benchmarks/" }
    ],
    content: `
      <p>Коли ви будуєте сервіси, розраховані на мільйони запитів, кожен мілісекундний оверхед стає критичним. У моїй практиці тривалий час стандартом був Express. Але при переході на мікросервісну архітектуру ми вперлися в ліміти продуктивності. Тоді ми вирішили спробувати Fastify. І результати нас вразили.</p>
      
      <h3>Чому Fastify швидший за Express?</h3>
      <p>Fastify розроблявся з акцентом на максимальну продуктивність за мінімальних накладних витрат. Його швидкість базується на кількох принципах:</p>
      <ol>
        <li><strong>Ефективна маршрутизація:</strong> використання Radix Tree для швидкого пошуку збігів шляхів.</li>
        <li><strong>Оптимізована серіалізація JSON:</strong> бібліотека <code>fast-json-stringify</code> компілює схему в оптимізований код, що працює вдвічі швидше за стандартний <code>JSON.stringify</code>.</li>
        <li><strong>Вбудована схема валідації:</strong> інтеграція з AJV для швидкої перевірки вхідних даних.</li>
      </ol>
      
      <p>Ось приклад оголошення простого маршруту з валідацією:</p>
      <pre><code>const fastify = require('fastify')({ logger: true });

fastify.get('/user/:id', {
  schema: {
    params: {
      type: 'object',
      properties: {
        id: { type: 'integer' }
      }
    }
  }
}, async (request, reply) => {
  return { userId: request.params.id };
});</code></pre>
      
      <p>У наших тестах продуктивності Fastify зміг обробити на <strong>40% більше запитів за секунду</strong> (RPS) у порівнянні з аналогічним кодом на Express, знизивши використання оперативної пам'яті на 20%. Докладні цифри бенчмарків можна знайти на <a href="https://fastify.dev/benchmarks/" target="_blank" rel="noopener noreferrer" class="text-indigo-400 hover:underline">офіційному сайті Fastify</a>.</p>
    `
  },
  {
    title: "Docker та Kubernetes: архітектура оркестрації для початківців",
    slug: "docker-kubernetes-orchestration-basics",
    excerpt: "Як масштабувати та управляти сотнями контейнерів автоматично. Покрокове пояснення концептів Pods, Services, Deployments та Ingres.",
    category: "Backend та DevOps",
    categorySlug: "backend-devops",
    authorSlug: "dmytro-sydorenko",
    date: "10 Червня, 2026",
    updatedDate: "10 Червня, 2026",
    views: 521,
    readTime: "10 хв",
    sources: [
      { name: "Документація Kubernetes", url: "https://kubernetes.io/docs/home/" },
      { name: "Docker Get Started Guide", url: "https://docs.docker.com/get-started/" }
    ],
    content: `
      <p>Масштабування сучасних веб-додатків — це виклик. Запуск одного контейнера Docker локально виглядає просто, але що робити, коли вам потрібно розгорнути 50 інстансів вашого сервісу, налаштувати балансування навантаження, автоматично оновлювати їх без простою та перезапускати при падінні? Саме для цього існує Kubernetes (K8s). У цій статті я розберу основні поняття простою мовою.</p>
      
      <h3>Базові поняття оркестрації</h3>
      <p>Щоб комфортно працювати з Kubernetes, вам потрібно розуміти його основні абстракції:</p>
      <ul>
        <li><strong>Pod:</strong> найменша одиниця розгортання в K8s. Він може містити один або кілька контейнерів Docker, які ділять спільні мережеві ресурси та диски.</li>
        <li><strong>Deployment:</strong> опис бажаного стану вашого додатку. Він вказує, скільки копій Pod має працювати одночасно і як виконувати оновлення (Rolling Update).</li>
        <li><strong>Service:</strong> стабільна мережева адреса для групи Pod-ів. K8s автоматично балансує запити між ними.</li>
        <li><strong>Ingress:</strong> точка входу до вашого кластеру, яка направляє зовнішній HTTP/HTTPS трафік до відповідних Services.</li>
      </ul>
      
      <h3>Мій досвід налаштування</h3>
      <p>Коли ми вперше переводили клієнтську систему з docker-compose на Kubernetes cluster в AWS (EKS), найскладнішим завданням було налаштування ресурсів (Limits & Requests). Неправильне налаштування призводило до OOM (Out Of Memory) падінь. Мій досвід показав, що завжди варто починати з мінімальних значень та поступово збільшувати їх під час навантажувального тестування.</p>
      
      <p>Більше інформації про розгортання та кращі практики архітектури кластерів читайте у <a href="https://kubernetes.io/docs/home/" target="_blank" rel="noopener noreferrer" class="text-indigo-400 hover:underline">документації Kubernetes</a>.</p>
    `
  },
  {
    title: "Вступ до Agentic AI: як побудувати першого автономного ШІ-агента",
    slug: "introduction-to-agentic-ai-agents",
    excerpt: "Агенти не просто відповідають на питання, вони вміють планувати дії, користуватися інструментами та взаємодіяти з API. Створюємо агента на базі LangChain.",
    category: "Штучний інтелект та ML",
    categorySlug: "ai-ml",
    authorSlug: "olena-kravchenko",
    date: "08 Червня, 2026",
    updatedDate: "09 Червня, 2026",
    views: 612,
    readTime: "9 хв",
    sources: [
      { name: "LangChain Documentation", url: "https://python.langchain.com/v0.2/docs/introduction/" },
      { name: "OpenAI API Reference", url: "https://platform.openai.com/docs/api-reference" }
    ],
    content: `
      <p>Сучасні мовні моделі (LLM) дивують своєю здатністю вести діалог, але справжня революція відбувається навколо Agentic AI — автономних агентів. На відміну від звичайних чат-ботів, ШІ-агент може самостійно вирішувати завдання, плануючи кроки, вибираючи інструменти (пошук в інтернеті, виконання коду, запити до БД) та коригуючи свої дії за потреби. Я розробляю таких агентів для автоматизації бізнес-процесів, і сьогодні ми створимо найпростішого агента разом.</p>
      
      <h3>Як мислять агенти: цикл ReAct</h3>
      <p>Більшість агентів працюють за шаблоном <strong>Reasoning and Acting (ReAct)</strong>. Цикл виглядає так: Думка (Thought) -> Дія (Action) -> Спостереження (Observation) -> Думка.</p>
      
      <p>Ось приклад коду на Python з використанням бібліотеки LangChain для створення агента з доступом до калькулятора та пошуку:</p>
      <pre><code>from langchain_openai import ChatOpenAI
from langchain.agents import initialize_agent, AgentType
from langchain_community.tools import DuckDuckGoSearchRun, WikipediaQueryRun

llm = ChatOpenAI(model="gpt-4", temperature=0)
tools = [DuckDuckGoSearchRun(), WikipediaQueryRun()]

agent = initialize_agent(
    tools, 
    llm, 
    agent=AgentType.STRUCTURED_CHAT_ZERO_SHOT_REACT_DESCRIPTION, 
    verbose=True
)

agent.run("Хто заснував Google та яка поточна ціна акцій Alphabet?")</code></pre>
      
      <p>Цей агент спочатку звернеться до Вікіпедії, щоб дізнатися засновників Google, а потім скористається пошуковиком DuckDuckGo, щоб знайти найсвіжішу ціну акцій. Для детального занурення в архітектуру агентів перегляньте <a href="https://python.langchain.com/v0.2/docs/introduction/" target="_blank" rel="noopener noreferrer" class="text-indigo-400 hover:underline">офіційну документацію LangChain</a>.</p>
    `
  },
  {
    title: "Топ-5 інструментів для аналізу даних на Python у 2026 році",
    slug: "top-5-python-data-science-tools-2026",
    excerpt: "Крім звичних Pandas та NumPy, з'явилися швидші альтернативи як Polars та DuckDB. Оцінюємо продуктивність та юзкейси нових рішень.",
    category: "Штучний інтелект та ML",
    categorySlug: "ai-ml",
    authorSlug: "olena-kravchenko",
    date: "05 Червня, 2026",
    updatedDate: "05 Червня, 2026",
    views: 189,
    readTime: "4 хв",
    sources: [
      { name: "Офіційний сайт Polars", url: "https://pola.rs" },
      { name: "DuckDB Documentation", url: "https://duckdb.org/docs/" }
    ],
    content: `
      <p>Python залишається королем Data Science, але інструменти, які ми використовуємо, швидко розвиваються. У моїй практичній роботі з великими датасетами (понад 10 ГБ) стандартний Pandas почав викликати проблеми з переповненням пам'яті через роботу в один потік. Це змусило мене шукати сучасні альтернативи.</p>
      
      <h3>Нова ера обробки даних</h3>
      <p>Ось мій суб'єктивний топ-5 інструментів, які змінили правила гри:</p>
      <ol>
        <li><strong>Polars:</strong> Блискавична альтернатива Pandas, написана на Rust. Завдяки багатопотоковості та ледачим обчисленням (lazy evaluation) вона працює у 5-10 разів швидше.</li>
        <li><strong>DuckDB:</strong> Вбудована аналітична база даних SQL. Вона дозволяє робити складні SQL-запити прямо до CSV та Parquet файлів безпосередньо в оперативній пам'яті.</li>
        <li><strong>PyTorch 2.5+:</strong> Для глибокого навчання з покращеною підтримкою компіляції моделей.</li>
        <li><strong>Optuna:</strong> Незамінний інструмент для автоматичного підбору гіперпараметрів ML-моделей.</li>
        <li><strong>Dask:</strong> Для розподілених обчислень на кластерах, коли дані не вміщуються в пам'ять одного сервера.</li>
      </ol>
      
      <p>Спробувавши Polars на реальному проекті, я більше не хочу повертатися до Pandas для великих файлів. Наприклад, читання CSV файлу розміром 5 ГБ зайняло всього 4 секунди в Polars порівняно з 45 секундами в Pandas. Ознайомитися з синтаксисом та почати використовувати Polars можна на <a href="https://pola.rs" target="_blank" rel="noopener noreferrer" class="text-indigo-400 hover:underline">офіційному сайті Polars</a>.</p>
    `
  },
  {
    title: "Захист JWT токенів: кращі практики кібербезпеки для розробників",
    slug: "jwt-token-security-best-practices",
    excerpt: "Куди краще зберігати JWT: у localStorage чи HttpOnly Cookie? Детально розглядаємо вектори атак XSS та CSRF та методи їх нівелювання.",
    category: "Кібербезпека",
    categorySlug: "cybersecurity",
    authorSlug: "maksym-lysenko",
    date: "03 Червня, 2026",
    updatedDate: "04 Червня, 2026",
    views: 450,
    readTime: "8 хв",
    sources: [
      { name: "OWASP JSON Web Token Cheat Sheet", url: "https://cheatsheetseries.owasp.org/cheatsheets/JSON_Web_Token_for_Java_Cheat_Sheet.html" },
      { name: "RFC 7519 - JSON Web Token Specification", url: "https://datatracker.ietf.org/doc/html/rfc7519" }
    ],
    content: `
      <p>Автентифікація на основі JSON Web Tokens (JWT) стала стандартом для SPA та мобільних додатків. Проте, аналізуючи безпеку десятків комерційних веб-додатків як пентестер, я регулярно знаходжу грубі помилки в реалізації JWT. Найбільш дискусійне питання: де зберігати токени на клієнті?</p>
      
      <h3>LocalStorage проти HttpOnly Cookies</h3>
      <p>Багато розробників обирають найпростіший шлях — збереження Access токену в <code>localStorage</code>. Це робить його вразливим до атак <strong>XSS (Cross-Site Scripting)</strong>. Якщо зловмисник зможе виконати будь-який скрипт на вашій сторінці (наприклад, через вразливе поле вводу або сторонню JS бібліотеку), він миттєво отримає доступ до токену.</p>
      
      <p>Для безпечного збереження чутливих даних я рекомендую використовувати <strong>HttpOnly, Secure, SameSite Cookies</strong>. Такі куки недоступні для JavaScript, що повністю захищає їх від викрадення через XSS. Проте, при використанні кук виникає загроза атак <strong>CSRF (Cross-Site Request Forgery)</strong>. Для захисту від неї обов'язково встановлюйте прапорець <code>SameSite=Strict</code> або <code>SameSite=Lax</code>.</p>
      
      <p>Рекомендую ознайомитися з детальним гайдом безпеки на <a href="https://cheatsheetseries.owasp.org/cheatsheets/JSON_Web_Token_for_Java_Cheat_Sheet.html" target="_blank" rel="noopener noreferrer" class="text-indigo-400 hover:underline">OWASP JWT Cheat Sheet</a>.</p>
    `
  },
  {
    title: "Як уникнути критичних SQL-ін'єкцій у Node.js застосунках",
    slug: "preventing-sql-injection-nodejs-apps",
    excerpt: "Параметризовані запити та ORM дозволяють повністю захистити базу даних. Практичні приклади вразливого коду та його виправлення.",
    category: "Кібербезпека",
    categorySlug: "cybersecurity",
    authorSlug: "maksym-lysenko",
    date: "30 Травня, 2026",
    updatedDate: "30 Травня, 2026",
    views: 265,
    readTime: "6 хв",
    sources: [
      { name: "OWASP SQL Injection Prevention Cheat Sheet", url: "https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html" }
    ],
    content: `
      <p>Попри те, що SQL-ін'єкції (SQLi) відомі вже понад 20 років, вони досі стабільно входять до списку найнебезпечніших вразливостей OWASP Top 10. У своїй практиці аудиту безпеки я бачив багато прикладів, коли один непараметризований запит дозволяв повністю злити базу даних користувачів. Сьогодні я покажу, як розробники припускаються цих помилок та як їх виправити.</p>
      
      <h3>Вразливий код: конкатенація рядків</h3>
      <p>Найбільше зло у веброзробці — це пряма конкатенація вхідних даних від користувача з тілом SQL запиту:</p>
      <pre><code>// УВАГА: ВРАЗЛИВИЙ КОД!
const query = \`SELECT * FROM users WHERE email = '\${req.body.email}' AND password = '\${req.body.password}'\`;
db.query(query);</code></pre>
      <p>Якщо користувач введе в email рядок <code>admin@blog.com' --</code>, запит перетвориться на вибірку адміна без перевірки паролю, оскільки подвійне тире закоментує решту SQL запиту.</p>
      
      <h3>Правильне рішення: параметризація</h3>
      <p>Єдиний надійний спосіб захисту — використання параметризованих запитів (Prepared Statements). У такому випадку СУБД спочатку компілює шаблон запиту, а вхідні параметри передає окремо, що виключає можливість виконання шкідливого SQL-коду.</p>
      <pre><code>// ЗАХИЩЕНИЙ КОД
const query = 'SELECT * FROM users WHERE email = $1 AND password = $2';
db.query(query, [req.body.email, req.body.password]);</code></pre>
      
      <p>Для отримання додаткових відомостей про безпеку запитів перегляньте рекомендації <a href="https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html" target="_blank" rel="noopener noreferrer" class="text-indigo-400 hover:underline">OWASP SQL Injection Prevention Cheat Sheet</a>. Ніколи не довіряйте даним від клієнта!</p>
    `
  },
  {
    title: "Огляд нових фіч у TypeScript 5.8: швидкість та типи",
    slug: "typescript-58-new-features-review",
    excerpt: "Нова версія покращує перевірку типів та оптимізує компіляцію. Що змінилося для повсякденної розробки та як оновитися вже сьогодні.",
    category: "Огляди інструментів та технологій",
    categorySlug: "tools-reviews",
    authorSlug: "oleksandr-shevchenko",
    date: "28 Травня, 2026",
    updatedDate: "28 Травня, 2026",
    views: 310,
    readTime: "5 хв",
    sources: [
      { name: "Блог Microsoft про випуск TypeScript 5.8", url: "https://devblogs.microsoft.com/typescript/" }
    ],
    content: `
      <p>TypeScript продовжує розвиватися з шаленою швидкістю. Випуск версії 5.8 зосереджений на двох основних напрямках: прискоренні компіляції великих проектів та додаванні точніших перевірок для граничних випадків типів. Я вже протестував нову версію на кількох робочих проектах і готовий поділитися своїми спостереженнями.</p>
      
      <h3>Ключові нововведення</h3>
      <ul>
        <li><strong>Покращена оптимізація перевірки типів:</strong> Час інкрементної збірки у моєму великому репозиторії зменшився приблизно на 15%.</li>
        <li><strong>Суворіший контроль повернення значень:</strong> Зменшено кількість хибнопозитивних результатів при роботі зі складними generic типами та умовними типами (conditional types).</li>
        <li><strong>Оновлена підтримка ES модулів:</strong> Покращено сумісність з останніми стандартами ECMAScript та Node.js ESM.</li>
      </ul>
      
      <p>Особливо мене порадувало те, як TypeScript 5.8 почав краще обробляти звуження типів (type narrowing) в асинхронних функціях. Це виправляє низку старих багів, коли компілятор забував тип змінної після виклику <code>await</code>.</p>
      
      <p>Щоб дізнатися більше про технічні деталі релізу, перейдіть на <a href="https://devblogs.microsoft.com/typescript/" target="_blank" rel="noopener noreferrer" class="text-indigo-400 hover:underline">офіційний блог TypeScript</a>.</p>
    `
  },
  {
    title: "Чому PostgreSQL залишається кращою реляційною базою даних",
    slug: "why-postgresql-remains-the-best-choice",
    excerpt: "Потужні JSON-можливості, підтримка векторних пошуків через pgvector та надійність ACID роблять PostgreSQL незамінним вибором у 2026 році.",
    category: "Огляди інструментів та технологій",
    categorySlug: "tools-reviews",
    authorSlug: "mariia-kovalchuk",
    date: "25 Травня, 2026",
    updatedDate: "26 Травня, 2026",
    views: 405,
    readTime: "7.5 хв",
    sources: [
      { name: "Офіційний сайт PostgreSQL", url: "https://www.postgresql.org" },
      { name: "pgvector Extension на GitHub", url: "https://github.com/pgvector/pgvector" }
    ],
    content: `
      <p>Вибір бази даних — одне з найважливіших архітектурних рішень при старті проекту. Останнім часом з'явилося багато модних NoSQL та NewSQL рішень. Проте у понад 80% моїх проектів я обираю PostgreSQL. Чому? Тому що ця СУБД поєднує в собі класичну надійність та здатність адаптуватися до найсучасніших викликів розробки.</p>
      
      <h3>Суперсили PostgreSQL у 2026 році</h3>
      <p>Ось чому Postgres досі тримає лідерство:</p>
      <ul>
        <li><strong>Повноцінна робота з JSON (JSONB):</strong> Можливість індексувати та ефективно шукати дані всередині неструктурованих документів робить Postgres чудовим гібридним рішенням, яке часто виключає потребу в MongoDB.</li>
        <li><strong>Розширення pgvector:</strong> З розвитком ШІ векторні бази даних стали необхідністю. Завдяки розширенню pgvector ви можете зберігати ембеддінги та робити семантичний пошук безпосередньо у вашій реляційній БД.</li>
        <li><strong>Справжня ACID сумісність:</strong> Надійність транзакцій гарантує збереження ваших фінансових або користувацьких даних за будь-яких умов.</li>
      </ul>
      
      <p>У одному з моїх останніх проектів інтеграція семантичного пошуку товарів на базі <code>pgvector</code> дозволила відмовитися від окремого кластера Elasticsearch, заощадивши клієнту понад $400 на місяць на інфраструктурі. Почитати детальніше про це розширення можна на <a href="https://github.com/pgvector/pgvector" target="_blank" rel="noopener noreferrer" class="text-indigo-400 hover:underline">GitHub репозиторії pgvector</a> або на <a href="https://www.postgresql.org" target="_blank" rel="noopener noreferrer" class="text-indigo-400 hover:underline">офіційному сайті PostgreSQL</a>.</p>
    `
  }
];

export const CATEGORIES = [
  { name: "JavaScript / Frontend розробка", slug: "javascript-frontend", count: 2 },
  { name: "Backend та DevOps", slug: "backend-devops", count: 2 },
  { name: "Штучний інтелект та ML", slug: "ai-ml", count: 2 },
  { name: "Кібербезпека", slug: "cybersecurity", count: 2 },
  { name: "Огляди інструментів та технологій", slug: "tools-reviews", count: 2 },
];

export const POPULAR_TAGS = [
  "Next.js", "React", "Node.js", "Express", "Fastify", "Docker", "Kubernetes", "PostgreSQL", "JWT", "Security", "LangChain", "Agentic AI"
];
