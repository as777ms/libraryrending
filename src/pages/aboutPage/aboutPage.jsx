import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage = () => {
  const { t } = useTranslation();
  
  return (
    <div className="about-page" style={{
      backgroundColor: '#f8f9fa',
      padding: '2rem',
      fontFamily: 'Arial, sans-serif',
    }}>
      <h1 style={{
        color: '#343a40',
        textAlign: 'center',
        marginBottom: '2rem',
      }}>{t('welcome_message')}</h1>
      <p style={{
        textAlign: 'center',
        color: '#6c757d',
        marginBottom: '2rem',
      }}>{t('created_by', { date: new Date().toLocaleDateString() })}</p>
      <hr style={{
        borderColor: '#dee2e6',
        marginBottom: '2rem',
      }} />

      <h2 style={{
        color: '#343a40',
        marginBottom: '1rem',
      }}>{t('about_title')}</h2>
      <p style={{
        color: '#6c757d',
        marginBottom: '2rem',
      }}>
        {t('about_description')}
        <ul style={{
          listStyle: 'disc',
          padding: '0 1.5rem',
          marginBottom: '1rem',
        }}>
          <li style={{
            color: '#343a40',
          }}>{t('bookss')}</li>
          <li style={{
            color: '#343a40',
          }}>{t('courses')}</li>
          <li style={{
            color: '#343a40',
          }}>{t('software')}</li>
          <li style={{
            color: '#343a40',
          }}>{t('surprises')}</li>
        </ul>
      </p>

      <h2 style={{
        color: '#343a40',
        marginBottom: '1rem',
      }}>{t('story_title')}</h2>
      <p style={{
        color: '#6c757d',
        marginBottom: '2rem',
      }}>
        {t('story_description')}
      </p>

      <h2 style={{
        color: '#343a40',
        marginBottom: '1rem',
      }}>{t('expect_title')}</h2>
      <p style={{
        color: '#6c757d',
        marginBottom: '2rem',
      }}>
        {t('expect_description')}
        <ul style={{
          listStyle: 'disc',
          padding: '0 1.5rem',
        }}>
          <li style={{
            color: '#343a40',
          }}>{t('regular_updates')}</li>
          <li style={{
            color: '#343a40',
          }}>{t('community')}</li>
          <li style={{
            color: '#343a40',
          }}>{t('safe_environment')}</li>
        </ul>
      </p>

      <h2 style={{
        color: '#343a40',
        marginBottom: '1rem',
      }}>{t('get_involved_title')}</h2>
      <p style={{
        color: '#6c757d',
        marginBottom: '2rem',
      }}>
        {t('get_involved_description')}
      </p>

      <p style={{
        textAlign: 'center',
        color: '#6c757d',
        marginTop: '2rem',
      }}>
        {t('thanks_message')}
      </p>
    </div>
  );
};

export default AboutPage;
