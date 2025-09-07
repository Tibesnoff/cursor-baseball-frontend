import type { ThemeConfig } from "antd";

// Baseball-themed Ant Design configuration using CSS custom properties
// This ensures Ant Design uses the same values as our theme.css single source of truth
export const baseballTheme: ThemeConfig = {
  token: {
    // Primary colors - using CSS custom properties
    colorPrimary: "var(--color-primary)",
    colorPrimaryHover: "var(--color-primary-hover)",
    colorPrimaryActive: "var(--color-primary-active)",

    // Secondary colors - using CSS custom properties
    colorInfo: "var(--color-secondary)",
    colorSuccess: "var(--color-success)",
    colorWarning: "var(--color-warning)",
    colorError: "var(--color-error)",

    // Background colors - using CSS custom properties
    colorBgBase: "var(--color-background)",
    colorBgContainer: "var(--color-background-elevated)",
    colorBgElevated: "var(--color-background-elevated)",
    colorBgLayout: "var(--color-background)",

    // Text colors - using CSS custom properties
    colorTextBase: "var(--color-text-primary)",
    colorText: "var(--color-text-primary)",
    colorTextSecondary: "var(--color-text-secondary)",
    colorTextTertiary: "var(--color-text-muted)",
    colorTextQuaternary: "var(--color-text-muted)",

    // Border colors - using CSS custom properties
    colorBorder: "var(--color-border)",
    colorBorderSecondary: "var(--color-border-light)",

    // Font family - using CSS custom properties
    fontFamily: "var(--font-family-primary)",
    fontFamilyCode: "var(--font-family-mono)",

    // Font sizes - using CSS custom properties
    fontSize: 16, // var(--font-size-base) = 1rem = 16px
    fontSizeHeading1: 48, // var(--font-size-5xl) = 3rem = 48px
    fontSizeHeading2: 36, // var(--font-size-4xl) = 2.25rem = 36px
    fontSizeHeading3: 30, // var(--font-size-3xl) = 1.875rem = 30px
    fontSizeHeading4: 24, // var(--font-size-2xl) = 1.5rem = 24px
    fontSizeHeading5: 20, // var(--font-size-xl) = 1.25rem = 20px
    fontSizeLG: 18, // var(--font-size-lg) = 1.125rem = 18px
    fontSizeSM: 14, // var(--font-size-sm) = 0.875rem = 14px
    // fontSizeXS: 12, // Not available in Ant Design token system

    // Border radius - using CSS custom properties
    borderRadius: 6, // var(--radius-md) = 0.375rem = 6px
    borderRadiusLG: 8, // var(--radius-lg) = 0.5rem = 8px
    borderRadiusSM: 4, // var(--radius-base) = 0.25rem = 4px
    borderRadiusXS: 2, // var(--radius-sm) = 0.125rem = 2px

    // Spacing - using CSS custom properties
    padding: 16, // var(--space-4) = 1rem = 16px
    paddingLG: 24, // var(--space-6) = 1.5rem = 24px
    paddingSM: 12, // var(--space-3) = 0.75rem = 12px
    paddingXS: 8, // var(--space-2) = 0.5rem = 8px
    paddingXXS: 4, // var(--space-1) = 0.25rem = 4px

    margin: 16, // var(--space-4) = 1rem = 16px
    marginLG: 24, // var(--space-6) = 1.5rem = 24px
    marginSM: 12, // var(--space-3) = 0.75rem = 12px
    marginXS: 8, // var(--space-2) = 0.5rem = 8px
    marginXXS: 4, // var(--space-1) = 0.25rem = 4px

    // Line height - using CSS custom properties
    lineHeight: 1.5, // var(--line-height-normal)
    lineHeightHeading1: 1.25, // var(--line-height-tight)
    lineHeightHeading2: 1.25, // var(--line-height-tight)
    lineHeightHeading3: 1.25, // var(--line-height-tight)
    lineHeightHeading4: 1.25, // var(--line-height-tight)
    lineHeightHeading5: 1.25, // var(--line-height-tight)

    // Box shadow - using CSS custom properties
    boxShadow: "var(--shadow-base)",
    boxShadowSecondary: "var(--shadow-md)",
    boxShadowTertiary: "var(--shadow-lg)",

    // Motion - using CSS custom properties
    motionDurationFast: "var(--transition-fast)",
    motionDurationMid: "var(--transition-base)",
    motionDurationSlow: "var(--transition-slow)",

    // Z-index - using CSS custom properties
    zIndexBase: 0,
    zIndexPopupBase: 1000, // var(--z-dropdown)
  },

  components: {
    // Layout
    Layout: {
      headerBg: "var(--color-primary)",
      headerColor: "var(--color-text-inverse)",
      headerHeight: 64,
      siderBg: "var(--color-background-elevated)",
      bodyBg: "var(--color-background)",
    },

    // Menu
    Menu: {
      itemBg: "transparent",
      itemSelectedBg: "var(--color-primary-light)",
      itemSelectedColor: "var(--color-primary)",
      itemHoverBg: "var(--color-background-muted)",
      itemHoverColor: "var(--color-primary)",
      subMenuItemBg: "transparent",
      horizontalItemSelectedBg: "var(--color-primary-light)",
      horizontalItemSelectedColor: "var(--color-primary)",
    },

    // Button
    Button: {
      borderRadius: 6,
      controlHeight: 40,
      controlHeightLG: 48,
      controlHeightSM: 32,
      fontWeight: 500,
    },

    // Card
    Card: {
      borderRadius: 8,
      boxShadow: "var(--shadow-base)",
      headerBg: "var(--color-background-elevated)",
    },

    // Table
    Table: {
      headerBg: "var(--color-background-muted)",
      headerColor: "var(--color-text-primary)",
      rowHoverBg: "var(--color-background-muted)",
      borderColor: "var(--color-border)",
      cellPaddingBlock: 12,
      cellPaddingInline: 16,
    },

    // Input
    Input: {
      borderRadius: 6,
      controlHeight: 40,
      controlHeightLG: 48,
      controlHeightSM: 32,
      colorBorder: "var(--color-border-dark)",
      colorPrimaryHover: "var(--color-primary)",
    },

    // Select
    Select: {
      borderRadius: 6,
      controlHeight: 40,
      controlHeightLG: 48,
      controlHeightSM: 32,
      colorBorder: "var(--color-border-dark)",
      colorPrimaryHover: "var(--color-primary)",
    },

    // Form
    Form: {
      labelColor: "var(--color-text-primary)",
      labelFontSize: 14,
      labelRequiredMarkColor: "var(--color-error)",
    },

    // Typography
    Typography: {
      titleMarginBottom: "0.5em",
      titleMarginTop: "1.2em",
    },

    // Statistic
    Statistic: {
      titleFontSize: 14,
      contentFontSize: 24,
      fontFamily: "var(--font-family-primary)",
    },

    // Progress
    Progress: {
      defaultColor: "var(--color-primary)",
      remainingColor: "var(--color-background-muted)",
    },

    // Badge
    Badge: {
      statusSize: 8,
      textFontSize: 12,
    },

    // Tag
    Tag: {
      borderRadius: 4,
      fontSize: 12,
      lineHeight: 20,
    },

    // Tooltip
    Tooltip: {
      borderRadius: 6,
      colorBgSpotlight: "var(--color-baseball-navy)",
      colorTextLightSolid: "var(--color-text-inverse)",
    },

    // Modal
    Modal: {
      borderRadius: 8,
      contentBg: "var(--color-background-elevated)",
      titleColor: "var(--color-text-primary)",
    },

    // Drawer
    Drawer: {
      borderRadius: 8,
    },

    // Notification
    Notification: {
      borderRadius: 8,
      colorBgElevated: "var(--color-background-elevated)",
      colorText: "var(--color-text-primary)",
    },

    // Message
    Message: {
      borderRadius: 6,
      colorBgElevated: "var(--color-background-elevated)",
      colorText: "var(--color-text-primary)",
    },
  },

  // Dark theme configuration
  algorithm: undefined, // Will be set dynamically based on theme
};

// Dark theme variant - uses the same CSS custom properties
// The dark theme values are defined in theme.css under [data-theme="dark"]
export const baseballThemeDark: ThemeConfig = {
  ...baseballTheme,
  // No need to override token values since they use CSS custom properties
  // The dark theme values are automatically applied via CSS when data-theme="dark" is set
};
