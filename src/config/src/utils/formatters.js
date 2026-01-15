/**
 * UTILITY FUNCTIONS
 * Reusable logic for scoring and display.
 */

export const MatchUtils = {
    // Convert API status to user-friendly text
    getStatusColor: (status) => {
        if (status.includes("Live")) return "text-[#00f2ff] animate-pulse";
        if (status.includes("Won")) return "text-green-400";
        return "text-slate-500";
    },

    // Format huge numbers (e.g., 10000 -> 10k)
    formatAudience: (num) => {
        return new Intl.NumberFormat('en-IN', { notation: "compact" }).format(num);
    },

    // Calculate Run Rate manually if missing
    calculateNRR: (runs, overs) => {
        if (!overs) return "0.00";
        return (runs / overs).toFixed(2);
    }
};

export const DateUtils = {
    // Format: "15 Jan • 14:00 IST"
    getLiveTime: () => {
        const now = new Date();
        return now.toLocaleTimeString('en-IN', { 
            hour: '2-digit', 
            minute: '2-digit', 
            timeZone: 'Asia/Kolkata' 
        }) + " IST";
    }
};
