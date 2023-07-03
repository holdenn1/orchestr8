import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import { RouterProvider } from 'react-router-dom';
import { router } from '@/router';
import { Provider } from 'react-redux';
import { store } from './store';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
);
