import { Link, Outlet, useNavigate } from 'react-router-dom';
import "./layout.css";
import Button from '../button/button';
import Acordionfooter from '../acordionfooter/acordionfooter';
import { destroyToken } from '../../utils/getToken';
import { useTranslation } from 'react-i18next';

const Layout = ({ hoopla }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const removeLink = (linkId) => {
    document.getElementById(linkId).style.display = 'none';
    navigate(`/${linkId}`);
  }

  return (
    <>
      <header className='header'>
        <div className="header-content">
          <div className="logo"></div>
          <nav className="nav">
            <Link to="/" className='nav-link'>{t('Home')}</Link>
            <Link id="what-to-choose" to="/posts" className='nav-link'>{t('What to choose')}</Link>
            <Link to="/about" className='nav-link'>{t('About')}</Link>
            <Button className="custom-button">
              {t('Button Text')}
            </Button>
          </nav>
        </div>
      </header>

      <nav className="category-nav">
        <div className="logo-container">
          <img src={hoopla} alt="" className="hoopla-logo" />
        </div>
        <div className="category-links">
          <Link to="/books" className="category-link">{t('Books')}</Link>
          <Link to="/audiobooks" className="category-link">{t('Audiobooks')}</Link>
          <Link to="/news" className="category-link">{t('New Arrivals')}</Link>
          <Link to="/topbooks" className="category-link">{t('Top Books')}</Link>
          <Link to="/topaudiobooks" className="category-link">{t('Top Audiobooks')}</Link>
          <button 
            className="custom-button"
            onClick={() => { destroyToken(); navigate("/login"); }}
          >
            {t('Log out')}
          </button>
        </div>
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