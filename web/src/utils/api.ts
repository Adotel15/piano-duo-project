
const fetchData = async <T>(collectionType: string, language: string): Promise<T | null> => {
    try {
        const response = await fetch(
            `${import.meta.env.VITE_API_URL}/${collectionType}?lang=${language}`
        );

        if (!response.ok) {
            throw new Error(`Error fetching data ${collectionType}: ${response.statusText}`);
        }

        const { data }: { data: T } = await response.json();
        return data;
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Error fetching data:', error);
        return null;
    }
};

export default fetchData;
