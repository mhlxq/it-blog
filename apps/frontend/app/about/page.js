import React from "react";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Про нас | IT Blog - Місія, Редакційна Політика та Контакти",
  description: "Дізнайтеся більше про місію IT Blog, наші принципи перевірки фактів та редакційну політику. Знайдіть наші контакти та соціальні мережі.",
};

export default function AboutPage() {
  return (
    <div className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-16">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-400 mb-6">
          Проєкт "IT Blog"
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-6">
          Про наш блог та редакцію
        </h1>
        <p className="text-lg text-zinc-400 leading-relaxed">
          Професійне медіа про веброзробку, DevOps, штучний інтелект та кібербезпеку. Ми допомагаємо розробникам зростати, ділячись глибоким практичним досвідом.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* Editorial Policy & Info */}
        <div className="lg:col-span-2 space-y-12">
          {/* Section 1: Назва та опис блогу */}
          <section className="bg-zinc-900/30 border border-zinc-900 rounded-2xl p-8 space-y-4">
            <h2 className="text-2xl font-bold text-white">Хто ми та для кого пишемо</h2>
            <p className="text-sm text-zinc-350 leading-relaxed">
              <strong>IT Blog</strong> — це незалежний технічний блог, заснований у <strong>червні 2026 року</strong> групою ентузіастів та практикуючих інженерів. Наша аудиторія — це Frontend та Backend розробники, DevOps-спеціалісти, аналітики даних та експерти з інформаційної безпеки, які шукають не просто загальні описи, а глибокі технічні інструкції та перевірений практикою досвід.
            </p>
            <p className="text-sm text-zinc-355 leading-relaxed">
              Ми віримо, що якісний контент має бути безкоштовним та доступним. На сторінках нашого блогу ви знайдете розбори архітектурних шаблонів, аналіз нових випусків фреймворків, огляди інструментів та детальні інструкції щодо захисту вебдодатків від вразливостей.
            </p>
          </section>

          {/* Section 2: Місія або редакційна політика */}
          <section className="bg-zinc-900/30 border border-zinc-900 rounded-2xl p-8 space-y-6">
            <h2 className="text-2xl font-bold text-white">Редакційна політика та стандарти E-E-A-T</h2>
            <p className="text-sm text-zinc-350 leading-relaxed">
              Для забезпечення високої надійності та користі контенту для наших читачів ми дотримуємося суворих редакційних стандартів якості Google E-E-A-T:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-indigo-400 font-semibold text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                  Досвід (Experience)
                </div>
                <p className="text-xs text-zinc-450 leading-relaxed">
                  Усі технічні статті пишуться авторами, які безпосередньо працювали зі згаданими технологіями у комерційних проектах. Ми вимагаємо наявності реальних прикладів коду та розбору практичних кейсів.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-purple-400 font-semibold text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                  Експертиза (Expertise)
                </div>
                <p className="text-xs text-zinc-450 leading-relaxed">
                  Наші автори мають профільну освіту чи багаторічний підтверджений досвід розробки. Матеріали проходять ретельне технічне рецензування (peer review) перед публікацією.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-blue-400 font-semibold text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                  Авторитетність (Authoritativeness)
                </div>
                <p className="text-xs text-zinc-450 leading-relaxed">
                  Ми публічно демонструємо профілі наших авторів, включаючи посилання на їхні професійні мережі (LinkedIn, GitHub) та опис компетенцій. Редакція не використовує анонімні статті чи псевдоніми.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  Надійність (Trustworthiness)
                </div>
                <p className="text-xs text-zinc-450 leading-relaxed">
                  Кожна стаття містить список перевірених зовнішніх джерел та офіційної документації. Ми гарантуємо актуальність дат публікації та оновлення матеріалів, а також повну безпеку з'єднання.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Sidebar & Contact Details */}
        <div className="space-y-8">
          {/* Contact Details Card */}
          <div className="bg-zinc-900/30 border border-zinc-900 rounded-2xl p-6 space-y-6">
            <h3 className="text-base font-bold text-white uppercase tracking-wider pb-2 border-b border-zinc-900">
              Контакти редакції
            </h3>
            
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-indigo-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <span className="block text-xs text-zinc-550">Email</span>
                  <a href="mailto:info@itblog-mock.com" className="text-zinc-300 hover:text-indigo-400 transition-colors">
                    info@itblog-mock.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-indigo-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <span className="block text-xs text-zinc-550">Телефон</span>
                  <a href="tel:+380441234567" className="text-zinc-300 hover:text-indigo-400 transition-colors">
                    +380 (44) 123-45-67
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-indigo-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <span className="block text-xs text-zinc-550">Офіс редакції</span>
                  <span className="text-zinc-300">Київ, вул. Шевченка, 12</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-indigo-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <span className="block text-xs text-zinc-550">Дата заснування</span>
                  <span className="text-zinc-300">1 Червня, 2026</span>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="pt-4 border-t border-zinc-900">
              <span className="block text-xs text-zinc-550 mb-3 uppercase tracking-wider font-semibold">
                Соціальні мережі
              </span>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs text-zinc-400 hover:text-white hover:border-zinc-700 transition-all"
                >
                  GitHub
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs text-zinc-400 hover:text-white hover:border-zinc-700 transition-all"
                >
                  LinkedIn
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs text-zinc-400 hover:text-white hover:border-zinc-700 transition-all"
                >
                  Twitter/X
                </a>
                <a
                  href="https://telegram.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs text-zinc-400 hover:text-white hover:border-zinc-700 transition-all"
                >
                  Telegram
                </a>
              </div>
            </div>
          </div>

          {/* Form Card */}
          <div className="bg-zinc-900/30 border border-zinc-900 rounded-2xl p-6">
            <h3 className="text-base font-bold text-white uppercase tracking-wider pb-4 mb-4 border-b border-zinc-900">
              Напишіть нам
            </h3>
            <ContactForm />
          </div>
        </div>

      </div>

    </div>
  );
}
