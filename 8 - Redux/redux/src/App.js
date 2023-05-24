import "./styles.css";
import MoviePlaylist from "./components/MoviePlaylist";
import SongPlaylist from "./components/SongPlaylist";
import { resetMovies } from "./store";
import { useDispatch, useSelector } from "react-redux";

export default function App() {
  const movies = useSelector((state) => {
    return state.movies
  })
  const dispatch = useDispatch()
  const handleResetClick = () => {
    dispatch(resetMovies(movies))
  };

  return (
    <div className="container is-fluid">
      <button onClick={() => handleResetClick()} className="button is-danger">
        Reset Both Playlists
      </button>
      <hr />
      <MoviePlaylist />
      <hr />
      <SongPlaylist />
    </div>
  );
}
