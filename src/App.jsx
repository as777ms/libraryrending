import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./utils/ProtectedRoute";
import Main from "./pages/main/main";
import Login from "./auth/login/login";
import Registration from "./auth/registration/registration";
import hoopla from "./assets/img/hoopla.png";
import InfoBook from "./pages/infoBook/infoBook";
import prime from "./assets/img/prime.png";
import { Layout } from "./components/layout/layout";
import PostPage from "./pages/postPage/postPage";
import AboutPage from "./pages/aboutPage/aboutPage";
import InfoSlider from "./pages/infoSlider/infoSlider";
import Love from "./pages/love/love";
import Drama from "./pages/drama/drama";
import Fiction from "./pages/fiction/fiction";
import Thriller from "./pages/thriller/thriller";
import Fantasy from "./pages/fantasy/fantasy";
import Mystery from "./pages/mystery/mystery";
import Biography from "./pages/biography/biography";
import Horror from "./pages/horror/horror";
import Historical from "./pages/historical/historical";
import Comedy from "./pages/comedy/comedy";
import Adventure from "./pages/adventure/adventure";
import Selfhelp from "./pages/selfhelp/selfhelp";
import Books from "./pages/books/books";
import Audiobooks from "./pages/audiobooks/audiobooks";
import News from "./pages/news/news";
import Topbooks from "./pages/topbooks/topbooks";
import Topaudiobooks from "./pages/topaudiobooks/topaudiobooks";
import Infobooksbyid from "./pages/infobooksbyid/infobooksbyid";
import bookheader from "./assets/img/bookheader.jpeg";
import bookheader2 from "./assets/img/bookheader2.jpeg";
import bookheader3 from "./assets/img/bookheader3.jpeg"
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
              <ProtectedRoute>
                <Main hoopla={hoopla} prime={prime} bookheader={bookheader} bookheader2={bookheader2} bookheader3={bookheader3}/>
              </ProtectedRoute>
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
