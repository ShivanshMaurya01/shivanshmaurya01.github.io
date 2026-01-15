/**
 * CRICPULSE PRO - SYSTEM CONFIGURATION
 * Centralized control for the entire application.
 */

export const SYSTEM_CONFIG = {
    APP_NAME: "CricPulse Pro",
    VERSION: "2.5.0-Enterprise",
    API_KEY: "ca155513-3932-4919-867c-f10a8867a5c7", // Your Key
    REFRESH_RATE: 60000, // 60 Seconds
    CACHE_DURATION: 1000 * 60 * 5, // 5 Minutes Local Cache
    
    // Raebareli Industrial Exchange Identity
    COMPANY: {
        NAME: "CricPulse Pro Analytics",
        ADDRESS: "Raebareli Industrial Exchange, UP 229001",
        EMAIL: "support@cricpulse.pro",
        FOUNDED: 2026
    },

    // Feature Flags
    FEATURES: {
        ENABLE_ADS: true,
        ENABLE_NOTIFICATIONS: true,
        ENABLE_PWA: true
    }
};

export const UI_THEME = {
    COLORS: {
        BRAND: "#00f2ff",
        DARK: "#020617",
        ACCENT: "#1e293b",
        SUCCESS: "#22c55e",
        DANGER: "#ef4444"
    }
};
