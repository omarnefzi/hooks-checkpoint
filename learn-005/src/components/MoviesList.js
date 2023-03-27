// import MovieCard from "../MovieCard";
// import { useState } from "react";
// import Data from "./Data";
// import Form from "react-bootstrap/Form";
// import InputGroup from "react-bootstrap/InputGroup";
// import Button from "react-bootstrap/esm/Button";

// const MoviesList = () => {
  
//   const [movies,setMovies]=useState(Data)
  





//   return (
//     <>
//       <h1 className="text-center p-5">our movies</h1>
//       <div className="container mb-3">

//       </div>
//       <div className="container">
//       <InputGroup  className="mb-3  ">
//       <Form.Control  
//         placeholder='search by title'
//       /> 
//       </InputGroup>
//         <div className="row justify-content-between">
//           {movies.map((movie) => {
//             return (
//               <MovieCard
//                 key={movie.id}
//                 title={movie.title}
//                 description={movie.description}
//                 rating={movie.rating}
//                 posterURL={movie.posterURL}
//               />
//             );
//           })}
//         </div>
//       </div>
//       <div >
    
//     <InputGroup  className="mb-3  ">
//       <Form.Control   name="title" 
//         placeholder='add title'
//       /> 
//         <Form.Control  name="description"
//         placeholder='add description'
//       />
//         <Form.Control  name="posterURL"
//         placeholder='add posterURL'
//       />
//         <Form.Control  name="rating"
//         placeholder='add rating'
//       />
     
//       <Button  variant="primary">add</Button>
//     </InputGroup>

   
// </div>

//     </>
//   );
// };

// export default MoviesList;
import MovieCard from "../MovieCard";
import { useState } from "react";
import Data from "./Data";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/esm/Button";

const MoviesList = () => {
  const [movies, setMovies] = useState(Data);
  const [searchValue, setSearchValue] = useState("");
  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: "",
  });

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  const handleSearchInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleAddMovieInputChange = (event) => {
    setNewMovie({
      ...newMovie,
      [event.target.name]: event.target.value,
    });
  };

  const handleAddMovieSubmit = (event) => {
    event.preventDefault();
    const id = movies.length + 1;
    const newMovieWithId = { ...newMovie, id };
    setMovies([...movies, newMovieWithId]);
    setNewMovie({
      title: "",
      description: "",
      posterURL: "",
      rating: "",
    });
  };

  return (
    <>
      <h1 className="text-center p-5">our movies</h1>
      <div className="container mb-3"></div>
      <div className="container">
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="search by title"
            value={searchValue}
            onChange={handleSearchInputChange}
          />
        </InputGroup>
        <div className="row justify-content-between">
          {filteredMovies.map((movie) => {
            return (
              <MovieCard
                key={movie.id}
                title={movie.title}
                description={movie.description}
                rating={movie.rating}
                posterURL={movie.posterURL}
              />
            );
          })}
        </div>
      </div>
      <div>
        <Form onSubmit={handleAddMovieSubmit}>
          <InputGroup className="mb-3">
            <Form.Control
              name="title"
              placeholder="add title"
              value={newMovie.title}
              onChange={handleAddMovieInputChange}
            />
            <Form.Control
              name="description"
              placeholder="add description"
              value={newMovie.description}
              onChange={handleAddMovieInputChange}
            />
            <Form.Control
              name="posterURL"
              placeholder="add poster URL"
              value={newMovie.posterURL}
              onChange={handleAddMovieInputChange}
            />
            <Form.Control
              name="rating"
              placeholder="add rating"
              value={newMovie.rating}
              onChange={handleAddMovieInputChange}
            />

            <Button variant="primary" type="submit">
              add
            </Button>
          </InputGroup>
        </Form>
      </div>
    </>
  );
};

export default MoviesList;
