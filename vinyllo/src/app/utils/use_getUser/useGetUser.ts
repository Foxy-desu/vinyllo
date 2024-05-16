import { useDispatch, useSelector } from "react-redux";
import { setUserOnReload } from "../../store/user_slice";
import { useState } from "react";
import { RootState } from "../../store";
import { TUserState } from "../../store/user_slice";

const useGetUser = () => {
    const userInStore = useSelector<RootState, TUserState | null>((store)=> {
        return store.user.user? store.user.user: null;
    });
    const dispatch = useDispatch();

    const [user, setUser] = useState(()=>{

        if(userInStore && userInStore.email && userInStore.id) {
            return {email: userInStore.email, id: userInStore.id};
        }
        const storedUser = localStorage.getItem('user');
        if(storedUser) {
            dispatch(setUserOnReload(JSON.parse(storedUser)));
        } else return null
    });

    return {user, setUser};
};

export default useGetUser;