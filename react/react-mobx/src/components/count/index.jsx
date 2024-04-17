import React from 'react';
import counterStore from '../../store/counterStore';
import {observer} from 'mobx-react-lite';

const Count = () => {
    return (
        <div>
            {/* <button onClick={()=>counterStore.addCount()}>{counterStore.count}</button> */}
            {/* <ul>
                {
                    counterStore.list.map((item=><li key={item}>{item}</li>))
                }
            </ul> */}
            {JSON.stringify(counterStore.list)}
            {JSON.stringify(counterStore.newList)}
            <button onClick={()=>counterStore.pushList()}>push</button>
        </div>
    );
};

export default observer(Count); //oberver 事实监听count组件数据变化