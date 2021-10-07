import React from "react";
import { IState as IProps } from "./App"


const List:React.FC<IProps>=({people}) => {
    const renderList=():JSX.Element[]=>{
        return people.map((person)=>{
            return(
                <li className="List">
                <div className="Header">
                    <img className="Img" src={person.url} alt="no iamge"></img>
                    <h2>{person.name}</h2>
                    <p className="Age">{person.age}year</p>
                    <p className="Note">{person.note}</p>
                    
                </div>
            </li>

            )
        })
    }
    return(
        <ul>
            {renderList()}
        </ul>
    )
    
    
    
}

export default List