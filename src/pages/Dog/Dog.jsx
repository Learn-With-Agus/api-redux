import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchDataDog } from "../../redux/actions";
function Dog(props) {
    useEffect(() => {
        props.dispatch(fetchDataDog());

        // eslint-disable-next-line
    }, []);
    console.log(props.dog, "dog");
    return (
        <div>
            {props.dog.provinsi !== undefined &&
                props.dog.provinsi.map((item) => {
                    return (
                        <div key={item.id}>
                            <h1>{item.nama}</h1>
                        </div>
                    );
                })}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        dog: state.dog,
    };
};
export default connect(mapStateToProps, null)(Dog);
