import { brandingTokens } from '../tokens/branding.js';
import { globalTokens } from '../tokens/global.js';

const buttonTheme = {
  fontSize: globalTokens['font-size-xs'],
  fontWeight: brandingTokens['font-weight-semibold'],

  primary: {
    backgroundColor: brandingTokens['color-base-dark-pure'],
    color: brandingTokens['color-base-light-pure'],

    hover: {
      backgroundColor: brandingTokens['color-base-light-pure'],
      color: brandingTokens['color-base-dark-pure'],
    },

    focus: {
      backgroundColor: brandingTokens['color-base-dark-pure'],
      outline: brandingTokens['color-base-light-03'],
      color: brandingTokens['color-base-light-pure'],
    },

    active: {
      color: brandingTokens['color-base-light-pure'],
      backgroundColor: brandingTokens['color-base-dark-pure'],
    },

    inverse: {
      backgroundColor: brandingTokens['color-base-light-pure'],
      color: brandingTokens['color-base-dark-pure'],

      hover: {
        backgroundColor: brandingTokens['color-base-dark-pure'],
        color: brandingTokens['color-base-light-pure'],
      },

      focus: {
        backgroundColor: brandingTokens['color-base-light-pure'],
        color: brandingTokens['color-base-dark-pure'],
      },

      active: {
        backgroundColor: brandingTokens['color-base-light-02'],
        color: brandingTokens['color-base-dark-pure'],
      },
    },
  },
  secondary: {
    backgroundColor: 'transparent',
    color: brandingTokens['color-base-dark-pure'],

    hover: {
      backgroundColor: brandingTokens['color-base-dark-pure'],
      color: brandingTokens['color-base-light-pure'],
    },

    focus: {
      outline: brandingTokens['color-base-light-03'],
      color: brandingTokens['color-base-dark-pure'],
    },

    active: {
      color: brandingTokens['color-base-dark-pure'],
      backgroundColor: brandingTokens['color-base-light-02'],
    },

    inverse: {
      color: brandingTokens['color-base-light-pure'],

      hover: {
        backgroundColor: brandingTokens['color-base-light-pure'],
        color: brandingTokens['color-base-dark-pure'],
      },
      focus: {
        color: brandingTokens['color-base-light-03'],
      },
      active: {
        backgroundColor: brandingTokens['color-base-light-02'],
        color: brandingTokens['color-base-dark-pure'],
      },
    },
  },
  disabled: {
    color: brandingTokens['color-base-dark-01'],
    backgroundColor: brandingTokens['color-base-light-03'],
  },
  sizes: {
    small: {
      lineHeight: globalTokens['line-height-tiny'],
      padding: globalTokens['spacing-squish-nano'],
      fontSize: globalTokens['font-size-xxs'],
    },
    medium: {
      lineHeight: globalTokens['line-height-default'],
      padding: globalTokens['spacing-squish-sm'],
    },
    large: {
      lineHeight: globalTokens['line-height-distant'],
      padding: globalTokens['spacing-squish-sm'],
    },
  },
};

export default buttonTheme;
