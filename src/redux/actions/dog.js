const GET_DATA_DOG = "GET_DATA_DOG";

const getDataDog = (data) => {
    return {
        type: GET_DATA_DOG,
        data,
    };
};

const fetchDataDog = () => async (dispatch) => {
    const url = `https://dev.farizdotid.com/api/daerahindonesia/provinsi`;
    const options = {
        method: "GET",
        headers: {
            "content-type": "application/json",
        },
    };
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    dispatch(getDataDog(result));
};

export { getDataDog, GET_DATA_DOG, fetchDataDog };
