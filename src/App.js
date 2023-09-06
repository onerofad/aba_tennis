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
import MobileSuccessRegister from './Components/mobile/MobileSuccessRegister';

import MobileHome from './Components/mobile/MobileHome';
import MobileRegistration from './Components/mobile/MobileRegistration';
import MobilePlayerProfile from './Components/mobile/MobilePlayerProfile'
import MobilePlayerProfileEdit from './Components/mobile/MobilePlayerProfileEdit';
import MobilePlayerRanking from './Components/mobile/MobilePlayerRanking';
import MobileSearchPlayerRanking from './Components/mobile/MobileSearchPlayerRanking';
import MobileVideoSection from './Components/mobile/MobileVedioSection';
import SearchMobilePlayerProfile from './Components/mobile/SearchMobilePlayerProfile';
import SearchMobileResultPlayerProfile from './Components/mobile/SearchMobileResultPlayerProfile';
import MobileImageGallary from './Components/mobile/MobileImageGallary';
import MobileSearchResult from './Components/mobile/MobileSearchResult';
import MobileSignUpComponent from './Components/mobile/MobileSignUpComponent';
import MobileLoginComponent from './Components/mobile/MobileLoginComponent';
import MobileAllNews from './Components/mobile/MobileAllNews';
import MobileSinglePageNews from './Components/mobile/MobileSinglePageNews';
import MobilePrivacyPolicy from './Components/mobile/MobilePrivacyPolicy';

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
          <Route path="register" element={<MobileRegistration />} />
          <Route path="register/success" element={<MobileSuccessRegister />} />
          <Route path="player/profile" element={<MobilePlayerProfile />} />
          <Route path="player/profile/edit" element={<MobilePlayerProfileEdit />} />
          <Route path="player/ranking" element={<MobilePlayerRanking />} />
          <Route path="search/player/ranking" element={<MobileSearchPlayerRanking />} />
          <Route path="video" element={<MobileVideoSection />} />
          <Route path="search/player/profile" element={<SearchMobilePlayerProfile />} />
          <Route path="search/result/profile" element={<SearchMobileResultPlayerProfile />} />
          <Route path="gallary" element={<MobileImageGallary />} />
          <Route path="results" element={<MobileSearchResult />} />
          <Route path="signup" element={<MobileSignUpComponent />} />
          <Route path="login" element={<MobileLoginComponent />} />
          <Route path="news/:pageno" element={<MobileAllNews />} />
          <Route path="newspage/:pageno" element={<MobileSinglePageNews />} />
          <Route path="terms" element={<MobilePrivacyPolicy />} />








          
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
