import React, { useEffect } from "react";
import { login } from "../../redux/actions";
import { connect } from "react-redux";

function Home(props) {
    useEffect(() => {
        props.dispatch(login());
        // eslint-disable-next-line
    }, []);

    return (
        <div>
            {props.data !== undefined &&
                props.data.map((item) => {
                    return (
                        <div key={item.id}>
                            <h1>tes: {item.fullname}</h1>
                            <h2>email: {item.email}</h2>
                        </div>
                    );
                })}
            <h1>Ini home cuk</h1>
        </div>
    );
}

const mapStateToProps = (state) => {
    console.log(state.user, "ini state");
    return {
        data: state.user,
    };
};

export default connect(mapStateToProps)(Home);
