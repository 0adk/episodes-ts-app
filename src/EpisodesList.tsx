import React from "react";
import { IEpisode } from "./interfaces";

export default function EpisodesList(props: any): Array<JSX.Element> {
  const { episodes, toggleFavAction, favourites, store } = props;
  const { state, dispatch} = store

  return episodes.map((episode: IEpisode) => {
    var isImage = episode.image
    return (
      <section key={episode.id} className="episode-box">
        <img src={isImage? episode.image.medium : "https://via.placeholder.com/250x140.png?text=No+Image+Available"} alt={`Rick and Mort ${episode.name}`} />
        <div>{episode.name}</div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p>
            Season {episode.season} Episode {episode.number}
          </p>
          <button type="button" onClick={() => toggleFavAction(state, dispatch, episode)}>
            {favourites.find((fav: IEpisode) => fav.id === episode.id)
              ? "remove from fav"
              : "add to fav"}
          </button>
        </div>
      </section>
    );
  });
}
