export const styled = () => {
  return `
  &.Button {
      border: 0px;
      transition: 0.1s;
  
      font-size: 16px;
      font-weight: 600;
  
      cursor: pointer;

      &-primary {
        background-color: #000;
        color: #fff;
  
        &:hover {
          background-color: #fff;
          color: #000;
        }

        &--inverse {
          background-color: #fff;
          color: #000;
  
          &:hover {
            background-color: #000;
            color: #fff;
          }
        }
      }
      &-secondary {
        background-color: transparent;
        color: #000;
  
        &:hover {
          background-color: #000;
          color: #fff;
        }
        &--inverse {
          color: #fff;
  
          &:hover {
            background-color: #fff;
            color: #000;
          }
        }
      }
      &--disabled,
      &:disabled {
        cursor: not-allowed;
        color: #616161;
        background-color: #bdbdbd;
      }
      &--small {
        line-height: 115%;
        padding: 8px 16px;
        font-size: 14px;
      }
      &--medium {
        line-height: 100%;
        padding: 16px 32px;
      }
      &--large {
        line-height: 150%;
        padding: 16px 32px;
      }
    }`
}