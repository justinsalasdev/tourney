import m from "./match.module.sass";
export default function Match({
  match,
  participantDetails,
  handleWin,
  isWinLoading,
}) {
  const winnerId = match.attributes?.winners || "none";
  const player1Id = match.relationships?.player1?.data?.id || "unknown";
  const player2Id = match.relationships?.player2?.data?.id || "unknown";
  const isOneWon = winnerId == player1Id;
  const isTwoWon = winnerId == player2Id;

  console.log(isOneWon, isTwoWon);

  return (
    <div className={m.match} key={match.id}>
      <div>
        Match {match.attributes.identifier}
        <br />
        {match.attributes.scores}
        <br />
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
    </div>
  );
}
