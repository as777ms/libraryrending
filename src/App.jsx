import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { lazy } from "react";
import "./App.css";
// import ProtectedRoute from "./utils/ProtectedRoute";
import Login from "./auth/login/login";
import Registration from "./auth/registration/registration";
import hoopla from "./assets/img/hoopla.png";
import prime from "./assets/img/prime.png";
import { Layout } from "./components/layout/layout";
import bookheader from "./assets/img/bookheader.jpeg";
import bookheader2 from "./assets/img/bookheader2.jpeg";
import bookheader3 from "./assets/img/bookheader3.jpeg"
const Main = lazy(()=>import('./pages/main/main'))
const InfoBook = lazy(()=>import('./pages/infoBook/infoBook'))
const InfoSlider = lazy(()=>import('./pages/infoSlider/infoSlider'))
const PostPage = lazy(()=>import('./pages/postPage/postPage'))
const AboutPage = lazy(()=>import('./pages/aboutPage/aboutPage'))
const Love = lazy(()=>import('./pages/love/love'))
const Drama = lazy(()=>import('./pages/drama/drama'))
const Fiction = lazy(()=>import('./pages/fiction/fiction'))
const Thriller = lazy(()=>import('./pages/thriller/thriller'))
const Fantasy = lazy(()=>import('./pages/fantasy/fantasy'))
const Mystery = lazy(()=>import('./pages/mystery/mystery'))
const Biography = lazy(()=>import('./pages/biography/biography'))
const Horror = lazy(()=>import('./pages/horror/horror'))
const Historical = lazy(()=>import('./pages/historical/historical'))
const Comedy = lazy(()=>import('./pages/comedy/comedy'))
const Adventure = lazy(()=>import('./pages/adventure/adventure'))
const Selfhelp = lazy(()=>import('./pages/selfhelp/selfhelp'))
const Books = lazy(()=>import('./pages/books/books'))
const Audiobooks = lazy(()=>import('./pages/audiobooks/audiobooks'))
const News = lazy(()=>import('./pages/news/news'))
const Topbooks = lazy(()=>import('./pages/topbooks/topbooks'))
const Topaudiobooks = lazy(()=>import('./pages/topaudiobooks/topaudiobooks'))
const Infobooksbyid = lazy(()=>import('./pages/infobooksbyid/infobooksbyid'))

const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route element={<Layout hoopla={hoopla}/>}>
          
          <Route 
            path="/" 
            element={
                <Main hoopla={hoopla} prime={prime} bookheader={bookheader} bookheader2={bookheader2} bookheader3={bookheader3}/>
            } 
          />
          <Route path="/:id" element={<InfoBook hoopla={hoopla} />} />
          <Route path="/slider/:id" element={<InfoSlider />} />
          <Route path="/posts" element={<PostPage prime={prime}/>} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/love" element={<Love />} /> 
          <Route path="/drama" element={<Drama />} />
          <Route path="/fiction" element={<Fiction />}/>
          <Route path="/thriller" element={<Thriller />}/>
          <Route path="/fantasy" element={<Fantasy />}/>
          <Route path="/mystery" element={<Mystery />}/>
          <Route path="/biography" element={<Biography />}/>
          <Route path="/horror" element={<Horror />}/>
          <Route path="/historical" element={<Historical />}/>
          <Route path="/comedy" element={<Comedy />}/>
          <Route path="/adventure" element={<Adventure />}/>
          <Route path="/selfhelp" element={<Selfhelp />}/>
          <Route path="/books" element={<Books />}/>
          <Route path="/audiobooks" element={<Audiobooks />}/>
          <Route path="/news" element={<News />} />
          <Route path="/topbooks" element={<Topbooks />}/>
          <Route path="/topaudiobooks" element={<Topaudiobooks />}/>
          <Route path="/infobooksbyid/:id" element={<Infobooksbyid />} />
        </Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
