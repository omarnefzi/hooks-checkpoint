import Carousel from "react-bootstrap/Carousel";

function CustomCarousel() {
  const styleImg = {
    height: 600,
  };
  return (
    <>
      <Carousel fade>
        <Carousel.Item>
          <img
            style={styleImg}
            className="d-block w-100"
            src="https://4.bp.blogspot.com/-5Jwwqa2l5Uo/XrUSR4XpEYI/AAAAAAAAK4Q/T_UXYI1pEN0PGhWrSJLoGo6RQB_7WwhRACK4BGAYYCw/s1600/Breaking_Bad.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={styleImg}
            className="d-block w-100"
            src="https://media.movieassets.com/static/images/items/movies/posters/4a1a7e399ad1774a6880f705b377f45b.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={styleImg}
            className="d-block w-100"
            src="https://tse4.mm.bing.net/th?id=OIP.nPAKvH8i2Iiiqd-_4EgHfwHaEK&pid=Api&P=0"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default CustomCarousel;
