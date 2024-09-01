import { Link } from "react-router-dom";
import "./categorycard.css";
import { useTranslation } from 'react-i18next';

const Categorycard = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="" style={{width: "600px", margin: "auto", marginTop: "130px"}}>
        <h1 style={{fontSize: "50px", fontWeight: "300", marginBottom: "1.25rem", lineHeight: "1.25", textAlign: "center"}}>
          {t('explore_new_worlds')}
        </h1>
        <p style={{width: "500px", marginLeft: "90px", margin: "auto", textAlign: "center", fontSize: "20px"}}>
          {t('audiobooks_for_everyone')}
        </p>
      </div>
      <div className="">
        <div className="category-container">
          <div className="category-card">
            <Link to={'/drama'} style={{color: "black"}}>
              <h3>{t('drama')}</h3>
              <p>{t('drama_desc')}</p>
            </Link>
          </div>
          <div className="category-card">
            <Link to={'/love'} style={{color: "black"}}>
              <h3>{t('love')}</h3>
              <p>{t('love_desc')}</p>
            </Link>
          </div>
          <div className="category-card">
            <Link to={'/fiction'} style={{color: "black"}}>
              <h3>{t('science_fiction')}</h3>
              <p>{t('science_fiction_desc')}</p>
            </Link>
          </div>
          <div className="category-card">
            <Link to={"/thriller"} style={{color: "black"}}>
              <h3>{t('thriller')}</h3>
              <p>{t('thriller_desc')}</p>
            </Link>
          </div>
          <div className="category-card">
            <Link to={"/fantasy"} style={{color: "black"}}>
              <h3>{t('fantasy')}</h3>
              <p>{t('fantasy_desc')}</p>
            </Link>
          </div>
          <div className="category-card">
            <Link to={"/mystery"} style={{color: "black"}}>
              <h3>{t('mystery')}</h3>
              <p>{t('mystery_desc')}</p>
            </Link>
          </div>
          <div className="category-card">
            <Link to={"/biography"} style={{color: "black"}}>
              <h3>{t('biography')}</h3>
              <p>{t('biography_desc')}</p>
            </Link>
          </div>
          <div className="category-card">
            <Link to={"/horror"} style={{color: "black"}}>
              <h3>{t('horror')}</h3>
              <p>{t('horror_desc')}</p>
            </Link>
          </div>
          <div className="category-card">
            <Link to={"/historicalfiction"} style={{color: "black"}}>
              <h3>{t('historical_fiction')}</h3>
              <p>{t('historical_fiction_desc')}</p>
            </Link>
          </div>
          <div className="category-card">
            <Link to={"/comedy"} style={{color: "black"}}>
              <h3>{t('comedy')}</h3>
              <p>{t('comedy_desc')}</p>
            </Link>
          </div>
          <div className="category-card">
            <Link to={"/adventure"} style={{color: "black"}}>
              <h3>{t('adventure')}</h3>
              <p>{t('adventure_desc')}</p>
            </Link>
          </div>
          <div className="category-card">
            <Link to={"/selfhelp"} style={{color: "black"}}>
              <h3>{t('self_help')}</h3>
              <p>{t('self_help_desc')}</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Categorycard;
