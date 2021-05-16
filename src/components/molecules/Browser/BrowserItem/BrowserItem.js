import React from "react";

import notfound from "../../../../images/not-found.png";
import { isEmpty, readableDuration } from "../../../../helpers/helpers";
import "./BrowserItem.css";

const BrowserItem = ({ item = {}, index }) => {
  const renderHeader = () => {
    return (
      <div className="home__card--header">
        {item.type === "track" ? (
          <div>
            {!isEmpty(item?.album.images) ? (
              <img
                src={item?.album.images?.[0]?.url}
                alt="Play in Spotify"
                className="home__card-image"
              />
            ) : (
              <img
                src={notfound}
                alt="Play in Spotify"
                className="home__card-image"
              />
            )}
          </div>
        ) : (
          <div>
            {!isEmpty(item?.images) ? (
              <img
                src={item?.images?.[0]?.url}
                alt="Play in Spotify"
                className="home__card-image"
              />
            ) : (
              <img
                src={notfound}
                alt="Play in Spotify"
                className="home__card-image"
              />
            )}
          </div>
        )}
      </div>
    );
  };

  const renderSummary = () => {
    return (
      <div className="home__card--summary">
        <div className="home__card--title">{item.name}</div>
        {item.type === "album" && (
          <>
            <div className="home__card--description">
              Artist:
              <div className="home__card--strongDescription">
                {item?.artists?.map((artist) => artist.name).join(", ")}
              </div>
            </div>
            <div className="home__card--description">
              Number of tracks: {item?.total_tracks}
            </div>
          </>
        )}
        {item.type === "track" && (
          <div>
            <div className="home__card--description">
              Artist:
              <div className="home__card--strongDescription">
                {item?.artists?.map((artist) => artist.name).join(", ")}
              </div>
            </div>
            <div className="home__card--description">
              Album: {item?.album.name}
            </div>
            <div className="home__card--description">
              Duration: {readableDuration(item?.duration_ms || 0)}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div key={index} className="home__card">
      <a
        target="_blank"
        href={item?.external_urls?.spotify}
        rel="noopener noreferrer"
        className="home__card--link"
      >
        {renderHeader()}
        {renderSummary()}
      </a>
    </div>
  );
};

export default BrowserItem;
