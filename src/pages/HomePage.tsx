import React from "react";
import { Store } from "../store/Store";
import { IEpisodeProps } from "../interfaces";
import { fetchDataAction, toggleFavAction } from '../store/Actions'

const EpisodeList = React.lazy<any>(() => import("../components/EpisodesList"));

export default function HomePage() {
  const { state, dispatch } = React.useContext(Store);

  React.useEffect(() => {
    state.episodes.length === 0 && fetchDataAction(dispatch);
  });

  const props: IEpisodeProps = {
    episodes: state.episodes,
    store: { state, dispatch },
    toggleFavAction,
    favourites: state.favourites,
  };

  return (
    <>
      <React.Suspense fallback={<div>loading...</div>}>
        <section className="episode-layout">
          <EpisodeList {...props} />
        </section>
      </React.Suspense>
    </>
  );
}
