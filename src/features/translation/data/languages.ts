import type { Language } from '@/features/translation/types'

export const languages: Language[] = [
  {
    language: 'English',
    translations: [
      {
        short_name: 'YLT',
        full_name: "Young's Literal Translation (1898)",
        updated: 1626349711821,
      },
      {
        short_name: 'KJV',
        full_name:
          "King James Version 1769 with Apocrypha and Strong's Numbers",
        updated: 1750968212682,
      },
      {
        short_name: 'NKJV',
        full_name: 'New King James Version, 1982',
        updated: 1635188106109,
      },
    ],
  },
  {
    language: 'Latin / Italian',
    translations: [
      {
        short_name: 'VULG',
        full_name: 'Biblia Sacra juxta Vulgatam Clementinam',
        updated: 1591185595149,
      },
      {
        short_name: 'NR06',
        full_name: 'Nuova Riveduta, 2006',
        updated: 1591185595149,
      },
    ],
  },
]
