const LOGIN = "LOGIN";
const GET_USER_LOGIN = "GET_USER_LOGIN";

const getUserLogin = (data) => {
    return {
        type: GET_USER_LOGIN,
        data,
    };
};
