export interface Book {
	title: string;
	author: string;
	// Any image URL works. For a quick source, Open Library covers by ISBN:
	// https://covers.openlibrary.org/b/isbn/{ISBN}-L.jpg
	cover: string;
}

// Add your books here — send me titles/authors and I can look up covers,
// or drop your own image files in /public/books/ and reference them
// as "/books/filename.jpg".
export const books: Book[] = [];
