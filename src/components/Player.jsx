import { useState } from "react";

export default function Player({ initialName, symbol}){

    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false)

    function handleEditClick(){
        // setIsEditing(isEditing ? false : true)
        // setIsEditing(!isEditing) => schedules a state update to true  
        // setIsEditing(!isEditing) => false (시작 지점의 false값을 가지고 변경하므로 true로 변경)
        setIsEditing((ediitng) => !ediitng);
    }

    function handleChange(event) {
        //console.log(event);
        setPlayerName(event.target.value);
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>
    //let btnCaption = "Edit";

    if(isEditing){
        editablePlayerName= (
        <input type="text" required value={playerName} onChange={handleChange}/>
        );
        //btnCaption = "Save";
    }

    return(
        <li>
            <span className="player">
              {editablePlayerName}
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit' }</button>
          </li>
    )
}

