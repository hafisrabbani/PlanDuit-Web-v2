type BlogsDto = {
    id: number
    title: string
    thumbnail: string
    slug: string
    created_at: string
    short_description: string
    category_name: string
}
type BlogDto = {
    id: number
    title: string
    slug: string
    description: string
    thumbnail: string
    created_at: string
    updated_at: string
    status: string
    category_name: string
}

type BlogCategoryDto = {
    id: number | null
    name: string
}


export type { BlogsDto, BlogDto, BlogCategoryDto }