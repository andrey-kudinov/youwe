export interface ITechnology {
  name: string;
  icon: string;
}

export interface IClient {
  title: string;
  shortTitle: string;
  description: string;
  technologies: ITechnology[];
  tags: string[];
  image: string;
  label: string;
  href: string;
  caseStudyHref?: string;
  caseStudy: boolean;
  portfolio: boolean;
  icon?: string;
  hide?: boolean;
}

export const clients: IClient[] = [
  {
    title: 'Дневник эмоционального состояния',
    shortTitle: 'Мой дневник',
    description:
      'Мы создали интуитивно понятный инструмент для отслеживания настроения и эмоций, который помогает выявлять триггеры стресса и улучшать эмоциональное самочувствие.',
    technologies: [
      {
        name: 'Когнитивно-поведенческая терапия',
        icon: '/mental/m4.png',
      },
      {
        name: 'Осознанность',
        icon: '/mental/m9.png',
      },
    ],
    tags: ['Самопомощь', 'Тревога'],
    image: '/mental/m7.png',
    label: '/mental/m2.png',
    href: '/tools/emotional-diary',
    caseStudyHref: '/case-studies/emotional-diary',
    portfolio: true,
    caseStudy: true,
    icon: '/mental/m11.png',
  },
  {
    title: 'Программа антистресса',
    shortTitle: 'Антистресс',
    description:
      'Наша 30-дневная программа с ежедневными практиками и поддержкой экспертов помогает снизить уровень стресса и улучшить качество жизни.',
    technologies: [
      {
        name: 'Дыхательные практики',
        icon: '/mental/m5.png',
      },
      {
        name: 'Медитация',
        icon: '/mental/m12.png',
      },
    ],
    tags: ['Стресс', 'Релаксация'],
    image: '/mental/m3.png',
    label: '/mental/m6.png',
    href: '/programs/anti-stress',
    portfolio: true,
    caseStudy: true,
    icon: '/mental/m8.png',
  },
  {
    title: 'Сообщество поддержки',
    shortTitle: 'Поддержка',
    description:
      'Безопасное пространство где вы можете анонимно поделиться переживаниями и получить поддержку от людей, которые понимают.',
    technologies: [
      {
        name: 'Групповая терапия',
        icon: '/mental/m1.png',
      },
      {
        name: 'Модерация',
        icon: '/mental/m10.png',
      },
    ],
    tags: ['Сообщество', 'Анонимность'],
    image: '/mental/m2.png',
    label: '/mental/m7.png',
    href: '/community',
    portfolio: true,
    caseStudy: true,
    icon: '/mental/m4.png',
  },
  {
    title: 'Курс по борьбе с выгоранием',
    shortTitle: 'Анти-выгорание',
    description:
      'Комплексная программа восстановления после эмоционального выгорания с индивидуальным планом и поддержкой психолога.',
    technologies: [
      {
        name: 'Ресурсное состояние',
        icon: '/mental/m8.png',
      },
      {
        name: 'Энерджи-менеджмент',
        icon: '/mental/m3.png',
      },
    ],
    tags: ['Выгорание', 'Профессиональное'],
    image: '/mental/m5.png',
    label: '/mental/m9.png',
    href: '/courses/burnout',
    portfolio: true,
    caseStudy: true,
    icon: '/mental/m12.png',
  },
  {
    title: 'Телефон доверия',
    shortTitle: 'Помощь сейчас',
    description: 'Круглосуточная анонимная психологическая помощь по телефону от квалифицированных специалистов.',
    technologies: [
      {
        name: 'Кризисная помощь',
        icon: '/mental/m6.png',
      },
      {
        name: 'Консультирование',
        icon: '/mental/m11.png',
      },
    ],
    tags: ['Экстренная помощь', 'Кризис'],
    image: '/mental/m10.png',
    label: '/mental/m1.png',
    href: '/emergency',
    portfolio: true,
    caseStudy: true,
    icon: '/mental/m5.png',
  },
  {
    title: 'Мобильное приложение для сна',
    shortTitle: 'Здоровый сон',
    description: 'Персонализированные программы для улучшения качества сна с трекингом и рекомендациями.',
    technologies: [
      {
        name: 'Релаксация',
        icon: '/mental/m7.png',
      },
      {
        name: 'Биоритмы',
        icon: '/mental/m2.png',
      },
    ],
    tags: ['Сон', 'Гигиена сна'],
    image: '/mental/m12.png',
    label: '/mental/m4.png',
    href: '/apps/sleep',
    portfolio: false,
    caseStudy: false,
    icon: '/mental/m9.png',
  },
  {
    title: 'Онлайн-терапия',
    shortTitle: 'Терапия онлайн',
    description:
      'Профессиональная психологическая помощь от лицензированных специалистов в удобном формате видеоконсультаций.',
    technologies: [],
    tags: ['Психотерапия', 'Онлайн'],
    image: '/mental/m4.png',
    label: '/mental/m8.png',
    href: '/therapy',
    portfolio: false,
    caseStudy: false,
    icon: '/mental/m3.png',
  },
  {
    title: 'Курс по управлению тревогой',
    shortTitle: 'Тревога',
    description: 'Практический курс с техниками когнитивно-поведенческой терапии для снижения тревожности.',
    technologies: [],
    tags: ['Тревожность', 'КПТ'],
    image: '/mental/m9.png',
    label: '/mental/m5.png',
    href: '/courses/anxiety',
    portfolio: false,
    caseStudy: false,
    icon: '/mental/m10.png',
  },
  {
    title: 'Программа для родителей',
    shortTitle: 'Родителям',
    description:
      'Специализированные материалы и поддержка для родителей, переживающих стресс и эмоциональное выгорание.',
    technologies: [],
    tags: ['Родительство', 'Семья'],
    image: '/mental/m1.png',
    label: '/mental/m12.png',
    href: '/for-parents',
    portfolio: false,
    caseStudy: false,
    icon: '/mental/m6.png',
  },
  {
    title: 'Ресурсы для подростков',
    shortTitle: 'Подросткам',
    description: 'Специально разработанные материалы и поддержка для подростков, переживающих эмоциональные трудности.',
    technologies: [],
    tags: ['Подростки', 'Школа'],
    image: '/mental/m6.png',
    label: '/mental/m10.png',
    href: '/for-teens',
    portfolio: false,
    caseStudy: false,
    icon: '/mental/m7.png',
  },
];
