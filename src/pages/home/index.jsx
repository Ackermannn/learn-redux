import React from "react";
import store from "../../store";
import { sendAction } from "../../aciton";
export default class Home extends React.Component {
    handleClick = () => {
        const action = sendAction();
        // 发送一个 action 利用store
        store.dispatch(action)
    }
    // 
    componentDidMount() {
        store.subscribe(
            () => {
                console.log("store.getState", store.getState());
                this.setState({});
            }
        )

    }

    render() {
        return (<>

            <button onClick={this.handleClick}>Click me, Click me</button>
            <div>
                {store.getState().value}
            </div>
        </>

        )
    }
}