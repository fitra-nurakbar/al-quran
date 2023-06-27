export type Surah = {
  number: number;
  numberOfVerses: number;
  name: {
    short: string;
    long: string;
    transliteration: {
      en: string;
      id: string;
    };
    translation: {
      en: string;
      id: string;
    };
  };
  verses: [
    {
      number: {
        inSurah: number;
      };
      text: {
        arab: string;
      };
    }
  ];
  revelation: {
    arab: string;
    en: string;
    id: string;
  };
};
