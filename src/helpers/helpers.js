export const isEmpty = (obj = {}) => {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
};

export const isEmptyResult = (result = {}) => {
  return (
    isEmpty(result?.albums) &&
    isEmpty(result?.artists) &&
    isEmpty(result?.tracks)
  );
};

export const readableDuration = (ms, delim = ":") => {
  const showWith0 = (value) => (value < 10 ? `0${value}` : value);
  const hours = showWith0(Math.floor((ms / (1000 * 60 * 60)) % 60));
  const minutes = showWith0(Math.floor((ms / (1000 * 60)) % 60));
  const seconds = showWith0(Math.floor((ms / 1000) % 60));
  return `${
    parseInt(hours) ? `${hours}${delim}` : ""
  }${minutes}${delim}${seconds}`;
};

export const setSessionExpired = (history) => {
  history.push({
    pathname: "/",
    state: {
      session_expired: true,
    },
  });
};
