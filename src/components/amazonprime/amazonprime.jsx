import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Amazonprime = ({ prime }) => {
  const { t } = useTranslation();

  return (
    <div
      style={{
        backgroundColor: 'var(--background-gradient)',
        minHeight: '200px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          backgroundColor: 'var(--prime-background)',
          padding: '20px 50px',
          borderRadius: '15px',
          marginBottom: '40px',
          width: '100%',
          maxWidth: '900px',
          display: 'flex',
          alignItems: 'center',
          boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.3)',
        }}
      >
        <img src={prime} alt={t('primeLogoAlt')} style={{ height: '50px', marginRight: '20px' }} />
        <div>
          <p
            style={{
              color: 'var(--prime-text-color)',
              fontSize: '22px',
              fontWeight: 'bold',
              marginBottom: '5px',
            }}
          >
            {t('primeMemberExclusive')}
          </p>
          <p style={{ color: 'var(--text-color)', fontSize: '18px' }}>
            {t('newAudibleSubscribersOffer')}
          </p>
        </div>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        style={{
          color: 'var(--text-color)',
          fontWeight: 'bold',
          fontSize: '28px',
          textAlign: 'center',
          maxWidth: '700px',
          lineHeight: '1.3',
        }}
      >
        {t('membersGetEvenMore')}
      </motion.h2>
    </div>
  );
};

export default Amazonprime;