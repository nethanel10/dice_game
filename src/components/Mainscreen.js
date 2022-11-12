
function Mainscreen({data, setData, setToggleModal}){
    return (
        <div className="modal__wrapper">
            <div className="modal__content">
                <h1>Roll dice Game</h1>
                <h3>please select target score</h3>
                <input type="number" onChange={(e) => {setData({...data, targetScore: e.target.value})}} value={data.targetScore} placeholder="100"/>
                <button onClick={() => {setToggleModal(false)}}>start game</button>
            </div>
        </div>
    )
}
export default Mainscreen;