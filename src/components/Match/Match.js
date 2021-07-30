import m from "./match.module.sass";
import useWin from "./useWin";

export default function Match({
  match,
  participantDetails,
  tournamentURL
}) {
  const { handleWin, isWinLoading } = useWin(tournamentURL);
  const winnerId = match.attributes?.winners || "none";
  const player1Id = match.relationships?.player1?.data?.id || "unknown";
  const player2Id = match.relationships?.player2?.data?.id || "unknown";
  const isOneWon = winnerId == player1Id;
  const isTwoWon = winnerId == player2Id;

  //console.log(isOneWon, isTwoWon);

  return (
    <div className={m.match} key={match.id}>
      <p>Match {match.attributes.identifier}</p> 
      {/* <hr /> */}
      <div className={`${m.player} ${isOneWon ? m.winner : m.loser}`}>
        {participantDetails[player1Id]}
        <button onClick={handleWin(player1Id, player2Id, match.id)}>
          {isWinLoading ? "**" : "win"}
        </button>
      </div>
        <div className={`${m.player} ${isTwoWon ? m.winner : m.loser}`}>
        {participantDetails[player2Id]}
        <button onClick={handleWin(player2Id, player1Id, match.id)}>
          {isWinLoading ? "**" : "win"}
        </button>
      </div>
    </div>
  );
}