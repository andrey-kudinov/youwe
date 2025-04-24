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
        icon: '/mental-health-icons/cbt-mini.svg',
      },
      {
        name: 'Осознанность',
        icon: '/mental-health-icons/mindfulness-mini.svg',
      },
    ],
    tags: ['Самопомощь', 'Тревога'],
    image: '/mental-health/case-study-diary.jpg',
    label: '/clients/diary.svg',
    href: '/tools/emotional-diary',
    caseStudyHref: '/case-studies/emotional-diary',
    portfolio: true,
    caseStudy: true,
    icon: '/mental-health-icons/diary.svg',
  },
  {
    title: 'Программа антистресса',
    shortTitle: 'Антистресс',
    description:
      'Наша 30-дневная программа с ежедневными практиками и поддержкой экспертов помогает снизить уровень стресса и улучшить качество жизни.',
    technologies: [
      {
        name: 'Дыхательные практики',
        icon: '/mental-health-icons/breathing-mini.svg',
      },
      {
        name: 'Медитация',
        icon: '/mental-health-icons/meditation-mini.svg',
      },
    ],
    tags: ['Стресс', 'Релаксация'],
    image: '/mental-health/case-study-stress.jpg',
    label: '/clients/anti-stress.svg',
    href: '/programs/anti-stress',
    portfolio: true,
    caseStudy: true,
    icon: '/mental-health-icons/stress.svg',
  },
  {
    title: 'Сообщество поддержки',
    shortTitle: 'Поддержка',
    description:
      'Безопасное пространство где вы можете анонимно поделиться переживаниями и получить поддержку от людей, которые понимают.',
    technologies: [
      {
        name: 'Групповая терапия',
        icon: '/mental-health-icons/group-mini.svg',
      },
      {
        name: 'Модерация',
        icon: '/mental-health-icons/moderation-mini.svg',
      },
    ],
    tags: ['Сообщество', 'Анонимность'],
    image: '/mental-health/case-study-community.jpg',
    label: '/clients/community.svg',
    href: '/community',
    portfolio: true,
    caseStudy: true,
    icon: '/mental-health-icons/community.svg',
  },
  {
    title: 'Курс по борьбе с выгоранием',
    shortTitle: 'Анти-выгорание',
    description:
      'Комплексная программа восстановления после эмоционального выгорания с индивидуальным планом и поддержкой психолога.',
    technologies: [
      {
        name: 'Ресурсное состояние',
        icon: '/mental-health-icons/resources-mini.svg',
      },
      {
        name: 'Энерджи-менеджмент',
        icon: '/mental-health-icons/energy-mini.svg',
      },
    ],
    tags: ['Выгорание', 'Профессиональное'],
    image: '/mental-health/case-study-burnout.jpg',
    label: '/clients/burnout.svg',
    href: '/courses/burnout',
    portfolio: true,
    caseStudy: true,
    icon: '/mental-health-icons/burnout.svg',
  },
  {
    title: 'Телефон доверия',
    shortTitle: 'Помощь сейчас',
    description: 'Круглосуточная анонимная психологическая помощь по телефону от квалифицированных специалистов.',
    technologies: [
      {
        name: 'Кризисная помощь',
        icon: '/mental-health-icons/crisis-mini.svg',
      },
      {
        name: 'Консультирование',
        icon: '/mental-health-icons/counseling-mini.svg',
      },
    ],
    tags: ['Экстренная помощь', 'Кризис'],
    image: '/mental-health/case-study-hotline.jpg',
    label: '/clients/hotline.svg',
    href: '/emergency',
    portfolio: true,
    caseStudy: true,
    icon: '/mental-health-icons/hotline.svg',
  },
  {
    title: 'Мобильное приложение для сна',
    shortTitle: 'Здоровый сон',
    description: 'Персонализированные программы для улучшения качества сна с трекингом и рекомендациями.',
    technologies: [
      {
        name: 'Релаксация',
        icon: '/mental-health-icons/relax-mini.svg',
      },
      {
        name: 'Биоритмы',
        icon: '/mental-health-icons/rhythms-mini.svg',
      },
    ],
    tags: ['Сон', 'Гигиена сна'],
    image: '/mental-health/case-study-sleep.jpg',
    label: '/clients/sleep.svg',
    href: '/apps/sleep',
    portfolio: false,
    caseStudy: false,
    icon: '/mental-health-icons/sleep.svg',
  },
  {
    title: 'Онлайн-терапия',
    shortTitle: 'Терапия онлайн',
    description:
      'Профессиональная психологическая помощь от лицензированных специалистов в удобном формате видеоконсультаций.',
    technologies: [],
    tags: ['Психотерапия', 'Онлайн'],
    image: '/mental-health/case-study-therapy.jpg',
    label: '/clients/therapy.svg',
    href: '/therapy',
    portfolio: false,
    caseStudy: false,
    icon: '/mental-health-icons/therapy.svg',
  },
  {
    title: 'Курс по управлению тревогой',
    shortTitle: 'Тревога',
    description: 'Практический курс с техниками когнитивно-поведенческой терапии для снижения тревожности.',
    technologies: [],
    tags: ['Тревожность', 'КПТ'],
    image: '/mental-health/case-study-anxiety.jpg',
    label: '/clients/anxiety.svg',
    href: '/courses/anxiety',
    portfolio: false,
    caseStudy: false,
    icon: '/mental-health-icons/anxiety.svg',
  },
  {
    title: 'Программа для родителей',
    shortTitle: 'Родителям',
    description:
      'Специализированные материалы и поддержка для родителей, переживающих стресс и эмоциональное выгорание.',
    technologies: [],
    tags: ['Родительство', 'Семья'],
    image: '/mental-health/case-study-parents.jpg',
    label: '/clients/parents.svg',
    href: '/for-parents',
    portfolio: false,
    caseStudy: false,
    icon: '/mental-health-icons/parents.svg',
  },
  {
    title: 'Ресурсы для подростков',
    shortTitle: 'Подросткам',
    description: 'Специально разработанные материалы и поддержка для подростков, переживающих эмоциональные трудности.',
    technologies: [],
    tags: ['Подростки', 'Школа'],
    image: '/mental-health/case-study-teens.jpg',
    label: '/clients/teens.svg',
    href: '/for-teens',
    portfolio: false,
    caseStudy: false,
    icon: '/mental-health-icons/teens.svg',
  },
];
