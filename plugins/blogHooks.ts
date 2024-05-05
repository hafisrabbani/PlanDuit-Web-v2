import {useHooks} from "~/composable/useHooks";
import type {BlogsDto, BlogCategoryDto, BlogDto} from "~/DTO/blog.dto";
import APICONSTANTV1 from "~/constant/api.constant";

export default defineNuxtPlugin(() => {
    const hooks = useHooks();
    const GetArticles = async (options: {
        search?: string,
        limit?: number,
        category_id?: number | null
    }) =>{
        try {
            const response = await hooks.GET(`${APICONSTANTV1.BLOG}`, {
                search: options.search,
                limit: options.limit,
                category: options.category_id
            });
            const data: BlogsDto[] = response.data.map((item: any) => {
                return {
                    id: item.id,
                    title: item.title,
                    thumbnail: item.thumbnail,
                    slug: item.slug,
                    created_at: item.created_at,
                    short_description: item.short_description,
                    category_name: item.category_name
                }
            })

            return data;
        } catch (error) {
            throw error;
        }
    }

    const GetDetailArticle = async (slug: string) => {
        try {
            const response = await hooks.GET(`${APICONSTANTV1.BLOG_DETAIL.replace(':id', slug)}`);
            const data: BlogDto = {
                id: response.data.id,
                title: response.data.title,
                slug: response.data.slug,
                description: response.data.description,
                thumbnail: response.data.thumbnail,
                created_at: response.data.created_at,
                updated_at: response.data.updated_at,
                status: response.data.status,
                category_name: response.data.category_name
            }
            return data;
        } catch (error) {
            throw error;
        }
    }


    const GetCategoryBlog = async () => {
        try {
            const response = await hooks.GET(APICONSTANTV1.BLOG_CATEGORY);
            const data: BlogCategoryDto[] = response.data.map((item: any) => {
                return {
                    id: item.id,
                    name: item.title
                }
            })

            return data;
        } catch (error) {
            throw error;
        }
    }

    const GetNewestArticle = async () => {
        try {
            const response = await hooks.GET(APICONSTANTV1.BLOG);
            const data: BlogsDto = response.data[0];
            return data;
        } catch (error) {
            throw error;
        }
    }

    return {
        provide: {
            GetArticles,
            GetDetailArticle,
            GetCategoryBlog,
            GetNewestArticle
        }
    }
});