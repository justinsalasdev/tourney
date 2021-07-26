import { useEffect, useReducer } from "react";

export default function useFetch() {
  const [state, dispatch] = useReducer(reducer, {
    isLoading: true,
    tournament: null,
    error: null,
  });

  const endPoint = "https://api.challonge.com/v2/tournaments.json";
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
        dispatch({ type: "save", payload: jsonData.data[0] });
      } catch (err) {
        console.log(err);
        dispatch({ type: "error", payload: "failed to get tournaments" });
      }
    })();
    // eslint-disable-next-line
  }, []);

  return {
    isLoading: state.isLoading,
    tournament: state.tournament,
    error: state.error,
  };
}

function reducer(state, action) {
  switch (action.type) {
    case "save":
      return { ...state, isLoading: false, tournament: action.payload };
    case "error":
      return { ...state, isLoading: false, error: action.payload };
    default: {
      console.log("no such fetch action");
      return state;
    }
  }
}
