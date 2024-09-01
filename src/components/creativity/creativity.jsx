import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import BookIcon from '@mui/icons-material/Book';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const Creativity = () => {
  const { t } = useTranslation();

  return (
    <div
      style={{
        textAlign: 'center',
        backgroundColor: '', // Dark background for modern feel
        color: '#eaeaea', // Light text color for contrast
        padding: '50px 20px',
        borderRadius: '20px',
        maxWidth: '1200px',
        margin: 'auto',
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          fontSize: '36px',
          marginBottom: '40px',
          fontWeight: 'bold',
          color: '#00bfff', // Sky blue color for the heading
        }}
      >
        {t('discoverNextGreatRead')}
      </motion.h2>

      <p style={{ fontSize: '18px', marginBottom: '40px', color: '#a9a9a9' }}>
        {t('exploreOurFreeLibrary')}
      </p>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '30px',
          flexWrap: 'wrap', // Allows wrapping on smaller screens
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            borderRadius: '15px',
            padding: '30px',
            flex: '1',
            minWidth: '280px', // Ensures the cards don't get too small on smaller screens
            maxWidth: '400px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)', // Strong shadow for depth
            backgroundColor: '#162447', // Dark card background
          }}
        >
          <BookIcon style={{ fontSize: '40px', marginBottom: '10px', color: '#00bfff' }} />
          <h3
            style={{
              fontSize: '20px',
              marginBottom: '15px',
              fontWeight: 'bold',
              color: '#eaeaea',
            }}
          >
            {t('pickOneBook')}
          </h3>
          <p style={{ fontSize: '14px', color: '#a9a9a9' }}>
            {t('pickOneBookDescription')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            borderRadius: '15px',
            padding: '30px',
            flex: '1',
            minWidth: '280px', // Ensures the cards don't get too small on smaller screens
            maxWidth: '400px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)',
            backgroundColor: '#162447',
          }}
        >
          <LibraryBooksIcon style={{ fontSize: '40px', marginBottom: '10px', color: '#00bfff' }} />
          <h3
            style={{
              fontSize: '20px',
              marginBottom: '15px',
              fontWeight: 'bold',
              color: '#eaeaea',
            }}
          >
            {t('thousandsOfTitles')}
          </h3>
          <p style={{ fontSize: '14px', color: '#a9a9a9' }}>
            {t('thousandsOfTitlesDescription')}
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        style={{ paddingTop: '40px' }}
      >

<Link to={'/books'} >
<Button
          variant="contained"
          sx={{
            padding: '12px 24px',
            borderRadius: '20px',
            background: 'linear-gradient(90deg, rgba(29,78,216,1) 0%, rgba(125,211,252,1) 100%)',
            color: '#ffffff',
            fontSize: '18px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
            '&:hover': {
              background: 'linear-gradient(90deg, rgba(29,78,216,1) 0%, rgba(125,211,252,1) 80%)',
              boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.3)',
            },
            transform: 'scale(1.05)',
            transition: 'transform 0.3s ease'
          }}
        >
          {t('startReading')}
          
        
          </Button>
        </Link>
      </motion.div>
    </div>
  );
};

export default Creativity;