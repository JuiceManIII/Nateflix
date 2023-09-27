import { Routes, Route } from 'react-router-dom';

import LoginPage from './pages/LoginPage.jsx';
import HomePage from './pages/HomePage.jsx';
import TvShowsPage from './pages/TvShowsPage.jsx';
import MoviesPage from './pages/MoviesPage.jsx';
import MyListPage from './pages/MyListPage.jsx';
import SearchPage from './pages/SearchPage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';

const App = () => {

  return (
    <Routes>
      <Route path='/login' element={<LoginPage />} />
      <Route path='/' element={<HomePage />} />
      <Route path='/tvshows' element={<TvShowsPage />} />
      <Route path='/movies' element={<MoviesPage />} />
      <Route path='/mylist' element={<MyListPage />} />
      <Route path='/search' element={<SearchPage />} />
      <Route path='/profile' element={<ProfilePage />} />
    </Routes>
  );
};

export default App;
