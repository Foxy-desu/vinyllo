import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TUser } from "../../pages/main_page/model/mainPageContainer";

export type TProtRouteProps = {user: TUser | null, children: JSX.Element | JSX.Element[] | null};
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