import { useReducer } from "react";

export default function useWin(tournamentURL) {
  const [state, dispatch] = useReducer(reducer, {
    isLoading: false,
    error: null,
  });

  const handleWin = (winId, loseId, matchId) => {
    console.log(winId, loseId, matchId);

    return async (e) => {
      e.preventDefault();
      const endPoint = `https://api.challonge.com/v2/tournaments/${tournamentURL}/matches/${matchId}.json`;
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
            type: "Match",
            attributes: {
              match: [
                {
                  participant_id: winId,
                  score_set: "1-0",
                  advancing: true,
                },
                {
                  participant_id: loseId,
                  score_set: "0-1",
                },
              ],
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
      } catch (err) {
        console.log(err);
        dispatch({ type: "error", payload: "failed to update match" });
      }
    };
  };

  return {
    handleWin,
    isWinLoading: state.isLoading,
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
      console.log("no such win action");
      return state;
    }
  }
}
