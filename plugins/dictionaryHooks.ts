import {useHooks} from "~/composable/useHooks";
import type {DictionariesDto, DictionaryDto} from "~/DTO/dictionary.dto";
import APICONSTANTV1 from "~/constant/api.constant";

export default defineNuxtPlugin(() => {
    const hooks = useHooks();
    const GetDictionary = async(options: {
        group: string,
        search?: string,
    }) =>{
        try {
            const response = await hooks.GET(APICONSTANTV1.DICTIONARY, {
                group: options.group,
                search: options.search
            });

            const data: DictionariesDto[] = response.data.map((item: any) => {
                return {
                    id: item.id,
                    title: item.title
                }
            });

            return data;
        }catch (error) {
            throw error;
        }
    }


    const GetDetailDictionary = async(id: number) => {
        try {
            const response = await hooks.GET(`${APICONSTANTV1.DICTIONARY_DETAIL.replace(':id', id.toString())}`);
            if(!response.data) {
                hooks.NOTFOUNDDATA();
            }
            const data: DictionaryDto = {
                id: response.data.id,
                title: response.data.title,
                description: response.data.description
            }
            return data;
        }catch (error) {
            throw createError({
                statusCode: 500,
            })
        }
    }

    const GetRandomDictionary = async(total: number = 5) => {
        try {
            const response = await hooks.GET(APICONSTANTV1.DICTIONARY_RANDOM, {
                total
            });
            const data: DictionariesDto[] = response.data.map((item: any) => {
                return {
                    id: item.id,
                    title: item.title
                }
            });

            return data;
        }catch (error) {
            throw createError({
                statusCode: 500,
            });
        }
    }
    return {
        provide: {
            GetDictionary,
            GetRandomDictionary,
            GetDetailDictionary
        }
    }
});