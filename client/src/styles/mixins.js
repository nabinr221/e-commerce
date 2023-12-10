// Mixins.js
// mixins.js
export const flex = ({ direction, justifyContent, alignItems, gap }) => `
  display: flex;
  flex-direction: ${direction || 'row'};
  justify-content: ${justifyContent || 'flex-start'};
  align-items: ${alignItems || 'start'};
  gap:${gap || '1rem'};
`;
