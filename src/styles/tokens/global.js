import { merge } from 'lodash';

export const globalTokens = {
  'border-width-none': '0',
  'border-width-hairline': '1px',
  'border-width-thin': '2px',
  'border-width-thick': '4px',
  'border-width-heavy': '8px',
  'border-radius-none': '0',
  'border-radius-sm': '8px',
  'border-radius-md': '16px',
  'border-radius-lg': '24px',
  'border-radius-pill': '80px',
  'border-radius-circle': '50%',
  'shadow-level-1': '0 4px 8px rgba(69,73,84,0.08)',
  'shadow-level-2': '0 8px 24px rgba(69,73,84,0.08)',
  'shadow-level-3': '0 16px 32px rgba(69,73,84,0.08)',
  'shadow-level-4': '0 16px 48px rgba(69,73,84,0.08)',
  'spacing-inline-quarck': '4px',
  'spacing-inline-nano': '8px',
  'spacing-inline-xxxs': '16px',
  'spacing-inline-xxs': '24px',
  'spacing-inline-xs': '32px',
  'spacing-inline-sm': '40px',
  'spacing-inline-md': '48px',
  'spacing-inline-lg': '64px',
  'spacing-inline-xl': '80px',
  'spacing-stack-quarck': '4px',
  'spacing-stack-nano': '8px',
  'spacing-stack-xxxs': '16px',
  'spacing-stack-xxs': '24px',
  'spacing-stack-xs': '32px',
  'spacing-stack-sm': '40px',
  'spacing-stack-md': '48px',
  'spacing-stack-lg': '56px',
  'spacing-stack-xl': '64px',
  'spacing-stack-xxl': '80px',
  'spacing-stack-xxxl': '120px',
  'spacing-stack-huge': '160px',
  'spacing-stack-giant': '200px',
  'spacing-squish-quarck': '4px 8px',
  'spacing-squish-nano': '8px 16px',
  'spacing-squish-xs': '16px 24px',
  'spacing-squish-sm': '16px 32px',
  'spacing-inset-quarck': '4px',
  'spacing-inset-nano': '8px',
  'spacing-inset-xs': '16px',
  'spacing-inset-sm': '24px',
  'spacing-inset-md': '32px',
  'spacing-inset-lg': '40px',
  'font-size-xxxs': '12px',
  'font-size-xxs': '14px',
  'font-size-xs': '16px',
  'font-size-sm': '20px',
  'font-size-md': '24px',
  'font-size-lg': '32px',
  'font-size-xl': '40px',
  'font-size-xxl': '48px',
  'font-size-xxxl': '64px',
  'font-size-display': '80px',
  'font-size-giant': '96px',
  'line-height-default': '100%',
  'line-height-tiny': '115%',
  'line-height-medium': '120%',
  'line-height-large': '133%',
  'line-height-distant': '150%',
  'line-height-superdistant': '170%',
  'letter-spacing-small': '-1px',
  'letter-spacing-medium': '-2px',
  'letter-spacing-large': '-3px',
  'opacity-level-semiopaque': '80%',
  'opacity-level-intense': '64%',
  'opacity-level-medium': '32%',
  'opacity-level-light': '16%',
  'opacity-level-semitransparent': '8%',
};

/**
 *
 * @param {typeof globalTokens} tokens
 */
export default function set(tokens) {
  if (typeof tokens === 'object') {
    return merge(globalTokens, tokens);
  }

  return globalTokens;
}
