import { useState } from "react";

function CreateTodo(){
    // react query
    const [title, setTitle] = useState("");
    const [description, setdescription] = useState("");
    return(
        <div>
            <input id="title"
            style={{margin:10, padding:10}}
            type="text" 
            placeholder="Title"
            onChange={(e)=>{
                const value = e.target.value;
                setTitle(value);
            }}
            ></input>
            <br/><br/>
            <input id="description"
            style={{margin:10, padding:10}} 
            type="text" 
            placeholder="Description"
            onChange={(e)=>{
                const value = e.target.value;
                setdescription(value);
            }}
            >
            </input>
            <br/><br/>
            <button
            style={{margin:5, padding:3}}
            onClick={()=>{
                fetch("http://localhost:3000/todos",{
                    method: "POST",
                    body:JSON.stringify({
                        title:title,
                        description: description
                    }),
                    headers:{
                        "Content-type":"application/json"
                    }
                })
                .then(async function(res){
                    const json = await res.json();
                    alert("Todo added"+ json);
                })
            }}
            >Add todo</button>
        </div>
    );
}
export default CreateTodo;