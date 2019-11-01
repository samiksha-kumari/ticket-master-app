import React from 'react'
import { connect } from 'react-redux';
import {increment} from '../../actions/count'

export default function Home(props) {
  console.log(props)
    return (
        <div>
          <button onClick = {() =>
             {props.dispatch(increment())}}>Up</button>
         

        </div>

        
    )
}

const mapStateToProps = (state) => {
  return {
    count: state.count
  }
}

export default connect(mapStateToProps) (Home)