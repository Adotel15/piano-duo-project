export const templateEmail = (from: string, content: string): string => {
    return `
        <h3>Petició desde la web</h3>
        <h4>Correu de contacte: ${from}</h4>
        <p>${content}</p>
    `;
};
