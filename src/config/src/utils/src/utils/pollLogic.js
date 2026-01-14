export const PollHelper = {
    // Checks if the user has already voted for a specific match
    checkVoteStatus: (matchId) => {
        const votes = JSON.parse(localStorage.getItem('cricpulse_user_votes') || '{}');
        return votes[matchId] || null; // Returns the team they voted for, or null
    },

    // Records the user's vote for a specific match
    saveVote: (matchId, teamName) => {
        const votes = JSON.parse(localStorage.getItem('cricpulse_user_votes') || '{}');
        votes[matchId] = teamName; // Store which team they voted for
        localStorage.setItem('cricpulse_user_votes', JSON.stringify(votes));
        console.log(`Vote saved locally for Match ${matchId}: ${teamName}`);
    },

    // Clears all past votes (e.g., at the end of a tournament)
    clearAllVotes: () => {
        localStorage.removeItem('cricpulse_user_votes');
        console.log("All local votes cleared.");
    }
};
