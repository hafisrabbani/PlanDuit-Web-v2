type BlogDTO = {
    id: number
    title: string
    thumbnail: string
    slug: string
    created_at: string
    short_description: string
    category_name: string
}

type BlogDetailDTO = {
    id: number,
    title: string,
    slug: string,
    description: string,
    thumbnail: string,
    created_at: string,
    updated_at: string,
    status: string,
    category_name: string,
}


export type { BlogDTO, BlogDetailDTO }