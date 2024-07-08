// pages/_app.tsx
import type { AppProps } from 'next/app';
import { wrapper } from '@/redux/store';
import '@/styles/globals.css';
import { Provider } from 'react-redux';
import { MainLayout } from '@/components/layouts/MainLayout/MainLayout';

function MyApp({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);
  return (
    <Provider store={store}>
      <MainLayout>
        <Component {...props.pageProps} />
      </MainLayout>
    </Provider>
  );
}

export default MyApp;
