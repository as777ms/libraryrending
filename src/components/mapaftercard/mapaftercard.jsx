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

  if (loading) return <div className="text-center text-xl mt-10">{t('loading')}</div>;
  if (error) return <div className="text-center text-red-500 mt-10">{t('error')}{error.message}</div>;
  if (!data || data.length === 0) return <div className="text-center text-gray-500 mt-10">{t('no_data')}</div>;

  // Group books into rows of 2 or 3
  const rows = [];
  for (let i = 0; i < data.length; i += (i % 2 === 0) ? 3 : 2) {
    rows.push(data.slice(i, Math.min(i + 3, data.length)));
  }

  return (
    <div className="container mx-auto mt-24 text-center px-4 md:px-8 lg:px-16">
      <h1 className="font-bold text-4xl md:text-5xl mb-4 text-gray-700">
        {t('best_business_books')}
      </h1>
      <p className="text-lg md:text-xl text-gray-600 mb-8">
        {t('business_non_fiction_literature')}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex flex-col justify-center items-center">
            {row.map((item) => (
              <div
                key={item.id}
                className="w-full p-2 hover:shadow-lg transition-shadow duration-300 rounded-lg bg-white"
              >
                <Link to={`/${item.id}`} className="block text-center">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-[500px] object-cover rounded-md mb-4"
                  />
                  <h3 className="text-lg md:text-xl font-medium text-gray-800 mb-2">
                    {item.title}
                  </h3>
                </Link>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mapaftercard;