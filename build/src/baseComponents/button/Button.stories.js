import { Button } from './ds-button.js';
export default {
  title: 'Example/Button',
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['large', 'medium', 'small']
      }
    },
    type: {
      control: {
        type: 'select',
        options: ['primary', 'secondary']
      }
    }
  }
};

const Template = args => Button(args);

export const Base = Template.bind({});
Base.args = {
  label: 'Button',
  size: 'large',
  type: 'primary',
  inverse: false,
  disabled: false,
  label: "Salvar"
};