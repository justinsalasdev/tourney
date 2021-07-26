import { useEffect, useReducer } from "react";

export default function useFetch(url) {
  const [state, dispatch] = useReducer(reducer, {
    isLoading: true,
    participants: [],
    error: null,
  });

  const endPoint = `https://api.challonge.com/v2/tournaments/${url}/participants.json`;
  const options = {
    headers: {
      Authorization: "RBPOlPeuprbZYFGh5ZZzapjSlEiLElU8tUsQbumv",
      "Authorization-type": "v1",
      "Content-type": "application/vnd.api+json",
      Accept: "application/json",
    },
  };

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(endPoint, options);
        const jsonData = await res.json();
        console.log(jsonData);
        dispatch({ type: "save", payload: jsonData.data });
      } catch (err) {
        console.log(err);
        dispatch({ type: "error", payload: "failed to get participants" });
      }
    })();
    // eslint-disable-next-line
  }, []);

  return {
    isLoading: state.isLoading,
    participants: state.participants,
    error: state.error,
  };
}

function reducer(state, action) {
  switch (action.type) {
    case "save":
      return { ...state, isLoading: false, participants: action.payload };
    case "error":
      return { ...state, isLoading: false, error: action.payload };
    default: {
      console.log("no such fetch action");
      return state;
    }
  }
}
