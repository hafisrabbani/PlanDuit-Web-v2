import {useHooks} from "~/composable/useHooks";
import type {BlogDTO, BlogDetailDTO} from "~/DTO/BlogDTO";
import APICONSTANTV1 from "~/constant/api.constant";

export default defineNuxtPlugin(() => {
    const hooks = useHooks();
    const PATHBLOG = APICONSTANTV1.BLOG;
    const PATHDETAILBLOG: string = APICONSTANTV1.BLOG_DETAIL;
    const GetArticles = async (search?: string, limit = 10) => {
        try {
            const response = await hooks.GET(`${PATHBLOG}`, {search, limit});
            const data: BlogDTO[] = response.data.map((item: any) => {
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


    const GetDetailArticle = async (slug: String) => {
        try {
            // @ts-ignore
            const response = await hooks.GET(PATHDETAILBLOG.replace(':id', slug));

            const data: BlogDetailDTO = {
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

    return {
        provide: {
            GetArticles,
            GetDetailArticle
        }
    }
});