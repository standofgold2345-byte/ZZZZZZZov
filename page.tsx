export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-[#111827] font-sans">
      {/* 1. Шапка */}
      <header className="border-b border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="text-2xl font-black tracking-wider text-[#1a2a52] hover:opacity-60">
            BoxPack
          </div>
          <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-600">
            <a href="#services" className="hover:text-black transition-colors">Услуги</a>
            <a href="#how-it-works" className="hover:text-black transition-colors">Как это работает</a>
            <a href="#video" className="hover:text-black transition-colors">Видеофиксация</a>
            <a href="#calc" className="hover:text-black transition-colors">Калькулятор</a>
            <a href="#cases" className="hover:text-black transition-colors">Кейсы</a>
            <a href="#contacts" className="hover:text-black transition-colors">Контакты</a>
          </nav>
        </div>
      </header>

      {/*Первый экран*/}
      <section className="bg-[#1b2b4f] text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="text-xs uppercase tracking-widest text-white/60 font-medium">
                Автоматизированный фулфилмент
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold mt-4 leading-tight">
                Фулфилмент,<br />который <br />держит мир
              </h1>
              <p className="mt-6 text-white/70 text-sm sm:text-base max-w-xl leading-relaxed">
                Автоматизированная упаковка, видеоконтроль каждого заказа и отправка когда-нибудь. 
                Мы берем на себя хранение, сборку, маркировку и логистику.
              </p>
              
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#contacts"
                  className="inline-flex items-center justify-center px-6 py-3 font-medium rounded-md text-white hover:bg-white/10 transition-colors"
                >
                  Рассчитать стоимость &rarr;
                </a>
                <a
                  href="#contacts"
                  className="inline-flex items-center justify-center px-6 py-3 border border-white/50 text-sm font-medium rounded-md text-white hover:bg-white/10 transition-colors"
                >
                  Получить консультацию
                </a>
              </div>

              {/*карточки*/}
              <div className="grid grid-cols-3 sm:grid-cols-3 gap-6 mt-14">
                <div className="bg-[#243763] p-4 rounded-lg">
                  <div className="text-xl font-bold">500000+</div>
                  <div className="text-xs text-white/60 mt-1">заказов в день</div>
                </div>
                <div className="bg-[#243763] p-4 rounded-lg">
                  <div className="text-xl font-bold">100%</div>
                  <div className="text-xs text-white/60 mt-1">точность сборки</div>
                </div>
                <div className="bg-[#243763] p-4 rounded-lg">
                  <div className="text-xl font-bold">FBO/FBS</div>
                  <div className="text-xs text-white/60 mt-1">все маркетплейсы</div>
                </div>
              </div>
            </div>

            {/* Заглушка под видео */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full aspect-[16/9] bg-gray-200 rounded-2xl flex items-center justify-center p-6 text-center text-gray-500 text-xs shadow-inner">
                Видео автоматической упаковочной линии
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*3*/}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold">Как начать работать с нами</h2>
            <p className="mt-3 text-sm text-gray-600 font-bold">
              Подключение занимает всего несколько дней. Все процессы максимально автоматизированы.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#f4f5f7] p-4 rounded-xl border border-gray-100 shadow-xl min-h-[180px]">
              <span className="text-xs font-semibold text-gray-500">ШАГ 1</span>
              <h3 className="text-sm font-bold mt-2">Оставляете заявку</h3>
              <p className="text-xs text-gray-500 mt-2 leading-relaxed">Через сайт или Telegram</p>
            </div>
            <div className="bg-[#f4f5f7] p-4 rounded-xl border border-gray-100 shadow-xl min-h-[180px]">
              <span className="text-xs font-semibold text-gray-500">ШАГ 2</span>
              <h3 className="text-sm font-bold mt-2">Получаете расчет</h3>
              <p className="text-xs text-gray-500 mt-2 leading-relaxed">Под ваш объём и формат работы</p>
            </div>
            <div className="bg-[#f4f5f7] p-4 rounded-xl border border-gray-100 shadow-xl min-h-[180px]">
              <span className="text-xs font-semibold text-gray-500">ШАГ 3</span>
              <h3 className="text-sm font-bold mt-2">Подписываем договор</h3>
              <p className="text-xs text-gray-500 mt-2 leading-relaxed">Через ЭДО</p>
            </div>
            <div className="bg-[#f4f5f7] p-4 rounded-xl border border-gray-100 shadow-xl min-h-[180px]">
              <span className="text-xs font-semibold text-gray-500">ШАГ 4</span>
              <h3 className="text-sm font-bold mt-2">Принимаем товар</h3>
              <p className="text-xs text-gray-500 mt-2 leading-relaxed">От поставщика или транспортной компании</p>
            </div>
            <div className="bg-[#f4f5f7] p-4 rounded-xl border border-gray-100 shadow-xl min-h-[180px]">
              <span className="text-xs font-semibold text-gray-500">ШАГ 5</span>
              <h3 className="text-sm font-bold mt-2">Автоматизированная упаковка</h3>
              <p className="text-xs text-gray-500 mt-2 leading-relaxed">С видеоконтролем каждого этапа</p>
            </div>
            <div className="bg-[#f4f5f7] p-4 rounded-xl border border-gray-100 shadow-xl min-h-[180px]">
              <span className="text-xs font-semibold text-gray-500">ШАГ 6</span>
              <h3 className="text-sm font-bold mt-2">Отправляем</h3>
              <p className="text-xs text-gray-500 mt-2 leading-relaxed">На маркетплейсы по всей России</p>
            </div>
            <div className="bg-[#f4f5f7] p-4 rounded-xl border border-gray-100 shadow-xl min-h-[180px]">
              <span className="text-xs font-semibold text-gray-500">ШАГ 7</span>
              <h3 className="text-sm font-bold mt-2">Получаете результат</h3>
              <p className="text-xs text-gray-500 mt-2 leading-relaxed">Отчеты и прозрачную аналитику</p>
            </div>
          </div>
        </div>
      </section>

      
      <section id="services" className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold">Услуги фулфилмента</h2>
            <p className="mt-3 text-sm text-gray-500">
              Полный цикл обработки товара от приемки до доставки.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-gray-200 border-t-2 border-t-blue-600 shadow-sm">
              <h3 className="text-sm font-bold">Приемка и сортировка</h3>
              <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                Принимаем поставки любого объема и размещаем товар на адресное хранение.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200 border-t-2 border-t-blue-600 shadow-sm">
              <h3 className="text-sm font-bold">Проверка на брак</h3>
              <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                Контроль качества перед отправкой покупателю.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200 border-t-2 border-t-blue-600 shadow-sm">
              <h3 className="text-sm font-bold">Автоматизированная упаковка</h3>
              <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                Автоматические линии и видеоконтроль каждого заказа.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200 border-t-2 border-t-blue-600 shadow-sm">
              <h3 className="text-sm font-bold">Сборка заказов</h3>
              <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                Быстрая комплектация заказов по данным маркетплейсов.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200 border-t-2 border-t-blue-600 shadow-sm">
              <h3 className="text-sm font-bold">Отправка на маркетплейсы</h3>
              <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                FBO и FBS для всех крупных площадок.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200 border-t-2 border-t-blue-600 shadow-sm">
              <h3 className="text-sm font-bold">Хранение товаров</h3>
              <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                Безопасное адресное хранение продукции.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200 border-t-2 border-t-blue-600 shadow-sm md:col-span-2 lg:col-span-1">
              <h3 className="text-sm font-bold">Интеграции</h3>
              <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                Синхронизация с маркетплейсами и CRM.
              </p>
            </div>
          </div>
        </div>
      </section>

      
      <section className="bg-[#1b2b4f] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold">Почему выбирают BOXPACK</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#243763] p-6 rounded-xl border border-white/5 min-h-[180px]">
              <h3 className="text-sm font-bold">Скорость</h3>
              <p className="text-xs text-gray-300 mt-2 leading-relaxed">
                До 2000000 товаров за смену и отправка день в день.
              </p>
            </div>
            <div className="bg-[#243763] p-6 rounded-xl border border-white/5 min-h-[180px]">
              <h3 className="text-sm font-bold">Точность</h3>
              <p className="text-xs text-gray-300 mt-2 leading-relaxed">
                99.9% точность сборки благодаря автоматизации.
              </p>
            </div>
            <div className="bg-[#243763] p-6 rounded-xl border border-white/5 min-h-[180px]">
              <h3 className="text-sm font-bold">Надежность</h3>
              <p className="text-xs text-gray-300 mt-2 leading-relaxed">
                Страхование товара и круглосуточный контроль.
              </p>
            </div>
            <div className="bg-[#243763] p-6 rounded-xl border border-white/5 min-h-[180px]">
              <h3 className="text-sm font-bold">Поддержка</h3>
              <p className="text-xs text-gray-300 mt-2 leading-relaxed">
                Персональный менеджер и оперативная помощь.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}