import { computed } from 'vue'
import { locale } from '../i18n'

const activityList = [
  {
    repo: 'openwelabs/weqi',
    text: {
      zh_CN: '创建 weqi：AI 国际象棋工具',
      zh_TW: '建立 weqi：AI 國際象棋工具',
      en: 'Created weqi: AI chess tool',
      ja: 'weqi を作成：AI チェスツール',
      es: 'Creó weqi: herramienta de ajedrez con IA',
      uk: 'Створив weqi: інструмент для шахів зі штучним інтелектом',
      ko: 'weqi 생성: AI 체스 도구',
    },
  },
  {
    repo: 'kenaut/qrdock',
    text: {
      zh_CN: '创建 qrdock：轻量级系统操作启动器',
      zh_TW: '建立 qrdock：輕量級系統操作啟動器',
      en: 'Created qrdock: lightweight system action launcher',
      ja: 'qrdock を作成：軽量システム操作ランチャー',
      es: 'Creó qrdock: lanzador ligero de acciones del sistema',
      uk: 'Створив qrdock: легкий лаунчер системних дій',
      ko: 'qrdock 생성: 경량 시스템 동작 런처',
    },
  },
  {
    repo: 'kenaut/mirrors',
    text: {
      zh_CN: '推送 mirrors 仓库更新',
      zh_TW: '推送 mirrors 倉庫更新',
      en: 'Pushed mirrors repo update',
      ja: 'mirrors リポジトリの更新をプッシュ',
      es: 'Envió actualización del repositorio mirrors',
      uk: 'Запушено оновлення репозиторію mirrors',
      ko: 'mirrors 저장소 업데이트 푸시',
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
  {
    repo: 'kenaut/webu2.0_cn-tokenizer1',
    text: {
      zh_CN: '公开 webu2.0_cn-tokenizer1',
      zh_TW: '公開 webu2.0_cn-tokenizer1',
      en: 'Made webu2.0_cn-tokenizer1 public',
      ja: 'webu2.0_cn-tokenizer1 を公開',
      es: 'Hizo público webu2.0_cn-tokenizer1',
      uk: 'Зробив публічним webu2.0_cn-tokenizer1',
      ko: 'webu2.0_cn-tokenizer1 공개',
    },
  },
  {
    repo: 'Limou233/aptman',
    text: {
      zh_CN: '为 aptman 提交 PR',
      zh_TW: '為 aptman 提交 PR',
      en: 'Submitted PR to aptman',
      ja: 'aptman に PR を提出',
      es: 'Envió PR a aptman',
      uk: 'Надіслав PR до aptman',
      ko: 'aptman에 PR 제출',
    },
  },
  {
    repo: 'kenaut/kenaut.github.io',
    text: {
      zh_CN: '创建 kenaut.github.io 站点',
      zh_TW: '建立 kenaut.github.io 站點',
      en: 'Created kenaut.github.io site',
      ja: 'kenaut.github.io サイトを作成',
      es: 'Creó el sitio kenaut.github.io',
      uk: 'Створив сайт kenaut.github.io',
      ko: 'kenaut.github.io 사이트 생성',
    },
  },
]

export const activity = computed(() =>
  activityList.map((a) => ({ repo: a.repo, text: a.text[locale.value] }))
)
