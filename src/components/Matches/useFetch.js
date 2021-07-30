import { useEffect, useState } from "react";
//import {useFetch} from "../Tournament/useFetch"

export default function useFetch(tournamentURL) {
  const [isLoading, setisLoading] = useState(true);
  const [matchesShown, setmatchesShown] = useState([]);
  const [participantDetails, setParticipantDetails] = useState([]);
  const [flag, setFlag] = useState("");

  useEffect(() => {
    const api_key = "RBPOlPeuprbZYFGh5ZZzapjSlEiLElU8tUsQbumv";
    const url = `https://api.challonge.com/v2/tournaments/${tournamentURL}/matches.json`;

    const options = {
      method: "GET",
      headers: {
        Authorization: api_key,
        "Content-Type": "application/vnd.api+json",
        "Authorization-Type": "v1",
        Accept: "application/json",
      },
    };

    fetch(url, options) //returns promise
      .then((response) => {
        return response.json(); //promise
      })
      .then((result) => {
        console.log("participants", result.included);
        console.log(result);
        const details = { unknown: "TBA" }; //id: name
        for (let i = 0; i < result.included.length; i++) {
          const participant = result.included[i];
          details[participant.id] = participant.attributes.name;
        }

        console.log(details);
        setParticipantDetails(details);
        setmatchesShown(result.data);
        setisLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setisLoading(false);
      });
  }, [flag]);
  //console.log(matchesShown[matchesShown.length - 1]?.attributes?.winners)
  // dito kukunin ko yung grand champion and first runner up
  const grandChampId =
    matchesShown[matchesShown.length - 1]?.attributes?.winners?.toString() ||
    null; // id ng grand champ
  const finalist1Id =
    matchesShown[matchesShown.length - 1]?.relationships?.player1?.data?.id ||
    "TBA"; // returns finalist 1 id in string
  const finalist2Id =
    matchesShown[matchesShown.length - 1]?.relationships?.player2?.data?.id ||
    "TBA"; // returns finalist 2 id in string
  let grandChamp = ""; // name of grand champion
  let firstRunnerUp = ""; // name of 1st runnerUp
  //matchesShown[matchesShown.length - 1]
  if (grandChampId === finalist1Id) {
    grandChamp = participantDetails[finalist1Id];
    firstRunnerUp = participantDetails[finalist2Id];
  }
  if (grandChampId === finalist2Id) {
    grandChamp = participantDetails[finalist2Id];
    firstRunnerUp = participantDetails[finalist1Id];
  }

  const firstRound = [];
  const secondRound = [];
  const thirdRound = [];

  //4
  for (let i = 0; i < matchesShown.length; i++) {
    if (matchesShown[i].attributes.round === 1) {
      firstRound.push(matchesShown[i]);
    }
    if (matchesShown[i].attributes.round === 2) {
      secondRound.push(matchesShown[i]);
    }
    if (matchesShown[i].attributes.round === 3) {
      thirdRound.push(matchesShown[i]);
    }
  }

  const setRoundNumber = () => {
    if (matchesShown.length === 7) {
      return 3;
    }
    if (matchesShown.length === 3) {
      return 2;
    }
    if (matchesShown.length === 1) {
      return 1;
    }
  };
  const roundNumber = setRoundNumber();

  return {
    isLoading,
    firstRound,
    secondRound,
    thirdRound,
    participantDetails,
    roundNumber,
    grandChamp,
    firstRunnerUp,
    setFlag,
  };
}
