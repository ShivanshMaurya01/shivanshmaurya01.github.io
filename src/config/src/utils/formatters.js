export const Formatters = {
    formatScore: (r, w) => `${r}/${w}`,
    getWinProb: (score1, score2) => {
        const total = score1 + score2;
        return total === 0 ? 50 : Math.round((score1 / total) * 100);
    },
    cleanStatus: (status) => status.toUpperCase()
};
