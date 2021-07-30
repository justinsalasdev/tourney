import { useReducer } from "react";
import { useHistory } from "react-router-dom";
import uniqid from "uniqid";

export default function useUpdate(tournamentURL, setFlag) {
  const history = useHistory();
  const [state, dispatch] = useReducer(reducer, {
    isLoading: false,
    error: null,
  });

  const handleUpdate = (updateType) => async (e) => {
    e.preventDefault();
    const endPoint = `https://api.challonge.com/v2/tournaments/${tournamentURL}/change_state.json`;
    const options = {
      method: "PUT",
      headers: {
        Authorization: "RBPOlPeuprbZYFGh5ZZzapjSlEiLElU8tUsQbumv",
        "Authorization-type": "v1",
        "Content-type": "application/vnd.api+json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        data: {
          type: "Tournaments",
          attributes: {
            state: updateType,
          },
        },
      }),
    };

    try {
      dispatch({ type: "start" });
      const res = await fetch(endPoint, options);
      const jsonData = await res.json();
      console.log(jsonData);
      dispatch({ type: "done" });
      if (updateType === "start") {
        history.push(`/matches/${tournamentURL}`);
      } else {
        setFlag(uniqid());
      }
    } catch (err) {
      console.log(err);
      dispatch({ type: "error", payload: "failed to update tournament" });
    }
  };
  return {
    handleUpdate,
    isUpdateLoading: state.isLoading,
    error: state.error,
  };
}

function reducer(state, action) {
  switch (action.type) {
    case "start":
      return { ...state, isLoading: true };
    case "done":
      return { ...state, isLoading: false };
    case "error":
      return { ...state, isLoading: false, error: action.payload };
    default: {
      console.log("no such tournament action");
      return state;
    }
  }
}
