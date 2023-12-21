namespace App.Interface {
  export interface ResponseVerseses {
    verses: {
      id: number;
      verse_key: string;
      text_indopak: string;
    }[];
  }

  export interface ResponseChapters {
    chapters: [
      {
        id: number;
        revelation_place: string;
        revelation_order: number;
        bismillah_pre: false;
        name_simple: string;
        name_complex: string;
        name_arabic: string;
        verses_count: number;
        pages: number[];
        translated_name: {
          language_name: string;
          name: string;
        };
      }
    ];
  }
  export interface ResponseChapter {
    chapter: {
      id: number;
      revelation_place: string;
      revelation_order: number;
      bismillah_pre: boolean;
      name_simple: string;
      name_complex: string;
      name_arabic: string;
      verses_count: number;
      pages: number[];
      translated_name: {
        language_name: string;
        name: string;
      };
    };
  }
}
