import { useState } from "react";

//실습
const MyStateQ = () => {
    
    var [data, setData] = useState(0);

    

    return (
        <div>
            <h3>실습(MyStateQ)</h3>
            <h3>카운트:{data}</h3>
            {/* <button onClick={ () => setData(data + 1) }>증가</button> */}
            {/* setter메서드의 매개변수로 콜백을 전달하면 콜백의 첫번째 매개변수로 state전달해줌 */}
            <button onClick={ () => setData( prev => prev + 1 )}>증가</button>
            <button onClick={ () => setData(data - 1) }>감소</button>
            <button onClick={ () => setData(0) }>초기화</button>
        </div>        
    )
}


export default MyStateQ;