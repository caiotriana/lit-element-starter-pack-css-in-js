import * as  theme  from '../../styles/themes/index.js';

export const styled = () => {

  return `
  &.Button {
      border: 0px;
      transition: 0.1s;
  
      font-size: ${theme.default.button.fontSize};
      font-weight: ${theme.default.button.fontWeight};
  
      cursor: pointer;

      &-primary {
        background-color: ${theme.default.button.primary.backgroundColor};
        color: ${theme.default.button.primary.color};
  
        &:hover {
          background-color: ${theme.default.button.primary.hover.backgroundColor};
          color: ${theme.default.button.primary.hover.color};
        }
        &:focus {
          background-color: ${theme.default.button.primary.focus.backgroundColor};
          outline: ${theme.default.button.primary.focus.outline};
          color: ${theme.default.button.primary.focus.color};
        }
        &:active {
          background-color: ${theme.default.button.primary.active.backgroundColor};
          color: ${theme.default.button.primary.active.color};
        }
  
        &--inverse {
          background-color: ${theme.default.button.primary.inverse.backgroundColor};
          color: ${theme.default.button.primary.inverse.color};
  
          &:hover {
            background-color: ${theme.default.button.primary.inverse.hover.backgroundColor};
            color: ${theme.default.button.primary.inverse.hover.color};
          }
          &:focus {
            background-color: ${theme.default.button.primary.inverse.focus.backgroundColor};
            color: ${theme.default.button.primary.inverse.focus.color};
          }
          &:active {
            background-color: ${theme.default.button.primary.inverse.active.backgroundColor};
            color: ${theme.default.button.primary.inverse.active.color};
          }
        }
      }
      &-secondary {
        background-color: ${theme.default.button.secondary.backgroundColor};
        color: ${theme.default.button.secondary.color};
  
        &:hover {
          background-color: ${theme.default.button.secondary.hover.backgroundColor};
          color: ${theme.default.button.secondary.hover.color};
        }
  
        &:focus {
          outline: ${theme.default.button.secondary.focus.outline};
          color: ${theme.default.button.secondary.focus.color};
        }
  
        &:active {
          color: ${theme.default.button.secondary.active.color};
          background-color: ${theme.default.button.secondary.active.backgroundColor};
        }
  
        &--inverse {
          color: ${theme.default.button.secondary.inverse.color};
  
          &:hover {
            background-color: ${theme.default.button.secondary.hover.backgroundColor};
            color: ${theme.default.button.secondary.hover.color};
          }
          &:focus {
            color: ${theme.default.button.secondary.focus.color};
          }
          &:active {
            background-color: ${theme.default.button.secondary.active.backgroundColor};
            color: ${theme.default.button.secondary.active.color};
          }
        }
      }
      &--disabled,
      &:disabled {
        cursor: not-allowed;
        color: ${theme.default.button.disabled.color};
        background-color: ${theme.default.button.disabled.backgroundColor};
      }
      &--small {
        line-height: ${theme.default.button.sizes.small.lineHeight};
        padding: ${theme.default.button.sizes.small.padding};
        font-size: ${theme.default.button.sizes.small.fontSize};
      }
      &--medium {
        line-height: ${theme.default.button.sizes.medium.lineHeight};
        padding: ${theme.default.button.sizes.medium.padding};
      }
      &--large {
        line-height: ${theme.default.button.sizes.large.lineHeight};
        padding: ${theme.default.button.sizes.large.padding};
      }
    }`
}