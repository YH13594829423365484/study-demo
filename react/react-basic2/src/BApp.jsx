import BrotherA from "./components/BrotherA";
import BrotherB from "./components/BrotherB";

const BApp = () => {
    let message='hello'

    fn=(newMsg)=>{
        console.log(newMsg);
        message=newMsg;
    }

    return (
        <div>
            <h2>父组件</h2>
            <BrotherA cb={this.fn}></BrotherA>
            <BrotherB message={this.this.state.message}></BrotherB>
        </div>
    );
};

export default BApp;