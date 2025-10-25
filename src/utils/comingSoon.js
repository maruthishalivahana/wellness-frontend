// Simple reusable alert for WIP appointment flows
export const showComingSoon = (e) => {
    if (e && typeof e.preventDefault === 'function') e.preventDefault();
    alert('feature coming soon! stay tuned !');
};
