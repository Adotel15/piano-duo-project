import type { StrapiArray, StrapiObject } from '../../types/strapi';

// TODO: Do this more generic
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const formatStrapiArray = (strapiResponse: StrapiArray<Record<string, any>>) => {
    return strapiResponse.map(item => {
        return {
            id: item.id,
            title: item.attributes.title,
            content: item.attributes.content,
            reviewer: item.attributes.reviewer,
            publisher_date: item.attributes.publisher_date,
            image: item.attributes.images?.data ? item.attributes.images?.data[0]?.attributes.url : null,
        };
    }
    );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const formatStrapiObject = (strapiResponse: StrapiObject<Record<string, any>>) => {
    return {
        id: strapiResponse.id,
        title: strapiResponse.attributes.title,
        content: strapiResponse.attributes.content,
        reviewer: strapiResponse.attributes.reviewer,
        publisher_date: strapiResponse.attributes.publisher_date,
        image: strapiResponse.attributes.images?.data ? strapiResponse.attributes.images?.data[0]?.attributes.url : null,
    };
};
