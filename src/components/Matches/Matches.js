import { Link } from "react-router-dom";
import Match from "../Match/Match";
import m from "./matches.module.sass";
import useFetch from "./useFetch";

export default function Matches(props) {
  const tournamentURL = props.match.params.url;
  const {
    firstRound,
    secondRound,
    thirdRound,
    roundNumber,
    isLoading,
    participantDetails,
    grandChamp,
    firstRunnerUp,
    setFlag,
  } = useFetch(tournamentURL);
  //useWIn(tournamentURL)

  //console.log(thirdRound, "third Round")

  if (isLoading) {
    return <div>...loading...</div>;
  }

  const matchProps = {
    participantDetails,
    tournamentURL,
    setFlag,
  };

  return (
    <div className={m.matchesContainer}>
      {!isLoading && roundNumber === 1 && (
        <div className={m.roundsContainer}>
          <div className={m.roundDisplayContainer}>
            <p>GRAND FINALS</p>
            {firstRound.map((match) => (
              <Match match={match} {...matchProps} />
            ))}
          </div>
          <div className={m.winnerContainer}>
            <div className={m.champion}></div>
            <>
              <h2>{grandChamp.toUpperCase()}</h2>
              <p>Grand Champion</p>
            </>

            <div className={m.firstRunnerUp}></div>
            <>
              <h3>{firstRunnerUp}</h3>
              <p>First Runner Up </p>
            </>
          </div>
        </div>
      )}

      {!isLoading && roundNumber === 2 && (
        <div className={m.roundsContainer}>
          <div className={m.roundDisplayContainer}>
            <p>SEMI FINALS</p>
            {firstRound.map((match) => {
              const matchWinner = match.attributes?.winner || "none";
              console.log("match winner", matchWinner);
              return <Match match={match} {...matchProps} />;
            })}
          </div>

          <div className={m.roundDisplayContainer}>
            <p>GRAND FINALS</p>
            {secondRound.map((match) => (
              <Match match={match} {...matchProps} />
            ))}
          </div>
          <div className={m.winnerContainer}>
            <div className={m.champion}></div>
            <>
              <h2>{grandChamp.toUpperCase()}</h2>
              <p>Grand Champion</p>
            </>

            <div className={m.firstRunnerUp}></div>
            <>
              <h3>{firstRunnerUp}</h3>
              <p>First Runner Up </p>
            </>
          </div>
        </div>
      )}

      {!isLoading && roundNumber === 3 && (
        <div className={m.main_roundsContainer}>
          <div className={m.roundsContainer}>
            <div className={m.roundDisplayContainer}>
              <p>ELIMINATION</p>
              {firstRound.map((match) => {
                // let matchWinner = match.attributes?.winners || "none"
                // console.log(matchWinner)
                return <Match match={match} {...matchProps} />;
              })}
            </div>

            <div className={m.roundDisplayContainer}>
              <p>SEMI FINALS</p>
              {secondRound.map((match) => (
                <Match match={match} {...matchProps} />
              ))}
            </div>

            <div className={m.roundDisplayContainer}>
              <p>GRAND FINALS</p>
              {thirdRound.map((match) => (
                <Match match={match} {...matchProps} />
              ))}
            </div>
          </div>
          <div className={m.winnerContainer}>
            <div className={m.champion}></div>
            <>
              <h2>{grandChamp.toUpperCase()}</h2>
              <p>Grand Champion</p>
            </>

            <div className={m.firstRunnerUp}></div>
            <>
              <h3>{firstRunnerUp}</h3>
              <p>First Runner Up </p>
            </>
          </div>
        </div>
      )}
      {}

      <Link to="/tournament"> back to tournament</Link>
    </div>
  );
}
