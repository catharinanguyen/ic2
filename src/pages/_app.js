import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import { Provider } from 'react-redux';
import { wrapper } from '../store/store';

export default function App({ Component, ...rest }) {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;

  return (
    <Provider store={store}>
      <Component {...pageProps} />;
    </Provider>
  );
}
