
import React,{useState} from "react";
import { IState as Props } from "./App"

 interface IProps{
     people:Props["people"]
     setPeople:React.Dispatch<React.SetStateAction<Props["people"]>>

 }

const AddList: React.FC<IProps>=({people,setPeople})=>{

    const[input,setInput]=useState({
        name:"",
        age:"",
        img:"",
        note:""
    })

    const handleChange=(e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>):void=>{
        setInput({
            ...input,[e.target.name]:e.target.value
        })
    }

    const handleClick=():void =>{
        if(!input.name ||!input.age||!input.img )
        {
            return
        }
        setPeople([
            ...people,
            {
                name:input.name,
                age:parseInt(input.age),
                url:input.img,
                note:input.note
            }
        ])

    }
    return(
        <div className="AddList">
            <input type="text" placeholder="name" name="name" value={input.name} onChange={handleChange}/>
            <input type="number" placeholder="age" name="age" value={input.age} onChange={handleChange}/>
            <input type="text" placeholder="img" name="img" value={input.img} onChange={handleChange}/>
            <textarea placeholder="note" name="note"value={input.note} onChange={handleChange}/>
            <button  onClick={handleClick}>
               add
            </button>
        </div>
    )
}
export default AddList