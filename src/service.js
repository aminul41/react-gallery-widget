export const getImageSrc = ({ bw, theme, idx }) => {
  // Using a more modern approach with template literals
  return `https://picsum.photos/seed/${theme || 'sports'}-${idx}-${bw ? 'bw' : 'color'}/600/600`;
};

export const themes = ['sports', 'nature', 'animals', 'city', 'fashion'];

export const camelize = (str) => {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => 
      index === 0 ? word.toUpperCase() : word.toLowerCase()
    )
    .replace(/\s+/g, '');
};
