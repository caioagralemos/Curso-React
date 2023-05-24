import { useDispatch, useSelector } from "react-redux";
import { createRandomSong } from "../data";
import { addSong, removeSong } from "../store";

function SongPlaylist() {
  const dispatch = useDispatch() // ativando o redux nesse arquivo
  // To Do:
  // Get list of songs
  const songPlaylist = useSelector((state) => {
    return state.songs // pegando o state geral pelo hook useSelector
  })

  const handleSongAdd = (song) => {
    dispatch(addSong(song))
  };
  const handleSongRemove = (song) => {
    // To Do:
    // Remove song from list of songs
    dispatch(removeSong(song))
  };

  const renderedSongs = songPlaylist.map((song) => {
    return (
      <li key={song}>
        {song}
        <button
          onClick={() => handleSongRemove(song)}
          className="button is-danger"
        >
          X
        </button>
      </li>
    );
  });

  return (
    <div className="content">
      <div className="table-header">
        <h3 className="subtitle is-3">Song Playlist</h3>
        <div className="buttons">
          <button
            onClick={() => handleSongAdd(createRandomSong())}
            className="button is-link"
          >
            + Add Song to Playlist
          </button>
        </div>
      </div>
      <ul>{renderedSongs}</ul>
    </div>
  );
}

export default SongPlaylist;
