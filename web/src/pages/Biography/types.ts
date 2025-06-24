export type Biography = {
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
    contentTest: string;
    contentTitle: string;
    caption: string;
}
