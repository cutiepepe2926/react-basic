import { useReducer } from "react";
import { myReducer, yourReducer } from "./MyReducer";

//리듀서 함수
// const myReducer = (state, action) => {
//     console.log(state);
//     console.log(action);
//     //action에 따라서 state를 변경 처리하는 코드
//     if( action.type === '증가') {
//         state = {count : state.count + 1}
//     } else if( action.type === '감소') {
//         state = {count : state.count - 1}
//     } else if ( action.type === '초기화') {
//         state = {count : 0}
//     }
//     return state; //결과state를 반환
// }



function HookReducer() {

    //리듀서 - 컴포넌트 외부에서 state관리(재활용 가능)
    //const [현재state, state를변경하는함수] = useReducer(리듀서함수, 초기값);
    const [state, func] = useReducer(myReducer, {count: 0});

    //실습
    const [data, dispatch] = useReducer(yourReducer, {value: ''});

    return (
        <>
            <button type="button" onClick={ () => func( {type: "증가"} )}>증가</button>
            <button type="button" onClick={ () => func( {type: "감소"} )}>감소</button>
            <button type="button" onClick={ () => func( {type: "초기화"} )}>초기화</button>

            <br/>
            결과: {state.count}
            
            <h3>실습</h3>
            <input type="text" onChange={ (e) => dispatch({type: "change", payload: e.target.value}) } value={data.value}/>
            <button type="button" onClick={ () => dispatch({type: "clear"} )}>인풋초기화</button>

            현재state: {data.value}
        </>
    )
}

export default HookReducer;