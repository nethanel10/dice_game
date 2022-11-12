import React from "react"

const PlayerDashboard = ({pid, data}) => {
    return (
        <div className="playerDashboard">
            <div className="playerDashboard__header">
                <h1>Player {pid}</h1>
                <h1 className="playerDashboard__score">{data.players[pid].score.toString()}</h1>
            </div>
            <div className="playerDashboard__bottom">
                <h2>{data.winner === pid && "You Win !"}</h2>
                <h1 className="playerDashboard__roundScore">{data.players[pid].roundScore?.toString()}</h1>
            </div>
        </div>
    )
}

export default PlayerDashboard