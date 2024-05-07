export type TUserObjCreator = (userCredentials: object) => object;
export const createUserObjOnReg: TUserObjCreator = (userCredentials) => {
    return {
        ...userCredentials,
        albums: [],
        favorites: [],
    }
};

export const createUserObjOnLogin: TUserObjCreator = (userCredentials) => {
    return {
        ...userCredentials,
    }
};