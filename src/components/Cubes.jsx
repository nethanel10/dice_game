import React from "react"
import cube1 from '../picture/dice-1.png'
import cube2 from '../picture/dice-2.png'
import cube3 from '../picture/dice-3.png'
import cube4 from '../picture/dice-4.png'
import cube5 from '../picture/dice-5.png'
import cube6 from '../picture/dice-6.png'

const Cubes = ({data}) => {

    const cubesSrc = {
        0: cube1,
        1: cube1,
        2: cube2,
        3: cube3,
        4: cube4,
        5: cube5,
        6: cube6
    }
    
    return (
        <div className="cubes">
            <div className="cube">
                <img src={cubesSrc[data.cubesStatus[1]]} alt="cube" className="cubePic" />
                </div>
                <div className="cube">
                <img src={cubesSrc[data.cubesStatus[2]]} alt="cube" className="cubePic" />
                </div>
        </div>
    )
}

export default Cubes