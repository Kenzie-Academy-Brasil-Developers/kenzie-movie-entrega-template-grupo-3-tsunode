import { MediumYellowButton } from "../../styles/Buttons";


interface ButtonProps{
    title: string;
}

export const Button = ({title}:ButtonProps) =>{
    return(
        <MediumYellowButton buttonsize={13}>
            {title}
        </MediumYellowButton>
    )
}