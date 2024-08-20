import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CharactersContextProvider } from './context/CharactersContext';
import Layout from './components/Layout';
import { HomePage, SearchResults, CharacterDetails, NoPage } from './pages';

const App = () => {
  return (
    <Router>
      <CharactersContextProvider>
        <Layout>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/search/' element={<SearchResults />} />
            <Route path='/character/:id' element={<CharacterDetails />} />
            <Route path='*' element={<NoPage />} />
          </Routes>
        </Layout>
      </CharactersContextProvider>
    </Router>
  );
};

export default App;
