export const highlightParts = (text: string, highlightedParts?: string[]): { text: string; highlighted: boolean }[] => {
    if (!highlightedParts || highlightedParts.length === 0) {
        return [{ text, highlighted: false }];
    }

    // Escape regex special characters in highlighted parts
    const escapedParts = highlightedParts.map(part =>
        part.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    );

    // Create a combined regex for all highlighted parts
    const regex = new RegExp(`(${escapedParts.join('|')})`, 'gi');

    return text.split(regex).map((part) => ({
        text: part,
        highlighted: highlightedParts.some(h => h.toLowerCase() === part.toLowerCase())
    }));
};
