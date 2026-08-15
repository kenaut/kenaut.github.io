import { computed } from 'vue'
import { locale, t } from '../i18n'

const nicknames = {
  zh_CN: '星野砚秋',
  zh_TW: '星野硯秋',
  en: 'Keyoweb',
  ja: '星野けん',
  es: 'Keyoweb',
  uk: 'Keyoweb',
  ko: 'Keyoweb',
}

const altNames = {
  zh_CN: 'Keyoweb / 星野けん',
  zh_TW: 'Keyoweb / 星野けん',
  en: '星野砚秋 / 星野けん',
  ja: 'Keyoweb / 星野砚秋',
  es: '星野砚秋 / 星野けん',
  uk: '星野砚秋 / 星野けん',
  ko: '星野砚秋 / 星野けん',
}

const orgs = {
  zh_CN: ['不刘名工作室室长', '豆芽人联盟五常成员', '豆芽人联盟定中区区长'],
  zh_TW: ['不劉名工作室室長', '豆芽人聯盟五常成員', '豆芽人聯盟定中區區長'],
  en: [
    'Head of the buliuming studio',
    'Member of the Yay Alliance Five Powers',
    'District head of the Yay Alliance Dingzhong District',
  ],
  ja: ['buliuming スタジオ室長', 'ロヤじけっしゃ五常メンバー', 'ロヤじけっしゃ定中区区長'],
  es: [
    'Jefe del estudio buliuming',
    'Member of the Yay Alliance Five Powers',
    'District head of the Yay Alliance Dingzhong District',
  ],
  uk: [
    'Керівник студії buliuming',
    'Member of the Yay Alliance Five Powers',
    'District head of the Yay Alliance Dingzhong District',
  ],
  ko: [
    'buliuming 스튜디오 대표',
    'Member of the Yay Alliance Five Powers',
    'District head of the Yay Alliance Dingzhong District',
  ],
}

export const profile = computed(() => ({
  avatar: '/avatar.jpg',
  name: 'kenaut',
  nickname: nicknames[locale.value],
  altName: altNames[locale.value],
  info: [
    { label: t('sidebar.birthday'), value: t('sidebar.birthdayValue') },
    { label: t('sidebar.gender'), value: 'MTF' },
    { label: t('sidebar.mbti'), value: 'ENFP' },
    { label: t('sidebar.role'), value: t('sidebar.roleValue') },
  ],
  orgs: orgs[locale.value],
}))
