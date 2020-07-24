const LOGIN = "LOGIN";
const GET_USER_LOGIN = "GET_USER_LOGIN";

const getUserLogin = (data) => {
    return {
        type: GET_USER_LOGIN,
        data,
    };
};

const login = (formData, history) => async (dispatch) => {
    const url = `${process.env.REACT_APP_BACKEND_ENDPOINT}api/users/login`;

    const response = await fetch(url);
    const result = await response.json();

    console.log(result);
    const checkUser = result.filter((user) => {
        return formData.email === user.email;
    });
    if (checkUser.length > 0) {
        if (checkUser[0].password !== formData.password) {
            alert("email atau password anda masih salah tuh");
        } else {
            dispatch(getUserLogin(checkUser[0]));
            alert(`Welcome back ${checkUser[0].fullname}`);
            history.push("/home");
        }
    } else {
        alert(`email anda tidak ada di sini bos`);
    }
};

// register
const registerUser = (formData, history) => async (dispatch) => {
    const url = `${process.env.REACT_APP_BACKEND_ENDPOINT}api/users`;
    const options = {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
            "Content-type": "application/json",
        },
    };

    const response = await fetch(url, options);
    await response.json();

    if (response.status === 201) {
        alert("Terima kasih sudah mendaftar");
        history.push("/");
    }
};

export { login, GET_USER_LOGIN, LOGIN, registerUser };
