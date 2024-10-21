import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CharactersContextProvider } from './context/CharactersContext';
import {
  Layout,
  HomePage,
  SearchResults,
  CharacterDetails,
  NoPage,
} from './pages';

const App: React.FC = () => {
  return (
    <Router>
      <CharactersContextProvider>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path='/search/' element={<SearchResults />} />
            <Route path='/character/:id' element={<CharacterDetails />} />
            <Route path='*' element={<NoPage />} />
          </Route>
        </Routes>
      </CharactersContextProvider>
    </Router>
  );
};

export default App;
