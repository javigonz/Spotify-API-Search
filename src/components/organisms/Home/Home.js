import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import {
  initGetResult,
  initViewMoreAlbums,
  initViewMoreTracks,
  initViewMoreArtists,
} from "../../../store/actions/result";
import Search from "../../molecules/Search";
import Header from "../../molecules/Header";
import Loading from "../../molecules/Loading";
import SearchResult from "../../molecules/SearchResult";
import { setSessionExpired } from "../../../helpers/helpers";
import "./Home.css";

export const HomeUnconnected = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("albums");
  const [isValidSearch, setIsValidSearch] = useState(true);
  const { isValidSession, history } = props;

  const handleSearch = (searchTerm) => {
    if (isValidSession()) {
      setIsLoading(true);
      props.dispatch(initGetResult(searchTerm)).then(() => {
        setIsValidSearch(true);
        setIsLoading(false);
        setSelectedCategory("albums");
      });
    } else {
      setSessionExpired();
    }
  };

  const handleSearchInvalid = () => setIsValidSearch(false);

  const paginationNext = async (type) => {
    if (isValidSession()) {
      const { dispatch, albums, artists, tracks } = props;
      setIsLoading(true);
      switch (type) {
        case "albums":
          await dispatch(initViewMoreAlbums(albums.next));
          break;
        case "artists":
          await dispatch(initViewMoreArtists(artists.next));
          break;
        case "tracks":
          await dispatch(initViewMoreTracks(tracks.next));
          break;
        default:
      }
      setIsLoading(false);
    } else {
      setSessionExpired();
    }
  };

  const setCategory = (category) => {
    setSelectedCategory(category);
  };

  const { albums, artists, tracks } = props;
  const result = { albums, artists, tracks };

  return (
    <React.Fragment>
      {isValidSession() ? (
        <div className="home">
          <Header />
          <Search
            handleSearch={handleSearch}
            handleSearchInvalid={handleSearchInvalid}
          />
          {isValidSearch && (
            <SearchResult
              result={result}
              paginationNext={paginationNext}
              setCategory={setCategory}
              selectedCategory={selectedCategory}
              isValidSession={isValidSession}
            />
          )}
          <Loading open={isLoading} />
        </div>
      ) : (
        <Redirect
          to={{
            pathname: "/",
            state: {
              session_expired: true,
            },
          }}
        />
      )}
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    albums: state.albums,
    artists: state.artists,
    tracks: state.tracks,
  };
};

export default connect(mapStateToProps)(HomeUnconnected);
