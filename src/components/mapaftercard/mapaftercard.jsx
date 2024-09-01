import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTodos } from '../../store/reducers/todolist/todolistSlice';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Mapaftercard = () => {
  const { data, loading, error } = useSelector((store) => store.todolist);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  if (loading) return <div>{t('loading')}</div>;
  if (error) return <div>{t('error')}{error.message}</div>;
  if (!data || data.length === 0) return <div>{t('no_data')}</div>;

  // Group books into rows of 2 or 3
  const rows = [];
  for (let i = 0; i < data.length; i += (i % 2 === 0) ? 3 : 2) {
    rows.push(data.slice(i, Math.min(i + 3, data.length)));
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '100px', width: "70%", margin: "auto" }}>
      <h1 style={{ fontWeight: 700, fontSize: '2.5rem', marginBottom: '0.5rem', color: 'grey' }}>
        {t('best_business_books')}
      </h1>
      <p style={{ fontSize: '1.1rem', color: 'grey' }}>
        {t('business_non_fiction_literature')}
      </p>

      {rows.map((row, rowIndex) => (
        <div key={rowIndex} style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          {row.map((item) => (
            <div key={item.id} style={{ margin: '10px', width: '200px' }}>
              <Link to={`/${item.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <img
                  src={item.img}
                  alt={item.title}
                  style={{ width: '100%', height: '250px', objectFit: 'cover', marginBottom: '10px' }} 
                />
                <h3 style={{ fontSize: '1.1rem', color: 'black' }}>{item.title}</h3> 
              </Link>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Mapaftercard;