import { useState } from "react";


function MyState() {
    //state는 컴포넌트에서 상태를 관리하는 변수 입니다.
    //함수형 컴포넌트에서 useState 훅으로 관리합니다.
    //useState는 배열을 반환 - [현재state, set메서드]
    let [msg, setMsg] = useState('초기값');
    let [color, setColor] = useState('black');

    const handleMsg = () => {
        //msg = "값을 변경함!"; //state는 절대 값을 직접 바꾸면 안됩니다.
        setMsg("변경할 값!"); //state가 변경되면 리렌더링을 수행함.
    }

    return (
        <>
            메세지:{msg}<br/>
            <button type="button" onClick={handleMsg} >메시지변경</button>
            <button type="button" onClick={() => setMsg("hello world") } >인사하기</button>
        
            <br/>
            <h3>color를 state로 관리하면 됨</h3>
            <h3 style={{color: color}} >{msg}</h3>

            <button style={{color: "red"}} onClick={() => setColor("red") }>붉은색</button>
            <button style={{color: "blue"}} onClick={() => setColor("blue") }>푸른색</button>
            <button style={{color: "yellow"}} onClick={() => setColor("yellow")}>노란색</button>

        </>
    )
}



export default MyState;
