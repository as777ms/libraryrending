import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTodos } from '../../store/reducers/todolist/todolistSlice';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Mapaftercard = () => {
  const { data, loading, error } = useSelector((store) => store.todolist);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 9; // Number of items to show per page
  const columnsPerRow = 3; // Number of columns per row

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  if (loading) return <div className="text-center text-xl mt-10">{t('loading')}</div>;
  if (error) return <div className="text-center text-red-500 mt-10">{t('error')}: {error.message}</div>;
  if (!data || data.length === 0) return <div className="text-center text-gray-500 mt-10">{t('no_data')}</div>;

  // Slice data to show only the items for the current page
  const itemsToDisplay = data.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  const handleNext = () => {
    if ((currentPage + 1) * itemsPerPage < data.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="container mx-auto mt-12 text-center px-4 md:px-6 lg:px-8">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
        {t('best_business_books')}
      </h1>
      <p className="text-base md:text-lg lg:text-xl text-gray-550 mb-12">
        {t('business_non_fiction_literature')}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {itemsToDisplay.map((item) => (
          <div
            key={item.id}
            className="w-full p-4 hover:shadow-2xl transition-shadow duration-300 rounded-lg bg-white"
          >
            <Link to={`/${item.id}`} className="block">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
            </Link>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8 space-x-4">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 0}
          className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 disabled:opacity-50"
        >
          {t('previous')}
        </button>
        <button
          onClick={handleNext}
          disabled={(currentPage + 1) * itemsPerPage >= data.length}
          className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 disabled:opacity-50"
        >
          {t('next')}
        </button>
      </div>
    </div>
  );
};

export default Mapaftercard;
