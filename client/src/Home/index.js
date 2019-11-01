import React from "react";
import { connect } from "react-redux";

import { increment } from "../..actions/count";

export const increment = () => {
  return {
    type: "INCREMENT"
  };
};

function Home(props) {
  console.log(props);

  return (
    <div>
      state from redux store - {props.count}
      <button
        onClick={() => {
          props.dispatch();
        }}
      >
        {" "}
        up{" "}
      </button>
      }}
    </div>
  );
}

//props.dispatch(increment())

const mapStateToProps = state => {
  return {
    count: state.count
  };
};

export default connect(mapStateToProps)(Home);

//connect()
