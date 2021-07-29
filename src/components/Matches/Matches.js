import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import m from "./matches.module.sass"


export default function Matches(props) {
  //this page will receive tournament Id
  const [ isLoading, setisLoading ] = useState(false)
  //const { isLoading, tournament } = useFetch();
  const [ matchesShown, setmatchesShown ] = useState([])
  const [ participantDetails, setParticipantDetails ] = useState([])
  
  useEffect(() => {
    const api_key = "RBPOlPeuprbZYFGh5ZZzapjSlEiLElU8tUsQbumv"
    const tournament_url = "99xx99url"
    const url = `https://api.challonge.com/v2/tournaments/${tournament_url}/matches.json`

    const options = {
      method: "GET",
      headers: {
        "Authorization": api_key,
        "Content-Type": "application/vnd.api+json",
        "Authorization-Type": "v1",
        "Accept": "application/json"
      }
    }

    fetch(url, options)
      .then(response => {
        console.log(response)
        return response.json()
      }).then(result => {
        for(let i = 0; i < result.included.length; i++){
          setParticipantDetails(participantDetails[i] = {
            name: result.included[i].attributes.name, // access participant's name 
            id: result.included[i].id // access participant's id
          })
          console.log(participantDetails, "partiipant details")   
        }
        // setParticipantId(result.included[0].id)  
        setmatchesShown(result.data)
        return result
      }).catch(error => 
        console.error(error)
      )
    }, [])
    console.log(matchesShown, "matchesShown")

    // an array of matches per round
    const firstRound = []
    const secondRound = []
    const thirdRound = []

    for(let i = 0; i < matchesShown.length; i++){
      if(matchesShown[i].attributes.round === 1){
        firstRound.push(matchesShown[i])
      }
      if(matchesShown[i].attributes.round === 2){
        secondRound.push(matchesShown[i])
      }
      if(matchesShown[i].attributes.round === 3){
        thirdRound.push(matchesShown[i])
      }
    }

    const winnerId = []
    for(let i = 0; i<firstRound.length; i++){
      winnerId[i] = firstRound[i].attributes.winners
    }
    console.log(winnerId)

    const matchWinnerPerRound = []
    for(let i=0; i<winnerId.length; i++){ // kukunin yung id ng bawat winners
      let winner = winnerId[i].toString()
      /* if(winnerFound !== undefined){
        console.log(winnerFound.name)
      } */
     /*  const foundWinnerName = participantDetails.filter(participant => participant.id === winner)
      console.log(foundWinnerName) */
      console.log(winner)
      console.log(matchWinnerPerRound)
    }
    

    //console.log(matchWinnerPerRound)
    // returns the number of rounds depending on the no. of matches
    const setRoundNumber = () => {     
      if(matchesShown.length === 7){
        return 3
      }
      if(matchesShown.length === 3){
        return 2
      }
      if( matchesShown.length === 1){
        return 1
      }
    }
    const roundNumber = setRoundNumber()

    console.log(roundNumber)

  return (
    <div>
      {
        ((!isLoading && roundNumber === 1) && (
          <div className={m.roundsContainer}>
            {
              <div className={m.roundDisplayContainer}>
                <p>Round 1</p>
                {firstRound.map((matches) => {  
                  return (
                    <div> 
                      <div key={matches.id}>
                        Match {matches.attributes.identifier}
                        <br/>
                        {matches.attributes.scores}
                        <br/>
                        Match Winner: {/* foundParticipant */}  {/* displays winner per match */}
                      </div>
                    </div>
                  )
                })}
              </div>
            }
        </div>
        ))
      }

      {
        ((!isLoading && roundNumber === 2) && (
          <div className={m.roundsContainer}>
            {
              <div className={m.roundDisplayContainer}>
                <p>Round 1</p>
                {firstRound.map((matches) => {
                  return (
                    <div> 
                      <div key={matches.id}>
                        Match {matches.attributes.identifier}
                        <br/>
                        {matches.attributes.scores}
                        <br/>
                        Match Winner: {/* foundParticipant */}  {/* displays winner per match */}
                      </div>
                    </div>
                  )
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
                        <br/>
                        {matches.attributes.scores}
                        <br/>
                        Match Winner: {/* foundParticipant */}  {/* displays winner per match */}
                      </div>
                    </div>
                  )
                })}
              </div>
            }
          </div>
        ))
      }

      {
        ((!isLoading && roundNumber === 3) && (
          <div className={m.roundsContainer}>
            {
              <div className={m.roundDisplayContainer}>
                <p>Round 1</p>
                {firstRound.map((matches) => {
                  return (
                    <div> 
                      <div key={matches.id}>
                        Match {matches.attributes.identifier}
                        <br/>
                        {matches.attributes.scores}
                        <br/>
                        Match Winner: {/* foundParticipant */}  {/* displays winner per match */}
                      </div>
                    </div>
                  )
                })}
              </div>
            }
            {
              <div className={m.roundDisplayContainer}>
                <p>Semi Finals</p>
                {secondRound.map((matches) => {
                
                  return (
                    <div> 
                      <div key={matches.id}>
                        Match {matches.attributes.identifier}
                        <br/>
                        {matches.attributes.scores}
                        <br/>
                        Match Winner: {/* foundParticipant */}  {/* displays winner per match */}
                      </div>
                    </div>
                  )
                })}
              </div>
            } 
            {
              <div className={m.roundDisplayContainer}>
                <p>Grand Finals</p>
                {thirdRound.map((matches) => {
                  /* let findWinner = participantDetails.find(elem => elem.id === "151446749")
                  console.log(findWinner) */
                  return (
                    <div> 
                      <div key={matches.id}>
                        Match {matches.attributes.identifier}
                        <br/>
                        {matches.attributes.scores}
                        <br/>
                        Match Winner: {/* foundParticipant */}  {/* displays winner per match */}
                      </div>
                    </div>
                  )
                })}
              </div>
            } 
              
          </div>
        ))
      }
      
      <Link to="/tournament">back to tournament</Link>
    </div>
  );
}
