import '@/styles/mapbox.scss';
import '@/styles/tailwind.css';
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css';
import './App.scss';

import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import RenderRouter from './router';
import { store } from './stores';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      notifyOnChangeProps: 'tracked',
    },
  },
});

/**
 * 应该根据配置文件去配置，而不是写死
 */
const App = () => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <RenderRouter />
        </BrowserRouter>
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
