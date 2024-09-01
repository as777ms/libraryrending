import { Link, Outlet, useNavigate } from 'react-router-dom';
import "./layout.css";
import Button from '../button/button';
import Acordionfooter from '../acordionfooter/acordionfooter';
import { destroyToken } from '../../utils/getToken';
import { useTranslation } from 'react-i18next';

const Layout = ({hoopla}) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const removeLink = (linkId) => {
    document.getElementById(linkId).style.display = 'none';
    navigate(`/${linkId}`);
  }

  return (
    <>
      <header className='header'>
        <div className="logo"></div>
        <div className="nav">
          <Link to="/" className='font-bold text-lg'>{t('Home')}</Link>
          <Link id="what-to-choose" to="/posts">{t('What to choose')}</Link>
          <Link to="/about" style={{ marginRight: "20px" }}>{t('About')}</Link>
          <Button 
            style={{
              backgroundColor: "transparent", 
              border: "2px solid grey", 
              width: "130px", 
              height: "40px", 
              color: "grey", 
              borderRadius: "10px", 
              cursor: "pointer"
            }}
          >
            {t('Button Text')}
          </Button>
        </div>
      </header>

      <nav className="category-nav">
        <div style={{width: "2%", marginTop: ""}}>
          <img src={hoopla} alt="" style={{width: "100%"}}/>
        </div>
        <Link to={"/books"}>{t('Books')}</Link>
        <Link to={"/audiobooks"}>{t('Audiobooks')}</Link>
        <Link to={"/news"}>{t('New Arrivals')}</Link>
        <Link to={"/topbooks"}>{t('Top Books')}</Link>
        <Link to={"/topaudiobooks"}>{t('Top Audiobooks')}</Link>
        <button style={{ margin: "", backgroundColor: "transparent", border: "2px solid grey", width: "130px", height: "40px", color: "grey", borderRadius: "10px", cursor: "pointer" }} onClick={() => { destroyToken(), navigate("/login") }}>{t('Log out')}</button>
      </nav>

      <main className="container">
        <Outlet />
      </main>

      <footer className="footer">
        <Acordionfooter />
      </footer>
    </>
  );
};

export { Layout };