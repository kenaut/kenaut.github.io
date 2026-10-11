import { ref, computed } from 'vue'

export const locales = [
  { code: 'zh_CN', label: '中文（简体）' },
  { code: 'zh_TW', label: '中文（繁體）' },
  { code: 'en', label: 'English' },
  { code: 'ja', label: '日本語' },
  { code: 'es', label: 'Español' },
  { code: 'uk', label: 'Українська' },
  { code: 'ko', label: '한국어' },
]

const messages = {
  zh_CN: {
    nav: { home: '主页', projects: '项目', blog: '博客' },
    sidebar: {
      avatarAlt: '头像',
      orgsTitle: '组织',
      birthday: '生日',
      gender: '性别',
      mbti: 'MBTI',
      role: '身份',
      birthdayValue: '10月29日',
      roleValue: '个人开发者',
    },
    home: {
      tagline: '一个只会用 AI（划掉）前后端兼备的自由开发者',
      activityTitle: '最近活动',
      activitySub: 'public build log',
      projectsTitle: '代表作',
      projectsSub: 'Project cards that behave like work, not stats.',
      contactTitle: '联系',
      contactSub: 'Reach out, or follow along.',
    },
    blog: { title: '博客', sub: 'Notes and thoughts.' },
    projects: { title: '项目', sub: 'All projects, work in progress.' },
    post: { notFound: '文章不存在' },
    countdown1024: {
      title: '距离 10.24 还有',
      occasion: '自定生日 & 1024 程序员节',
      days: '天',
      hours: '时',
      minutes: '分',
      seconds: '秒',
      dismiss: '点击任意位置继续',
    },
    metaDescription: 'kenaut 的个人网站',
  },
  zh_TW: {
    nav: { home: '主頁', projects: '專案', blog: '部落格' },
    sidebar: {
      avatarAlt: '頭像',
      orgsTitle: '組織',
      birthday: '生日',
      gender: '性別',
      mbti: 'MBTI',
      role: '身分',
      birthdayValue: '10月29日',
      roleValue: '個人開發者',
    },
    home: {
      tagline: '一個只會用 AI（劃掉）前後端兼備的自由開發者',
      activityTitle: '最近活動',
      activitySub: 'public build log',
      projectsTitle: '代表作',
      projectsSub: 'Project cards that behave like work, not stats.',
      contactTitle: '聯絡',
      contactSub: 'Reach out, or follow along.',
    },
    blog: { title: '部落格', sub: 'Notes and thoughts.' },
    projects: { title: '專案', sub: 'All projects, work in progress.' },
    post: { notFound: '文章不存在' },
    countdown1024: {
      title: '距離 10.24 還有',
      occasion: '自定生日 & 1024 程式設計師節',
      days: '天',
      hours: '時',
      minutes: '分',
      seconds: '秒',
      dismiss: '點擊任意位置繼續',
    },
    metaDescription: 'kenaut 的個人網站',
  },
  en: {
    nav: { home: 'Home', projects: 'Projects', blog: 'Blog' },
    sidebar: {
      avatarAlt: 'Avatar',
      orgsTitle: 'Organizations',
      birthday: 'Birthday',
      gender: 'Gender',
      mbti: 'MBTI',
      role: 'Role',
      birthdayValue: 'Oct 29',
      roleValue: 'Indie developer',
    },
    home: {
      tagline: 'A free developer who only uses AI (just kidding) — full-stack, frontend and backend',
      activityTitle: 'Recent Activity',
      activitySub: 'public build log',
      projectsTitle: 'Featured Projects',
      projectsSub: 'Project cards that behave like work, not stats.',
      contactTitle: 'Contact',
      contactSub: 'Reach out, or follow along.',
    },
    blog: { title: 'Blog', sub: 'Notes and thoughts.' },
    projects: { title: 'Projects', sub: 'All projects, work in progress.' },
    post: { notFound: 'Post not found' },
    countdown1024: {
      title: 'T-minus to Oct 24',
      occasion: 'Custom Birthday & 1024 Programmer Day',
      days: 'd',
      hours: 'h',
      minutes: 'm',
      seconds: 's',
      dismiss: 'Click anywhere to continue',
    },
    metaDescription: "kenaut's personal website",
  },
  ja: {
    nav: { home: 'ホーム', projects: 'プロジェクト', blog: 'ブログ' },
    sidebar: {
      avatarAlt: 'アバター',
      orgsTitle: '組織',
      birthday: '誕生日',
      gender: '性別',
      mbti: 'MBTI',
      role: '身分',
      birthdayValue: '10月29日',
      roleValue: '個人開発者',
    },
    home: {
      tagline: 'AI しか使えない（嘘）フロントエンドもバックエンドもできる自由開発者',
      activityTitle: '最近の活動',
      activitySub: 'public build log',
      projectsTitle: '代表作',
      projectsSub: 'Project cards that behave like work, not stats.',
      contactTitle: '連絡先',
      contactSub: 'Reach out, or follow along.',
    },
    blog: { title: 'ブログ', sub: 'Notes and thoughts.' },
    projects: { title: 'プロジェクト', sub: 'All projects, work in progress.' },
    post: { notFound: '記事が見つかりません' },
    countdown1024: {
      title: '10.24 まであと',
      occasion: '自分で決めた誕生日 & 1024 プログラマーの日',
      days: '日',
      hours: '時',
      minutes: '分',
      seconds: '秒',
      dismiss: 'クリックして続行',
    },
    metaDescription: 'kenaut の個人サイト',
  },
  es: {
    nav: { home: 'Inicio', projects: 'Proyectos', blog: 'Blog' },
    sidebar: {
      avatarAlt: 'Avatar',
      orgsTitle: 'Organizaciones',
      birthday: 'Cumpleaños',
      gender: 'Género',
      mbti: 'MBTI',
      role: 'Rol',
      birthdayValue: '29 oct',
      roleValue: 'Desarrollador independiente',
    },
    home: {
      tagline: 'Un desarrollador libre que solo usa IA (broma) — full-stack, frontend y backend',
      activityTitle: 'Actividad reciente',
      activitySub: 'public build log',
      projectsTitle: 'Proyectos destacados',
      projectsSub: 'Project cards that behave like work, not stats.',
      contactTitle: 'Contacto',
      contactSub: 'Reach out, or follow along.',
    },
    blog: { title: 'Blog', sub: 'Notes and thoughts.' },
    projects: { title: 'Proyectos', sub: 'All projects, work in progress.' },
    post: { notFound: 'Artículo no encontrado' },
    countdown1024: {
      title: 'Cuenta atrás para el 10.24',
      occasion: 'Cumpleaños autoelegido & Día del Programador (1024)',
      days: 'd',
      hours: 'h',
      minutes: 'm',
      seconds: 's',
      dismiss: 'Haz clic en cualquier lugar para continuar',
    },
    metaDescription: 'Sitio personal de kenaut',
  },
  uk: {
    nav: { home: 'Головна', projects: 'Проєкти', blog: 'Блог' },
    sidebar: {
      avatarAlt: 'Аватар',
      orgsTitle: 'Організації',
      birthday: 'День народження',
      gender: 'Стать',
      mbti: 'MBTI',
      role: 'Роль',
      birthdayValue: '29 жовтня',
      roleValue: 'Незалежний розробник',
    },
    home: {
      tagline: 'Вільний розробник, який користується лише ШІ (жарт) — full-stack, frontend і backend',
      activityTitle: 'Остання активність',
      activitySub: 'public build log',
      projectsTitle: 'Вибрані проєкти',
      projectsSub: 'Project cards that behave like work, not stats.',
      contactTitle: 'Контакти',
      contactSub: 'Reach out, or follow along.',
    },
    blog: { title: 'Блог', sub: 'Notes and thoughts.' },
    projects: { title: 'Проєкти', sub: 'All projects, work in progress.' },
    post: { notFound: 'Статтю не знайдено' },
    countdown1024: {
      title: 'До 10.24 залишилось',
      occasion: 'Власний день народження & День програміста (1024)',
      days: 'дн',
      hours: 'год',
      minutes: 'хв',
      seconds: 'сек',
      dismiss: 'Натисніть будь-де, щоб продовжити',
    },
    metaDescription: 'Особистий сайт kenaut',
  },
  ko: {
    nav: { home: '홈', projects: '프로젝트', blog: '블로그' },
    sidebar: {
      avatarAlt: '아바타',
      orgsTitle: '조직',
      birthday: '생일',
      gender: '성별',
      mbti: 'MBTI',
      role: '역할',
      birthdayValue: '10월 29일',
      roleValue: '개인 개발자',
    },
    home: {
      tagline: 'AI만 쓸 줄 아는(농담) 프론트엔드와 백엔드를 모두 다루는 자유 개발자',
      activityTitle: '최근 활동',
      activitySub: 'public build log',
      projectsTitle: '대표작',
      projectsSub: 'Project cards that behave like work, not stats.',
      contactTitle: '연락처',
      contactSub: 'Reach out, or follow along.',
    },
    blog: { title: '블로그', sub: 'Notes and thoughts.' },
    projects: { title: '대표작', sub: 'All projects, work in progress.' },
    post: { notFound: '게시글을 찾을 수 없습니다' },
    countdown1024: {
      title: '10.24 까지',
      occasion: '스스로 정한 생일 & 1024 프로그래머의 날',
      days: '일',
      hours: '시',
      minutes: '분',
      seconds: '초',
      dismiss: '아무 곳이나 클릭해 계속하기',
    },
    metaDescription: 'kenaut의 개인 웹사이트',
  },
}

const saved = localStorage.getItem('locale')
const currentLocale = ref(saved && messages[saved] ? saved : 'zh_CN')

export const locale = computed(() => currentLocale.value)

function applyLocale(code) {
  document.documentElement.lang = code
  const meta = document.querySelector('meta[name="description"]')
  if (meta) meta.setAttribute('content', messages[code].metaDescription)
}

export function setLocale(code) {
  if (messages[code]) {
    currentLocale.value = code
    localStorage.setItem('locale', code)
    applyLocale(code)
  }
}

applyLocale(currentLocale.value)

export function t(key) {
  return key.split('.').reduce((obj, k) => (obj ? obj[k] : undefined), messages[currentLocale.value])
}
