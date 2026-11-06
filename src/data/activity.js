import { computed } from 'vue'
import { locale } from '../i18n'

const activityList = [
  {
    repo: 'kenaut/BNMB-web',
    text: {
      zh_CN: '创建 BNMB-web：变にまび官方网站',
      zh_TW: '建立 BNMB-web：變にまび官方網站',
      en: 'Created BNMB-web: official BNMB website',
      ja: 'BNMB-web を作成：変にまび公式サイト',
      es: 'Creó BNMB-web: sitio web oficial de BNMB',
      uk: 'Створив BNMB-web: офіційний сайт BNMB',
      ko: 'BNMB-web 생성: BNMB 공식 웹사이트',
    },
  },
  {
    repo: 'kenaut/BNMB-android',
    text: {
      zh_CN: '发布 BNMB-android 2.0：变にまび安卓版',
      zh_TW: '發布 BNMB-android 2.0：變にまび安卓版',
      en: 'Released BNMB-android 2.0: BNMB for Android',
      ja: 'BNMB-android 2.0 をリリース：変にまび Android 版',
      es: 'Lanzó BNMB-android 2.0: BNMB para Android',
      uk: 'Випустив BNMB-android 2.0: BNMB для Android',
      ko: 'BNMB-android 2.0 출시: BNMB 안드로이드 버전',
    },
  },
  {
    repo: 'openwelabs/weci-web',
    text: {
      zh_CN: '创建 weci-web：weci 的 Web 界面',
      zh_TW: '建立 weci-web：weci 的 Web 介面',
      en: "Created weci-web: weci's web UI",
      ja: 'weci-web を作成：weci の Web UI',
      es: 'Creó weci-web: interfaz web de weci',
      uk: 'Створив weci-web: вебінтерфейс weci',
      ko: 'weci-web 생성: weci의 웹 UI',
    },
  },
  {
    repo: 'kenaut/kenaut.github.io',
    text: {
      zh_CN: '更新 kenaut.github.io 个人站点',
      zh_TW: '更新 kenaut.github.io 個人站點',
      en: 'Updated kenaut.github.io personal site',
      ja: 'kenaut.github.io 個人サイトを更新',
      es: 'Actualizó el sitio personal kenaut.github.io',
      uk: 'Оновив особистий сайт kenaut.github.io',
      ko: 'kenaut.github.io 개인 사이트 업데이트',
    },
  },
  {
    repo: 'openwelabs/weci',
    text: {
      zh_CN: '创建 weci：全能 AI 智能体',
      zh_TW: '建立 weci：全能 AI 代理',
      en: 'Created weci: an all-powerful AI agent',
      ja: 'weci を作成：オールインワン AI エージェント',
      es: 'Creó weci: un agente de IA todopoderoso',
      uk: 'Створив weci: всесильний ШІ-агент',
      ko: 'weci 생성: 만능 AI 에이전트',
    },
  },
  {
    repo: 'kenaut/BNMB',
    text: {
      zh_CN: '创建 BNMB：日语动词变形学习工具',
      zh_TW: '建立 BNMB：日語動詞變形學習工具',
      en: 'Created BNMB: Japanese verb conjugation learning tool',
      ja: 'BNMB を作成：日本語動詞活用学習ツール',
      es: 'Creó BNMB: herramienta para aprender conjugaciones japonesas',
      uk: 'Створив BNMB: інструмент для вивчення відмінювання японських дієслів',
      ko: 'BNMB 생성: 일본어 동사 활용 학습 도구',
    },
  },
  {
    repo: 'kenaut/yaywiki',
    text: {
      zh_CN: '更新 yaywiki 站点',
      zh_TW: '更新 yaywiki 站點',
      en: 'Updated yaywiki site',
      ja: 'yaywiki サイトを更新',
      es: 'Actualizó el sitio yaywiki',
      uk: 'Оновлено сайт yaywiki',
      ko: 'yaywiki 사이트 업데이트',
    },
  },
]

export const activity = computed(() =>
  activityList.map((a) => ({ repo: a.repo, text: a.text[locale.value] }))
)
