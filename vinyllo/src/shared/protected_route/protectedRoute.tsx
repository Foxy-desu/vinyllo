import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TUserState } from "../../app/store/user_slice";

export type TProtRouteProps = {user: TUserState, children: JSX.Element | JSX.Element[] | null};
const ProtectedRoute = ({user, children}: TProtRouteProps) => {
    const navigate = useNavigate();
    
    useEffect(()=> {
        if(!user) {
            navigate("/login", {replace: true});
        }
    }, [user])
    
    return user? children : <></>
};
export default ProtectedRoute;