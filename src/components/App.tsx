import React from "react";
import { Store } from "../store/Store";
import { Link } from "@reach/router";

export default function App(props: any): JSX.Element {
  const { state } = React.useContext(Store);
  return (
    <>
      <header className="header">
        <div>
          <h1>The Office</h1>
          <p>Pic your fav episode!</p>
        </div>
        <div>
          <Link to="/episodes-ts-app">Home</Link>
          <Link to="/episodes-ts-app/favourites">
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
