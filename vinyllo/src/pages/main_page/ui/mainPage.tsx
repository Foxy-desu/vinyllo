import { Button, Container, Typography } from "@mui/material"
import { TSetUser} from '../model/mainPageContainer';
import { useDispatch } from "react-redux";
import { TUserState, logOut } from '../../../app/store/user_slice';

export type TMainPageProps = {user:TUserState, setUser: TSetUser}
const MainPage = ({user, setUser}: TMainPageProps) => {
    const dispatch = useDispatch();
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
                dispatch(logOut());
                setUser(null);
            }}>Log out</Button>
        </Container>
    )
}

export default MainPage;