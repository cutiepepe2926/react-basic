//리듀서 함수
export const myReducer = (state, action) => {
    console.log(state);
    console.log(action);
    //action에 따라서 state를 변경 처리하는 코드
    if( action.type === '증가') {
        state = {count : state.count + 1}
    } else if( action.type === '감소') {
        state = {count : state.count - 1}
    } else if ( action.type === '초기화') {
        state = {count : 0}
    }
    return state; //결과state를 반환
}
//실습
export const yourReducer = (state, action) => {
    //1. clear엑션을 받으면 state을 초기화
    //2. change엑션을 받으면 state를 인풋값으로 변경
    console.log(action); //{type: "change", payload: e.target.value}

    if( action.type === 'clear') {
        //state = {value : ''};
        state = {...state, value: ''} //state가 여러값이면 객체 복사
    } else if (action.type === 'change') {
        //state = {value : action.payload}
        state = {...state, value : action.payload}
    }

    return state;
}