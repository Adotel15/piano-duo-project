import type { StrapiArray, StrapiObject } from '../types.js';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const formatStrapiArray = (strapiResponse: StrapiArray<Record<string, any>>, collection: string) => {
    if (collection === 'reviews') {
        return strapiResponse.map(item => ({
            id: item.id,
            title: item.attributes.title,
            content: item.attributes.content,
            reviewer: item.attributes.reviewer,
            publisher_date: item.attributes.publisher_date,
            image: item.attributes.images?.data ? item.attributes.images?.data[0]?.attributes.url : null,
        }));
    } else if (collection === 'gallery') {
        return {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            photos: (strapiResponse as any).attributes.photos?.data.map((photo:Record<string, any>) => photo.attributes.url),
        };
    } else if (collection === 'cds') {
        return strapiResponse.map(item => ({
            id: item.id,
            title: item.attributes.title,
            composer: item.attributes.composer,
            frontImage: item.attributes.front?.data ? item.attributes.front?.data?.attributes.url : null,
            backImage: item.attributes.back?.data ? item.attributes.back?.data?.attributes.url : null,
            subtitle: item.attributes.subtitle,
            pieces: Array.isArray(item.attributes.pieces?.data)
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
                ? item.attributes.pieces.data.map((piece: Record<string, any>) => ({
                    id: piece.id,
                    name: piece.title,
                    sections: piece?.sections ? piece.sections : null,
                    status: piece?.status? piece.status : null,
                }))
                : item.attributes.pieces.data || null,
        }));
    } else if (collection === 'audios') {
        return strapiResponse.map(item => ({
            id: item.id,
            number: item.attributes.number ? item.attributes.number : null,
            name: item.attributes.name ? item.attributes.name : null,
            author: item.attributes.author ? item.attributes.author : null,
            duration: item.attributes.duration ? item.attributes.duration : null,
            audio: item.attributes.audio.data ? item.attributes.audio.data.attributes.url : null,
        }));
    } else if (collection === 'videos') {
        return strapiResponse.map(item => ({
            id: item.id,
            title: item.attributes.title,
            link: item.attributes.link,
        }));
    } else if (collection === 'repertoires'){
        return strapiResponse.map(item => ({
            id: item.id,
            title: item.attributes.title,
            piece_author: Array.isArray(item.attributes.piece_author?.data)
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
                ? item.attributes.piece_author.data.map((piece_author:any) => ({
                    title: piece_author.title,
                    author: piece_author.author,
                }))
                : item.attributes.piece_author.data || null,

        }));
    } else {
        return [];
    };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const formatStrapiObject = (strapiResponse: StrapiObject<Record<string, any>>, /*collection:string*/) => {
    return {
        id: strapiResponse.id,
        title: strapiResponse.attributes.title,
        content: strapiResponse.attributes.content,
        reviewer: strapiResponse.attributes.reviewer,
        publisher_date: strapiResponse.attributes.publisher_date,
        image: strapiResponse.attributes.images?.data ? strapiResponse.attributes.images?.data[0]?.attributes.url : null,
    };
};
