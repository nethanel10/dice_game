import { useState } from "react"
import Cubes from "./Cubes"
import Mainscreen from "./Mainscreen"
import PlayerDashboard from "./playerDashboard"

const Game = () => {
    
    const [toggleModal, setToggleModal] = useState(false)
    
    const [data, setData] = useState({
        targetScore: 100,
        turn: 1,
        winner: undefined,
        cubesStatus: {
            1: 1,
            2: 1
        },
        players: {
            1: {
                score: 0,
                roundScore: 1,
            },
            2: {
                score: 0,
                roundScore: 1,
            }
        }
    })

    const rollDice = () => {
        //randomize a number sync with the cubes
        const number1 = Math.floor((Math.random()) * 6) + 1
        console.log(number1)
        const number2 = Math.floor((Math.random()) * 6) + 1
        setData({...data,
        cubesStatus: {
            1: number1,
            2: number2
        }
    })
        //update the player round score based on the random cubes
        setData({...data,
        players: {...data.players, [data.turn]: {
            ...data.players[data.turn],
            roundScore: data.players[data.turn].roundScore + data.cubesStatus[1] + data.cubesStatus[2]
        }}
        })

        console.log(data.cubesStatus[2] + data.cubesStatus[1] + data.players[1].score)
    }
    
    //pass the turn to the opposide player
    const nextTurn = () => {
        setData({
            ...data,
            players: {...data.players, [data.turn]: {
            score: data.players[data.turn].roundScore},
            roundScore: 0
        },
            turn: data.turn === 1 ? 2 : 1,
        })
        // const lastTurn = data.turn === 1 ? 2 : 1
    
        console.log(data)
    }
    
    //initialize the game
    // const gameInit = () => {
    //     setToggleModal(true)
    // }

    return (
        <>
        <div className="gameContainer">
            <PlayerDashboard pid={1} data={data}/>
            <div className="center">
                <Cubes data={data}/>
                <button onClick={() => {rollDice()}} className="roll">Roll dice</button>
                <button onClick={() => {nextTurn()}} className="roll">Hold</button>
            </div>
            
            <PlayerDashboard pid={2} data={data}/>
        </div>
        {toggleModal && <Mainscreen setToggleModal={setToggleModal} data={data} setData={setData}/>}
        </>
    )
}

export default Game