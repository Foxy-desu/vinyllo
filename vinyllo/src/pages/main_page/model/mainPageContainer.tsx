import { TUserState } from "../../../app/store/user_slice";
import {MainPage} from "../../api";

export type TUser = {
    email: string;
    id: number;
};
export type TSetUser = React.Dispatch<React.SetStateAction<TUserState>>;
export type TMainPageProps = {user:TUserState | null, setUser: TSetUser};

const MainPageContainer = ({user, setUser}:TMainPageProps)=> {
    return user ? <MainPage user={user} setUser={setUser}/> : <></>
}

export default MainPageContainer;