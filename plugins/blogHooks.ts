import {useHooks} from "~/composable/useHooks";
import type {BlogDTO} from "~/DTO/BlogDTO";
import APICONSTANTV1 from "~/constant/api.constant";
export default defineNuxtPlugin(() => {
    const hooks = useHooks();
    const PATHBLOG = APICONSTANTV1.BLOG;
    const GetArticles = async (search?: string, limit = 10) => {
        try {
            const response = await hooks.GET(`${PATHBLOG}`, { search, limit });
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

    return {
        provide: {
            GetArticles
        }
    }
});