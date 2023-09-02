import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Registration from './Components/Registration';
import SuccessfullRegistration from './Components/SuccessfulRegistration';
import Profile from './Components/Profile'
import PlayerRankingTable from './Components/PlayerRankingTable';
import VideoSection from './Components/VideoSection';
import SearchProfile from './Components/SearchProfile';
import SearchProfileResult from './Components/SearchProfileResult';
import ImageGallary from './Components/ImageGallary';
import SearchPersonalProfile from './Components/SearchPersonalProfile';
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import HomePagination from './Components/HomePagination';
import MatchResult from './Components/MatchResults';

const App = () => {
  return (
     <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/:pageno' element={<HomePagination />} />
          <Route path='/register' element={<Registration />} />
          <Route path='/successregister' element={<SuccessfullRegistration />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/ranking" element={<PlayerRankingTable />} />
          <Route path="/videos" element={<VideoSection />} />
          <Route path="/search/profile" element={<SearchProfile />} />
          <Route path="/search/profile/result" element={<SearchProfileResult />} />
          <Route path="/gallary" element={<ImageGallary />} />
          <Route path="/search/personal/profile" element={<SearchPersonalProfile />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path='/results' element={<MatchResult />} />
        </Routes>
     </BrowserRouter>
  );
}

export default App;
