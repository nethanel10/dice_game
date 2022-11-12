import React from "react"
import cube1 from "../picture/cube1.png"
 import cube2 from "../picture/cube2.png"
 import cube3 from "../picture/cube3.png"
 import cube4 from "../picture/cube4.png"
 import cube5 from "../picture/cube5.png"
 import cube6 from '../picture/cube6.png'

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