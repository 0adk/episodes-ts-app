import React from "react";
import { Store } from "../store/Store";
import { IEpisodeProps } from "../interfaces";
import { toggleFavAction } from '../store/Actions'


const EpisodeList = React.lazy<any>(() => import("../components/EpisodesList"));

export default function FavouritesPage(): JSX.Element {
  const { state, dispatch } = React.useContext(Store);

  const props: IEpisodeProps = {
    episodes: state.favourites,
    store: { state, dispatch },
    toggleFavAction,
    favourites: state.favourites,
  };

  return (
    <React.Suspense fallback={<div>loading...</div>}>
      <section className="episode-layout">
        <EpisodeList {...props} />
      </section>
    </React.Suspense>
  );
}
