import Button from '@mui/material/Button';
import { Card, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
function SingUp(){
    return(
        <div>
                <div style={{
                    paddingTop:"100px",
                    marginBottom:"10px",
                    display:"flex",
                    justifyContent: "center"
                }}>
                <Typography variant='h6'>
                    Welcome to coursera. Sign up below
                </Typography>
                </div>
            <div style={{display:"flex", justifyContent:"center"}}>
            <Card variant="outlined" style={{width:400, padding:20}}>
                    <TextField 
                    fullWidth
                    id="outlined-basic" 
                    label="Email" 
                    variant="outlined" 
                    />
                    <br/>
                    <br/>
                    <TextField 
                    fullWidth
                    id="outlined-basic" 
                    label="Password" 
                    variant="outlined"
                    type='password'
                    />
                    <br/>
                    <br/>
                    <Button size='large' variant="contained">Sign up</Button>
                </Card>
            </div>
        </div>
    );
}
export default SingUp;