import React, { useEffect } from "react";

import { connect } from "react-redux";
import { dataUser } from "../../redux/actions";

function Home(props) {
    useEffect(() => {
        props.dispatch(dataUser());
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
    console.log(state.datauser, "ini state");
    return {
        data: state.datauser,
    };
};

export default connect(mapStateToProps)(Home);
