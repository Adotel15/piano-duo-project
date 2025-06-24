import type { GenericObject } from '../../types/generic.js';
import type { StrapiArray, StrapiObject } from '../types.js';

interface ReviewFormatted {
  id: number;
  title: string;
  content: string;
  reviewer: string;
  publisher_date: string;
  image: string | null;
}

interface GalleryFormatted {
  photos: string[];
}

interface CDFormatted {
  id: number;
  title: string;
  composer: string;
  frontImage: string | null;
  backImage: string | null;
  subtitle: string;
  pieces: {
    id: number;
    name: string;
    sections: GenericObject | null;
    status: string | null;
  }[] | null;
  orderNumber: string;
}

interface AudioFormatted {
  id: number;
  number: number | null;
  name: string | null;
  author: string | null;
  duration: string | null;
  audio: string | null;
  orderNumber: string;
}

interface VideoFormatted {
  id: number;
  title: string;
  link: string;
  orderNumber: string;
}

interface RepertoireFormatted {
  id: number;
  title: string;
  imageRepertoire: string;
  piece_author: {
    title: string;
    author: string;
  }[] | null;
  orderNumber: string;
}

interface BiographyFormatted {
  content: string;
  education: {
    title: string;
    content: {
      id: number;
      location: string;
      city: string;
    }[];
  };

  degrees: {
    title: string;
    content: {
      id: number;
      degreeTitle: string;
      degreeInstitution: string;
      city: string;
    }[];
  };

  awards: {
    title: string;
    content: {
      id: number;
      award: string;
      awardCompetition: string;
      city: string;
    }[];
  };

  contentTitle: string;
  //content_test: string; ESTA FET AMB MARKDOWN, POTSER FA FALTA INSTALAR ALGUNA LLIBRERIA
  caption: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type FormatterFunction<T> = (data: any) => T;

const formatters: Record<string, FormatterFunction<unknown>> = {
    reviews: (data): ReviewFormatted[] => data.map((item: GenericObject) => ({
        id: item.id,
        title: item.attributes.title,
        content: item.attributes.content,
        reviewer: item.attributes.reviewer,
        publisher_date: item.attributes.publisher_date,
        image: item.attributes.images?.data ? item.attributes.images?.data[0]?.attributes.url : null,
    })),

    gallery: (data): GalleryFormatted => ({
        photos: data.attributes.photos?.data.map((photo: GenericObject) => photo.attributes.url) || [],
    }),

    cds: (data): CDFormatted[] => data.map((item: GenericObject) => ({
        id: item.id,
        title: item.attributes.title,
        composer: item.attributes.composer,
        frontImage: item.attributes.front?.data ? item.attributes.front.data.attributes.url : null,
        backImage: item.attributes.back?.data ? item.attributes.back.data.attributes.url : null,
        subtitle: item.attributes.subtitle,
        pieces: Array.isArray(item.attributes.pieces?.data)
            ? item.attributes.pieces.data.map((piece: GenericObject) => ({
                id: piece.id,
                name: piece.title,
                sections: piece?.sections || null,
                status: piece?.status || null,
            }))
            : item.attributes.pieces?.data || null,
        orderNumber: item.attributes.orderNumber || null,
    })),

    audios: (data): AudioFormatted[] => data.map((item: GenericObject) => ({
        id: item.id,
        number: item.attributes.number || null,
        name: item.attributes.name || null,
        author: item.attributes.author || null,
        duration: item.attributes.duration || null,
        link: item.attributes.link,
        orderNumber: item.attributes.orderNumber,
    })),

    videos: (data): VideoFormatted[] => data.map((item: GenericObject) => ({
        id: item.id,
        title: item.attributes.title,
        link: item.attributes.link,
        orderNumber: item.attributes.orderNumber,
    })),

    repertoires: (data): RepertoireFormatted[] => data.map((item: GenericObject) => ({
        id: item.id,
        title: item.attributes.title,
        imageRepertoire: item.attributes.imageRepertoire?.data ? item.attributes.imageRepertoire?.data[0].attributes.url : '',
        orderNumber: item.attributes.orderNumber,
        piece_author: Array.isArray(item.attributes.piece_author?.data)
            ? item.attributes.piece_author.data.map((piece_author: GenericObject) => ({
                title: piece_author.title,
                author: piece_author.author,
            }))
            : item.attributes.piece_author?.data || null,
    })),

    biography: (data): BiographyFormatted[] => [{
        content: data.attributes.content,
        education: {
            title: data.attributes.education[0].title,
            content: data.attributes.education[0].content.map((edu: GenericObject) => ({
                id: Number(edu.id),
                location: edu.location,
                city: edu.city,
            }))
        },
        degrees:{
            title: data.attributes.degrees[0].title,
            content: data.attributes.degrees[0].content.map((deg: GenericObject) => ({
                id: Number(deg.id),
                degreeTitle: deg.degreeTitle,
                degreeInstitution: deg.degreeInstitution,
                city: deg.city,
            }))
        },
        awards:{
            title: data.attributes.awards[0].title,
            content:  data.attributes.awards[0].content.map((awd: GenericObject) => ({
                id: Number(awd.id),
                award: awd.award,
                awardCompetition: awd.awardCompetition,
                city: awd.city,
            }))

        },
        contentTitle: data.attributes.contentTitle,
        caption: data.attributes.caption,
    }]
};

export const formatStrapiArray = <T>(
    strapiResponse: StrapiArray<GenericObject>,
    collection: string
): T => {
    const formatter = formatters[collection];

    if (formatter) return formatter(strapiResponse) as T;

    // eslint-disable-next-line no-console
    console.warn(`No formatter defined for collection: ${collection}`);
    return strapiResponse as unknown as T;
};

export const formatStrapiObject = (strapiResponse: StrapiObject<GenericObject>) => strapiResponse;
