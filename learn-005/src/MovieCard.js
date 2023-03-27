import Card from "react-bootstrap/Card";
import CustomButton from "./components/CustomButton";

const MovieCard = ({ title, description, rating, posterURL }) => {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img style={{ height: 200 }} variant="top" src={posterURL} />
        <Card.Body>
          <Card.Title>Title: {title}</Card.Title>
          <Card.Text>
            Description : {description}
            Rating: {rating}
          </Card.Text>
          <CustomButton text="watch now" />
        </Card.Body>
      </Card>
    </>
  );
};

export default MovieCard;
