import type { StrapiArray, StrapiObject } from '../../types/strapi';

// TODO: Do this more generic
export const formatStrapiArray = (strapiResponse: StrapiArray<Record<string, unknown>>) => {
    return strapiResponse.map(item => ({
        id: item.id,
        title: item.attributes.title,
        content: item.attributes.content,
        reviewer: item.attributes.reviewer,
        publisher_date: item.attributes.publisher_date,
    }));
};

export const formatStrapiObject = (strapiResponse: StrapiObject<Record<string, unknown>>) => {
    return {
        id: strapiResponse.id,
        title: strapiResponse.attributes.title,
        content: strapiResponse.attributes.content,
        reviewer: strapiResponse.attributes.reviewer,
        publisher_date: strapiResponse.attributes.publisher_date,
    };
};
