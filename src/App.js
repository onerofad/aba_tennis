import './App.css';
import { createMedia } from "@artsy/fresnel"
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
import LogOut from './Components/LogOut';

import MobileHome from './Components/MobileHome';

const { MediaContextProvider, Media } = createMedia({
  breakpoints:{
    mobile: 0,
    tablet: 768,
    computer: 1024
  }
})

const App = () => {
  return (
  <MediaContextProvider>
    <Media  at="mobile">
      <BrowserRouter>
        <Routes>
          <Route index element={<MobileHome />} />
        </Routes>
      </BrowserRouter>
    </Media>
    <Media greaterThan="mobile">
     <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/:pageno' element={<HomePagination />} />
          <Route path='register' element={<Registration />} />
          <Route path='successregister' element={<SuccessfullRegistration />} />
          <Route path="profile" element={<Profile />} />
          <Route path="ranking" element={<PlayerRankingTable />} />
          <Route path="videos" element={<VideoSection />} />
          <Route path="search/profile" element={<SearchProfile />} />
          <Route path="search/profile/result" element={<SearchProfileResult />} />
          <Route path="gallary" element={<ImageGallary />} />
          <Route path="search/personal/profile" element={<SearchPersonalProfile />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<Login />} />
          <Route path='results' element={<MatchResult />} />
          <Route path='logout' element={<LogOut />} />

        </Routes>
     </BrowserRouter>
     </Media>
    </MediaContextProvider>
  );
}

export default App;
