import '@hookstate/devtools';
import "./style/font.css"
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { Home } from './pages/Home/home.page';
import { Collection } from './pages/Collection/collection.page';
import { PageNotFound } from './pages/PageNotFound/page-not-found.page';
import ReactDOM from 'react-dom/client';
import { I18nProvider } from './providers/i18n-provider';
import { Header } from './containers/Header/header.container';
import { theme } from './style/theme';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <I18nProvider>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Collection />} />
          <Route index path='/collections' element={<Collection />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  </I18nProvider>,
);
