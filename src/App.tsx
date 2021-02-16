import React from "react";
import { Store } from "./Store";
import { Link } from "@reach/router";

export default function App(props: any): JSX.Element {
  const { state } = React.useContext(Store);
  return (
    <>
      <header className="header">
        <div>
          <h1>Rick and Morty</h1>
          <p>Pic your fav episode!</p>
        </div>
        <div>
          <Link to="/">Home</Link>
          <Link to="/favourites">
            <p>
              {state.favourites.length === 0
                ? "No fav episodes"
                : `You have ${state.favourites.length} favourite episodes`}
            </p>
          </Link>
        </div>
      </header>
      {props.children}
    </>
  );
}
