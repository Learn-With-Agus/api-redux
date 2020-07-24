import React, { useState } from "react";
import { registerUser } from "../../redux/actions";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

function Login(props) {
    const history = useHistory();
    const [form, setForm] = useState({
        fullname: "",
        address: "",
        email: "",
        password: "",
    });
    const handleSubmit = (event) => {
        event.preventDefault();

        props.dispatch(registerUser(form, history));
    };

    const handleChange = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value });
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        name="fullname"
                        placeholder="fullname"
                        onChange={handleChange}
                        value={form.fullname}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        name="address"
                        placeholder="address"
                        onChange={handleChange}
                        value={form.address}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        name="email"
                        placeholder="email"
                        onChange={handleChange}
                        value={form.email}
                    />
                </div>
                <div>
                    <input
                        type="password"
                        name="password"
                        placeholder="password"
                        onChange={handleChange}
                        value={form.password}
                    />
                </div>
                <div>
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    );
}

export default connect(null, null)(Login);
