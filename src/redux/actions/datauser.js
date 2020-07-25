const DATA = "DATA";
const GET_DATA_USER = "GET_DATA_USER";

const getDataUser = (data) => {
    return {
        type: GET_DATA_USER,
        data,
    };
};

const dataUser = () => async (dispatch) => {
    const url = `https://5f1b22af610bde0016fd35ad.mockapi.io/users`;

    const response = await fetch(url);
    const result = await response.json();

    dispatch(getDataUser(result));
};

export { DATA, dataUser, getDataUser, GET_DATA_USER };
