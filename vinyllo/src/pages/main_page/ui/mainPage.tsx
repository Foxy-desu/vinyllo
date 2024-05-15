import { Button, Container, Typography } from "@mui/material"
import { TUser } from '../model/mainPageContainer';
import { useDispatch } from "react-redux";

export type TSetUser = React.Dispatch<React.SetStateAction<TUser | null>>;
export type TMainPageProps = {user:TUser, setUser: TSetUser}
const MainPage = ({user, setUser}: TMainPageProps) => {
    return (
        <Container>
            <Typography variant='h1'>
                MainPage
            </Typography>
            <Typography component="p">
                Hello, {user && user.email}
            </Typography>
            <Button onClick={()=>{
                localStorage.clear();
                setUser(null);


            }}>Log out</Button>
        </Container>
    )
}

export default MainPage;