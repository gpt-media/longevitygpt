// site.ts — brand identity + multilingual UI chrome for this site.
//
// Sibling of TheWellnessGPT on the same engine. editions.ts (the i18n structure)
// is identical across the media network; only this file + the CSS accent differ.

import type { UiKey } from './editions';

export const SITE = {
  name: 'TheLongevityGPT',
  domain: 'https://thelongevitygpt.com',
  /** logo renders as: The<span class=accent>Longevity</span>GPT */
  logo: { pre: 'The', accent: 'Longevity', post: 'GPT' },
  /** Byline + Article-schema author. The editorial team is a real, honest entity (not a
   *  fabricated person); links to /about/ where the team + method are described (E-E-A-T). */
  author: { name: 'TheLongevityGPT Editorial Team', url: 'https://thelongevitygpt.com/about/' },
  /** back-compat: the content-collection `author` default. */
  defaultAuthor: 'TheLongevityGPT Editorial Team',
  /** Named credentialed reviewer for these YMYL health pages. NULL until a real reviewer is
   *  engaged — when set to {name, credential, url} it lights up `reviewedBy` schema + a visible
   *  "Medically reviewed by …" byline everywhere. NEVER fabricate a credential here. */
  reviewer: null as null | { name: string; credential: string; url?: string },
  /** Organization JSON-LD description (publisher entity for AI engines). */
  orgDescription: 'Evidence-led longevity and healthspan answers for a global audience.',
  /** Organization E-E-A-T signals. */
  foundingYear: 2026,
  knowsAbout: ['longevity', 'healthy aging', 'NAD+ and NMN', 'evidence-based supplements', 'metabolic health', 'sleep and exercise'],
  /** appended to the homepage <title>. */
  titleTagline: 'What actually helps you age well',
  /** Site-wide default OG image (absolute path under the domain, e.g. '/og-default.png').
   *  '' = none emitted. Per-article `image` frontmatter overrides. Branded per-article OG
   *  generation is the staged enhancement (see README / architecture doc §10). */
  ogImage: '',
  /** IndexNow key (public by design; also served at /<key>.txt). Lets the deploy ping
   *  Bing/IndexNow so Bing-backed engines (ChatGPT search, Copilot) re-crawl fast. */
  indexNowKey: 'ccb9437d0b15bcef184fabd85c60d7d6',
  /** Newsletter capture. Disabled until the founder picks an ESP/endpoint — PII + the
   *  independent-publication footprint are a founder call. When enabled the form renders
   *  site-wide and POSTs to `action`. See /privacy/. */
  newsletter: { enabled: false, action: '' },
  /** Cloudflare Web Analytics beacon token (privacy-first, cookieless; separate property per site to preserve independence) */
  cfBeaconToken: '136eb4d483da4f30b4a8f021c3264e2f',
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
    navHome: 'Home', navAbout: 'About', featured: 'Featured', related: 'Related',
    faqHeading: 'Frequently asked questions', metaBy: 'By', metaPublished: 'Published', metaUpdated: 'Updated',
    metaReviewed: 'Reviewed by', quickAnswer: 'Quick answer',
    pickerLabel: 'Region & language', footerReports: 'Reports', footerEditorial: 'Editorial Standards', footerHowWeReview: 'How We Review', footerDisclaimer: 'Medical Disclaimer',
    footerPrivacy: 'Privacy',
    rights: 'All rights reserved.', disclaimerLine: 'Educational content, not medical advice.',
    emptySoon: 'First answers publishing soon.', dateLocale: 'en-GB',
    nlHeading: 'Get the evidence, not the hype.', nlSub: 'Occasional, plain-English longevity answers in your inbox. No spam.',
    nlPlaceholder: 'Your email', nlButton: 'Subscribe', nlPrivacy: 'We respect your inbox. Unsubscribe anytime. See our Privacy page.',
  },
  ms: {
    navHome: 'Laman Utama', navAbout: 'Tentang', featured: 'Pilihan', related: 'Berkaitan',
    faqHeading: 'Soalan lazim', metaBy: 'Oleh', metaPublished: 'Diterbitkan', metaUpdated: 'Dikemas kini',
    metaReviewed: 'Disemak oleh', quickAnswer: 'Jawapan ringkas',
    pickerLabel: 'Wilayah & bahasa', footerReports: 'Laporan', footerEditorial: 'Piawaian Editorial', footerHowWeReview: 'Cara Kami Menyemak', footerDisclaimer: 'Penafian Perubatan',
    footerPrivacy: 'Privasi',
    rights: 'Hak cipta terpelihara.', disclaimerLine: 'Kandungan pendidikan, bukan nasihat perubatan.',
    emptySoon: 'Jawapan pertama akan diterbitkan tidak lama lagi.', dateLocale: 'ms-MY',
    nlHeading: 'Dapatkan bukti, bukan hype.', nlSub: 'Jawapan umur panjang ringkas sekali-sekala ke peti masuk anda. Tiada spam.',
    nlPlaceholder: 'E-mel anda', nlButton: 'Langgan', nlPrivacy: 'Kami hormati peti masuk anda. Berhenti langgan bila-bila masa. Lihat halaman Privasi kami.',
  },
  'zh-Hans': {
    navHome: '首页', navAbout: '关于', featured: '精选', related: '相关阅读',
    faqHeading: '常见问题', metaBy: '作者', metaPublished: '发布于', metaUpdated: '更新于',
    metaReviewed: '审核', quickAnswer: '快速解答',
    pickerLabel: '地区与语言', footerReports: '研究报告', footerEditorial: '编辑标准', footerHowWeReview: '我们如何审核', footerDisclaimer: '医疗免责声明',
    footerPrivacy: '隐私',
    rights: '保留所有权利。', disclaimerLine: '教育内容，并非医疗建议。',
    emptySoon: '首批解答即将发布。', dateLocale: 'zh-Hans',
    nlHeading: '只给证据，不夸大。', nlSub: '偶尔把通俗易懂的长寿解答发到你的邮箱。绝不发垃圾邮件。',
    nlPlaceholder: '你的邮箱', nlButton: '订阅', nlPrivacy: '我们尊重你的邮箱，可随时取消订阅。详见隐私页面。',
  },
  'zh-Hant': {
    navHome: '首頁', navAbout: '關於', featured: '精選', related: '相關閱讀',
    faqHeading: '常見問題', metaBy: '作者', metaPublished: '發佈於', metaUpdated: '更新於',
    metaReviewed: '審核', quickAnswer: '快速解答',
    pickerLabel: '地區與語言', footerReports: '研究報告', footerEditorial: '編輯標準', footerHowWeReview: '我們如何審核', footerDisclaimer: '醫療免責聲明',
    footerPrivacy: '隱私',
    rights: '保留所有權利。', disclaimerLine: '教育內容，並非醫療建議。',
    emptySoon: '首批解答即將發佈。', dateLocale: 'zh-Hant',
    nlHeading: '只給證據，不誇大。', nlSub: '偶爾把通俗易懂的長壽解答發到你的信箱。絕不發垃圾郵件。',
    nlPlaceholder: '你的電郵', nlButton: '訂閱', nlPrivacy: '我們尊重你的信箱，可隨時取消訂閱。詳見隱私頁面。',
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
