

const BrotherA = props => {
    const msg='组件A的数据'

    const hadler=()=> {
        props.cb(msg)
    }
    return (
        <div>
            <h4 onClick={hadler}>子组件A</h4>
        </div>
    );
};

BrotherA.propTypes = {
    
};

export default BrotherA;