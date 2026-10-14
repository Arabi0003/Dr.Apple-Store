/**
 * Dr. Apple — Centralized Theme Configuration
 * Single source of truth for design tokens.
 */

export const theme = {
  colors: {
    primary: {
      blue50: "#EBF5FF",
      blue100: "#D6EAFF",
      blue200: "#ADD5FF",
      blue300: "#7ABCFF",
      blue400: "#47A3FF",
      blue500: "#1A8AFF",    // Natural Blue — primary actions
      blue600: "#0070E0",    // Darker blue — hover states
      blue700: "#005BB5",    // Deep blue — headings, nav
      blue800: "#004A94",    // Navy — footer, dark sections
      blue900: "#003366",    // Deepest — text on light backgrounds
      blue950: "#001F3F",    // Near-black blue
    },
    secondary: {
      silver50: "#FAFBFC",
      silver100: "#F4F5F7",
      silver200: "#E8EAED",
      silver300: "#D1D5DB",
      silver400: "#B8BEC7",
      silver500: "#9CA3AF",  // Premium Silver — accents, borders
      silver600: "#6B7280",  // Dark silver — secondary text
      silver700: "#4B5563",  // Charcoal silver — body text
      silver800: "#374151",
      silver900: "#1F2937",
      silver950: "#111827",
    },
    accent: {
      gold: "#D4A853",
      goldLight: "#F0DCA4",
      white: "#FFFFFF",
      offWhite: "#F8F9FA",
      success: "#10B981",
      warning: "#F59E0B",
      error: "#EF4444",
    },
  },
  fonts: {
    body: "Calibri, Candara, Segoe UI, Optima, Arial, sans-serif",
  },
  fontSizes: {
    headingSm: "28px",
    headingMd: "30px",
    headingLg: "32px",
  },
  borderRadius: {
    none: "0px", // Square corners for nav & buttons as specified
  },
} as const;

export type ThemeType = typeof theme;
