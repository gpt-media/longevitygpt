// site.ts — brand identity + multilingual UI chrome for this site.
//
// Sibling of TheWellnessGPT on the same engine. editions.ts (the i18n structure)
// is identical across the media network; only this file + the CSS accent differ.

import type { UiKey } from './editions';

export const SITE = {
  name: 'TheLongevityGPT',
  domain: 'https://www.thelongevitygpt.com',
  /** logo renders as: The<span class=accent>Longevity</span>GPT */
  logo: { pre: 'The', accent: 'Longevity', post: 'GPT' },
  defaultAuthor: 'TheLongevityGPT Editors',
  /** Organization JSON-LD description (publisher entity for AI engines). */
  orgDescription: 'Evidence-led longevity and healthspan answers for a global audience.',
  /** appended to the homepage <title>. */
  titleTagline: 'What actually helps you age well',
};

/** Per-language homepage hero copy — evidence-led, hype-averse. */
export const HERO: Record<UiKey, { kicker: string; tagline: string; intro: string }> = {
  en: {
    kicker: 'Longevity, decoded',
    tagline: 'What actually helps you age well.',
    intro:
      'Evidence-led answers on living longer and healthier: supplements, training, sleep, and metabolic health, each weighed by the strength of the human evidence. We separate what works from what is just hype.',
  },
  ms: {
    kicker: 'Umur panjang, dirungkai',
    tagline: 'Apa yang benar-benar membantu anda menua dengan sihat.',
    intro:
      'Jawapan berasaskan bukti tentang hidup lebih lama dan lebih sihat: suplemen, senaman, tidur, dan kesihatan metabolik, setiap satu ditimbang mengikut kekuatan bukti pada manusia. Kami membezakan apa yang benar-benar berkesan daripada sekadar hype.',
  },
  'zh-Hans': {
    kicker: '长寿，讲明白',
    tagline: '真正帮助你健康老去的方法。',
    intro:
      '以证据为本的长寿与健康寿命解答：补充剂、运动、睡眠与代谢健康，每一项都按人体证据的强弱来权衡。我们把真正有效的，和只是炒作的，分得清清楚楚。',
  },
  'zh-Hant': {
    kicker: '長壽，講明白',
    tagline: '真正幫助你健康老去的方法。',
    intro:
      '以證據為本的長壽與健康壽命解答：補充品、運動、睡眠與代謝健康，每一項都依人體證據的強弱來權衡。我們把真正有效的，和只是炒作的，分得清清楚楚。',
  },
};

/** Mechanical UI chrome (nav, footer, labels). Standard terms, in-language per "one language per page". */
export const UI: Record<UiKey, Record<string, string>> = {
  en: {
    navHome: 'Home', navAbout: 'About', featured: 'Featured',
    faqHeading: 'Frequently asked questions', metaBy: 'By', metaPublished: 'Published', metaUpdated: 'Updated',
    pickerLabel: 'Region & language', footerEditorial: 'Editorial Standards', footerDisclaimer: 'Medical Disclaimer',
    rights: 'All rights reserved.', disclaimerLine: 'Educational content, not medical advice.',
    emptySoon: 'First answers publishing soon.', dateLocale: 'en-GB',
  },
  ms: {
    navHome: 'Laman Utama', navAbout: 'Tentang', featured: 'Pilihan',
    faqHeading: 'Soalan lazim', metaBy: 'Oleh', metaPublished: 'Diterbitkan', metaUpdated: 'Dikemas kini',
    pickerLabel: 'Wilayah & bahasa', footerEditorial: 'Piawaian Editorial', footerDisclaimer: 'Penafian Perubatan',
    rights: 'Hak cipta terpelihara.', disclaimerLine: 'Kandungan pendidikan, bukan nasihat perubatan.',
    emptySoon: 'Jawapan pertama akan diterbitkan tidak lama lagi.', dateLocale: 'ms-MY',
  },
  'zh-Hans': {
    navHome: '首页', navAbout: '关于', featured: '精选',
    faqHeading: '常见问题', metaBy: '作者', metaPublished: '发布于', metaUpdated: '更新于',
    pickerLabel: '地区与语言', footerEditorial: '编辑标准', footerDisclaimer: '医疗免责声明',
    rights: '保留所有权利。', disclaimerLine: '教育内容，并非医疗建议。',
    emptySoon: '首批解答即将发布。', dateLocale: 'zh-Hans',
  },
  'zh-Hant': {
    navHome: '首頁', navAbout: '關於', featured: '精選',
    faqHeading: '常見問題', metaBy: '作者', metaPublished: '發佈於', metaUpdated: '更新於',
    pickerLabel: '地區與語言', footerEditorial: '編輯標準', footerDisclaimer: '醫療免責聲明',
    rights: '保留所有權利。', disclaimerLine: '教育內容，並非醫療建議。',
    emptySoon: '首批解答即將發佈。', dateLocale: 'zh-Hant',
  },
};

/** "Prices in RM" style note per language. */
export function pricesNote(ui: UiKey, currency: string): string {
  switch (ui) {
    case 'ms': return `Harga dalam ${currency}`;
    case 'zh-Hans': return `价格以 ${currency} 计`;
    case 'zh-Hant': return `價格以 ${currency} 計`;
    default: return `Prices in ${currency}`;
  }
}
