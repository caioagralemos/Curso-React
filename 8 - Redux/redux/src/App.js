import "./styles.css";
import MoviePlaylist from "./components/MoviePlaylist";
import SongPlaylist from "./components/SongPlaylist";
import { reset } from "./store";
import { useDispatch, useSelector } from "react-redux";

export default function App() {
  const movies = useSelector((state) => {
    return state.movies
  })
  const dispatch = useDispatch()
  const handleResetClick = () => {
    dispatch(reset()) // despacha uma ação com type passado por parâmetro n
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
