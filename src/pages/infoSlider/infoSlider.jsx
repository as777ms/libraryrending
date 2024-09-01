import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getTodosByIdSlider } from "../../store/reducers/todoByIdinSlider/todoByIdinSliderSplice";
import { Container, Grid, Card, CardContent, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import "./InfoSlider.css";
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
    <div className="main">
      <Container maxWidth="lg">
        {items?.map((el) => (
          <motion.div key={el.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
            <Card className="info-card">
              <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                  <img src={el.img} alt={el.nameOfBook} className="book-image" />
                </Grid>
                <Grid item xs={12} md={8}>
                  <CardContent>
                    <Typography variant="h3" component="div" gutterBottom>{el.nameOfBook}</Typography>
                    <Typography variant="h5" color="textSecondary">{el.author}</Typography>
                    <div className="book-info">
                      <Typography variant="body1" component="div">
                        <strong>Published Year:</strong> {el.publishedYear} 
                      </Typography>
                      <Typography variant="body1" component="div">
                        <strong>Type:</strong> {el.type}
                      </Typography>
                      <Typography variant="body1" component="div">
                        <strong>Downloads:</strong> {el.downloads}
                      </Typography>
                      <Typography variant="body1" component="div">
                        <strong>Language:</strong> {el.language}
                      </Typography>
                      <Typography variant="body1" component="div">
                        <strong>Copyright:</strong> {el.copyright}
                      </Typography>
                    </div>
                    <Button variant="contained" color="primary" href={el.linkOfRead} target="_blank" className="read-button">Read Online</Button>
                  </CardContent>
                </Grid>
              </Grid>
            </Card>
          </motion.div>
        ))}

        {/* Recommendations Section */}
        <div className="recommendations-section" style={{backgroundColor: "transparent"}}>
          <Typography variant="h4" component="div" gutterBottom>Recommended Books</Typography>
          <div className="recommendations" style={{backgroundColor: "transparent"}}>
            {data?.slice(0, visibleRecommendations).map((item) => (
              <div className="recommendation" key={item.id} style={{width: "200px", color: "grey"}}>
                <Link to={`/${item.id}`} key={item.id} className="recommendation-link">
                  <img src={item.img} alt={item.nameOfBook} className="recommendation-image" style={{width: "300px", height: "300px"}}/>
                  <Typography variant="body2" style={{color: "white", fontSize: "20px"}}>{item.nameOfBook}</Typography>
                </Link>
              </div>
            ))}
          </div>
          {visibleRecommendations < data?.length && (
            <Button variant="contained" color="primary" onClick={handleLoadMore}>
              Load More
            </Button>
          )}
        </div>
        <div className="advertisement-section">
          <Typography variant="h4" component="div" gutterBottom>Advertisement</Typography>
          <div className="advertisement" style={{backgroundColor: "transparent"}}>
            <Typography variant="body1">Your Ad Here!</Typography>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default InfoSlider;
