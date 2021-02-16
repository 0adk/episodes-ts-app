/**
 * All the interfaces
 */

export type TDispatch = React.Dispatch<IAction>

export interface IState {
    episodes: Array<IEpisode>;
    favourites: Array<IEpisode>;
}
  
export interface IAction {
    type: string;
    payload: any;
}

export interface IEpisode {
    airdate: string;
    airstamp: string;
    airtime: string;
    id: number;
    image: {
      medium: string;
      original: string;
    };
    name: string;
    number: number;
    runtime: number;
    season: number;
    summary: string;
    url: string;
    isFav: boolean;
}

export interface IEpisodeProps {
    episodes: Array<IEpisode>,
    store: {state: IState, dispatch: TDispatch},
    toggleFavAction: (state: IState, dispatch: TDispatch, episode: IEpisode) => IAction,
    favourites: Array<IEpisode>
  }