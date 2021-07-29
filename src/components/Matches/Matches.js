import { Link } from "react-router-dom";
import Match from "../Match/Match";
import m from "./matches.module.sass";
import useFetch from "./useFetch";
import useWin from "./useWin";

export default function Matches(props) {
  const tournamentURL = props.match.params.url;
  const {
    firstRound,
    secondRound,
    thirdRound,
    roundNumber,
    isLoading,
    participantDetails,
  } = useFetch(tournamentURL);
  //useWIn(tournamentURL)

  const { handleWin, isWinLoading } = useWin(tournamentURL);

  if (isLoading) {
    return <div>...loading...</div>;
  }

  return (
    <div>
      {!isLoading && roundNumber === 1 && (
        <div className={m.roundsContainer}>
          {
            <div className={m.roundDisplayContainer}>
              <p>Round 1</p>
              {firstRound.map((match) => {
                return (
                  <div key={match.id}>
                    <div>
                      Match {match.attributes.identifier}
                      <br />
                      {match.attributes.scores}
                      <br />
                      Match Winner: {/* foundParticipant */}{" "}
                      {/* displays winner per match */}
                    </div>
                  </div>
                );
              })}
            </div>
          }
        </div>
      )}

      {!isLoading && roundNumber === 2 && (
        <div className={m.roundsContainer}>
          {
            <div className={m.roundDisplayContainer}>
              <p>Round 1</p>
              {firstRound.map((matches) => {
                return (
                  <div key={matches.id}>
                    <div>
                      Match {matches.attributes.identifier}
                      <br />
                      {matches.attributes.scores}
                      <br />
                      Match Winner: {/* foundParticipant */}{" "}
                      {/* displays winner per match */}
                    </div>
                  </div>
                );
              })}
            </div>
          }
          {
            <div className={m.roundDisplayContainer}>
              <p>Round 2</p>
              {secondRound.map((matches) => {
                return (
                  <div>
                    <div key={matches.id}>
                      Match {matches.attributes.identifier}
                      <br />
                      {matches.attributes.scores}
                      <br />
                      Match Winner: {/* foundParticipant */}{" "}
                      {/* displays winner per match */}
                    </div>
                  </div>
                );
              })}
            </div>
          }
        </div>
      )}

      {!isLoading && roundNumber === 3 && (
        <div className={m.roundsContainer}>
          {
            <div className={m.roundDisplayContainer}>
              <p>Round 1</p>
              {firstRound.map((match) => (
                <Match
                  match={match}
                  participantDetails={participantDetails}
                  handleWin={handleWin}
                  isWinLoading={isWinLoading}
                />
              ))}
            </div>
          }
          {
            <div className={m.roundDisplayContainer}>
              <p>Semi Finals</p>
              {secondRound.map((match) => (
                <Match
                  match={match}
                  participantDetails={participantDetails}
                  handleWin={handleWin}
                  isWinLoading={isWinLoading}
                />
              ))}
            </div>
          }
          {
            <div className={m.roundDisplayContainer}>
              <p>Grand Finals</p>
              {thirdRound.map((match) => {
                const player1Id =
                  match.relationships?.player1?.data?.id || "unknown";
                const player2Id =
                  match.relationships?.player2?.data?.id || "unknown";
                return (
                  <div className={m.match}>
                    <div key={match.id}>
                      Match {match.attributes.identifier}
                      <br />
                      {match.attributes.scores}
                      <br />
                      <p>{participantDetails[player1Id]}</p>
                      <p>{participantDetails[player2Id]}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          }
        </div>
      )}

      <Link to="/tournament">back to tournament</Link>
    </div>
  );
}
