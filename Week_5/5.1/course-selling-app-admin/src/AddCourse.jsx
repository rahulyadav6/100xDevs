import { Card, TextField } from "@mui/material";
import{ Button } from "@mui/material";
import { useState } from "react";

function AddCourse(){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return (
        <div style={{display:"flex", justifyContent:"center"}}>
        <Card variant={"outlined"} style={{width:400, padding:20}}>
        <TextField
            onChange={(e)=>{
                setTitle(e.target.value)
            }}
            fullWidth={true}
            label="Title"
            variant="outlined"
        />
        <TextField
            onChange={(e)=>{
                setDescription(e.target.value)
            }}
            fullWidth={true}
            label="Description"
            variant="outlined"
        />
        <Button size='medium' variant="contained">Add course</Button>

        </Card>

        </div>
    );
}

export default AddCourse;
