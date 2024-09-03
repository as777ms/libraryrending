import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage = () => {
  const { t } = useTranslation();
  
  return (
    <div className="about-page-container">
      <h1 className="about-page-title">{t('welcome_message')}</h1>
      <p className="about-page-subtitle">
        {t('created_by', { date: new Date().toLocaleDateString() })}
      </p>
      <hr className="about-page-divider" />

      <h2 className="about-section-title">{t('about_title')}</h2>
      <p className="about-section-description">
        {t('about_description')}
        <ul className="about-item-list">
          <li className="about-list-item">{t('bookss')}</li>
          <li className="about-list-item">{t('courses')}</li>
          <li className="about-list-item">{t('software')}</li>
          <li className="about-list-item">{t('surprises')}</li>
        </ul>
      </p>

      <h2 className="about-section-title">{t('story_title')}</h2>
      <p className="about-section-description">
        {t('story_description')}
      </p>

      <h2 className="about-section-title">{t('expect_title')}</h2>
      <p className="about-section-description">
        {t('expect_description')}
        <ul className="about-item-list">
          <li className="about-list-item">{t('regular_updates')}</li>
          <li className="about-list-item">{t('community')}</li>
          <li className="about-list-item">{t('safe_environment')}</li>
        </ul>
      </p>

      <h2 className="about-section-title">{t('get_involved_title')}</h2>
      <p className="about-section-description">
        {t('get_involved_description')}
      </p>

      <h2 className="about-section-title">{t('contact_title')}</h2>
      <p className="about-section-description">
        {t('contact_description')}
      </p>
      <ul className="about-contact-list">
        <li>
          <a href="https://discordapp.com/users/1229349663925075989" className="about-contact-link">{t('discord_link')}</a>
        </li>
        <li>
          <a href="https://t.me/as77ms" className="about-contact-link">{t('telegram_link')}</a>
        </li>
        <li>
          <a href="https://github.com/as777ms" className="about-contact-link">{t('github_link')}</a>
        </li>
      </ul>

      <p className="about-page-footer">
        {t('thanks_message')}
      </p>
    </div>
  );
};

export default AboutPage;
