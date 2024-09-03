import { Link, Outlet, useNavigate } from 'react-router-dom';
import "./layout.css";
import Button from '../button/button';
import Acordionfooter from '../acordionfooter/acordionfooter';
import { destroyToken } from '../../utils/getToken';
import { useTranslation } from 'react-i18next';
import ThemeToggle from '../../ThemeToggle';
import { Suspense } from 'react';
import Loader from '../loader/loader';
const Layout = ({ hoopla }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleLogout = () => {
    destroyToken();
    navigate("/login");
  };

  return (
    <>
      <header className='header'>
        <div className="header-logo">
          {/* Your logo image or text here */}
        </div>
        <nav className="header-nav">
        <ThemeToggle /> 
          <Link to="/" className='nav-link home-link'>{t('Home')}</Link>
          <Link to="/posts" className='nav-link'>{t('What to choose')}</Link>
          <Link to="/about" className='nav-link'>{t('About')}</Link>
          <Button className="custom-button">{t('Button Text')}</Button>
          
        </nav>
      </header>

      <nav className="category-nav">
        <Link to="/books" className="category-link">{t('Books')}</Link>
        <Link to="/audiobooks" className="category-link">{t('Audiobooks')}</Link>
        <Link to="/news" className="category-link">{t('New Arrivals')}</Link>
        <Link to="/topbooks" className="category-link">{t('Top Books')}</Link>
      </nav>

      <main className="main-container">
        <Suspense fallback={<Loader />}>
        <Outlet />
        </Suspense>
      </main>

      <footer className="footer">
        <Acordionfooter />
      </footer>
    </>
  );
};

export { Layout };