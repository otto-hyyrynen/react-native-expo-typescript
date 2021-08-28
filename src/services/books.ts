// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface ISBN {
    isbn10: string;
    isbn13: string;
}

export interface Rank {
    primary_isbn10: string;
    primary_isbn13: string;
    rank: number;
    list_name: string;
    display_name: string;
    published_date: string;
    bestsellers_date: string;
    weeks_on_list: number;
    rank_last_week: number;
    asterisk: number;
    dagger: number;
}

export interface Review {
    book_review_link: string;
    first_chapter_link: string;
    sunday_review_link: string;
    article_chapter_link: string;
}

export interface Book {
    title: string;
    description: string;
    contributor: string;
    author: string;
    contributor_note: string;
    price: string;
    age_group: string;
    publisher: string;
    isbns: ISBN[];
    ranks_history: Rank[],
    reviews: Review[]
}

// Define a service using a base URL and expected endpoints
export const booksApi = createApi({
  reducerPath: 'booksApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.nytimes.com/svc/books/v3/lists/' }),
  endpoints: (builder) => ({
    getBookByName: builder.query<Book, string>({
      query: (name) => `book/${name}`,
    }),
    getBestSellers: builder.query<Book, string>({
        query: () => `best-sellers/history.json?api-key=PWSClS1ieNnv0wSOG3x49gKIk5aXRWNe`
    })
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetBookByNameQuery, useGetBestSellersQuery } = booksApi