/*This function contains type of acction and payload?? */
export const setFavorite = (payload) => ({
  type: "SET_FAVORITE",
  payload,
});
/* This function contains type of action and payload */
export const deleteFavorite = (payload) => ({
  type: "DELETE_FAVORITE",
  payload,
});
/* This function contains type of action and payload */
export const loginRequest = (payload) => ({
  type: "LOGIN_REQUEST",
  payload,
});

export const logoutRequest = (payload) => ({
  type: "LOGIN_REQUEST",
  payload,
});

export const registerRequest = (payload) => ({
  type: "REGISTER_REQUEST",
  payload,
});

export const getVideoSource = (payload) => ({
  type: "GET_VIDEO_SOURCE",
  payload,
});
