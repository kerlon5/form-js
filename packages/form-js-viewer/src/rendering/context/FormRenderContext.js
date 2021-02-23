import { createContext } from 'solid-js';

const FormRenderContext = createContext({
  Empty: (props) => {
    return null;
  },
  Children: (props) => {
    return props.children;
  },
  Element: (props) => {
    return props.children;
  }
});

export default FormRenderContext;