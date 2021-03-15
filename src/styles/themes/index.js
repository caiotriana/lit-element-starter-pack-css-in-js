import buttonTheme from './button-theme.js';

let theme;

(async ()=>{
  
  theme = { 
    button : {
      ...buttonTheme,
    },
  }

  return theme

})()

export default theme;