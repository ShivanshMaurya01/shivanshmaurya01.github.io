export const PollHelper = {
    checkVoteStatus: (matchId) => {
        const votes = JSON.parse(localStorage.getItem('user_votes') || '{}');
        return votes[matchId] ? true : false;
    },
    saveVote: (matchId, teamName) => {
        const votes = JSON.parse(localStorage.getItem('user_votes') || '{}');
        votes[matchId] = teamName;
        localStorage.setItem('user_votes', JSON.stringify(votes));
    }
};
