import { useEffect, useState } from "react";
import {MainPage} from "../../api";
import { ProtectedRoute } from "../../../shared/api";

export type TUser = {
    email: string;
    id: number;
};
export type TSetUser = React.Dispatch<React.SetStateAction<TUser | null>>;
export type TMainPageProps = {user:TUser | null, setUser: TSetUser};

const MainPageContainer = ({user, setUser}:TMainPageProps)=> {
    return user ? <MainPage user={user} setUser={setUser}/> : <></>
}

export default MainPageContainer;