import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <div className="about-page p-10 rounded-3xl shadow-2xl max-w-4xl mx-auto">
      <h1 className="about-title text-5xl font-extrabold tracking-tight text-center mb-8">{t('welcome_message')}</h1>
      <p className="about-subtitle text-xl text-center mb-8">
        {t('created_by', { date: new Date().toLocaleDateString() })}
      </p>
      <hr className="about-divider border-t-2 my-8" />

      <div className="mb-8">
        <h2 className="section-title text-3xl font-bold mb-4">{t('about_title')}</h2>
        <p className="section-description text-lg mb-6">{t('about_description')}</p>
        <ul className="about-list list-inside space-y-2">
          <li className="list-item text-lg font-medium">{t('bookss')}</li>
          <li className="list-item text-lg font-medium">{t('courses')}</li>
          <li className="list-item text-lg font-medium">{t('software')}</li>
          <li className="list-item text-lg font-medium">{t('surprises')}</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="section-title text-3xl font-bold mb-4">{t('story_title')}</h2>
        <p className="section-description text-lg mb-6">{t('story_description')}</p>
      </div>

      <div className="mb-8">
        <h2 className="section-title text-3xl font-bold mb-4">{t('expect_title')}</h2>
        <p className="section-description text-lg mb-6">{t('expect_description')}</p>
        <ul className="about-list list-inside space-y-2">
          <li className="list-item text-lg font-medium">{t('regular_updates')}</li>
          <li className="list-item text-lg font-medium">{t('community')}</li>
          <li className="list-item text-lg font-medium">{t('safe_environment')}</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="section-title text-3xl font-bold mb-4">{t('get_involved_title')}</h2>
        <p className="section-description text-lg mb-6">{t('get_involved_description')}</p>
      </div>

      <div className="mb-8">
        <h2 className="section-title text-3xl font-bold mb-4">{t('contact_title')}</h2>
        <p className="section-description text-lg mb-6">{t('contact_description')}</p>
        <ul className="contact-list space-y-4 text-center">
          <li>
            <a href="https://discordapp.com/users/1229349663925075989" className="contact-link text-xl font-semibold hover:underline">{t('discord_link')}</a>
          </li>
          <li>
            <a href="https://t.me/as77ms" className="contact-link text-xl font-semibold hover:underline">{t('telegram_link')}</a>
          </li>
          <li>
            <a href="https://github.com/as777ms" className="contact-link text-xl font-semibold hover:underline">{t('github_link')}</a>
          </li>
        </ul>
      </div>

      <p className="about-footer text-center text-lg mt-8">
        {t('thanks_message')}
      </p>
    </div>
  );
};

export default AboutPage;
