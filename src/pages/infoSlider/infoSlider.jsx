import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getTodosByIdSlider } from "../../store/reducers/todoByIdinSlider/todoByIdinSliderSplice";
import { motion } from "framer-motion";
import { getTodos } from "../../store/reducers/todolist/todolistSlice";

const InfoSlider = () => {
  const { id } = useParams();
  const { items } = useSelector((state) => state.todoByIdinSlider);
  const { data } = useSelector((state) => state.todolist);
  const dispatch = useDispatch();

  const [visibleRecommendations, setVisibleRecommendations] = useState(3);

  useEffect(() => {
    dispatch(getTodosByIdSlider(id));
    dispatch(getTodos());
  }, [dispatch, id]);

  const handleLoadMore = () => {
    setVisibleRecommendations((prevVisible) => prevVisible + 3);
  };

  return (
    <div className="bg-gray-900 text-white p-4">
      <div className="max-w-7xl mx-auto">
        {items?.map((el) => (
          <motion.div
            key={el.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg flex flex-col md:flex-row">
              <div className="md:w-1/3">
                <img
                  src={el.img}
                  alt={el.nameOfBook}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="md:w-2/3 p-6">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                  {el.nameOfBook}
                </h3>
                <h4 className="text-lg text-gray-400 mb-4">{el.author}</h4>
                <div className="text-sm md:text-base">
                  <p>
                    <strong>Published Year:</strong> {el.publishedYear}
                  </p>
                  <p>
                    <strong>Type:</strong> {el.type}
                  </p>
                  <p>
                    <strong>Downloads:</strong> {el.downloads}
                  </p>
                  <p>
                    <strong>Language:</strong> {el.language}
                  </p>
                  <p>
                    <strong>Copyright:</strong> {el.copyright}
                  </p>
                </div>
                <a
                  href={el.linkOfRead}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-md text-white text-center"
                >
                  Read Online
                </a>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Recommendations Section */}
        <div className="mt-12">
          <h4 className="text-2xl font-bold mb-4">Recommended Books</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {data?.slice(0, visibleRecommendations).map((item) => (
              <div
                className="bg-gray-800 p-4 rounded-lg shadow-lg"
                key={item.id}
              >
                <Link to={`/${item.id}`} key={item.id} className="block">
                  <img
                    src={item.img}
                    alt={item.nameOfBook}
                    className="w-full h-48 object-cover mb-2 rounded"
                  />
                  <p className="text-lg font-semibold">{item.nameOfBook}</p>
                </Link>
              </div>
            ))}
          </div>
          {visibleRecommendations < data?.length && (
            <button
              onClick={handleLoadMore}
              className="mt-6 px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-md text-white"
            >
              Load More
            </button>
          )}
        </div>

        {/* Advertisement Section */}
        <div className="mt-12 text-center">
          <h4 className="text-2xl font-bold mb-4">Advertisement</h4>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <p>Your Ad Here!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSlider;
