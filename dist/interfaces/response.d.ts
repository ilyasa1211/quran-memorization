declare namespace App.Interface {
    interface ResponseVerseses {
        verses: {
            id: number;
            verse_key: string;
            text_indopak: string;
        }[];
    }
    interface ResponseChapters {
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
                pages: [number, number];
                translated_name: {
                    language_name: string;
                    name: string;
                };
            }
        ];
    }
}
//# sourceMappingURL=response.d.ts.map