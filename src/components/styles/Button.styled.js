import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import {styled} from '@mui/system';



const StyledPaper =styled(Paper,{})`
color:red;
height:300px;
width:300px;


`;
export default function StyledPaperExample(){

    return (
        <>
        <StyledPaper>
            <Button varient="outlined">text</Button>
        </StyledPaper>
        </>
    )
}