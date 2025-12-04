import React, { useCallback, useState } from "react";


function HookCallback() {

    const [count, setCount] = useState(0);
    
    //useCallback훅의 규칙
    //1. React.Memo 함수와 같이 사용해야함
    //2. setter함수에는 prev => prev + 1 패턴으로 이전 state를 참조하도록 구성

    // const handleClick = () => {
    //     setCount( (prev) => prev + 1 );
    // }

    //useCallback
    const handleClick = useCallback( () => {
        setCount( prev => prev + 1);
    }, []); //[] - 첫번째 렌더링 에서만 동작, [count] - count가 변경되면 동작함

    return (
        <>  
            <h3>부모 컴포넌트</h3>
            현재값: {count}
            <button type="button" onClick={handleClick}>증가</button>

            {/* 자식의 props로 setter함수를 전달 */}
            <Child increase={handleClick} />
        </>
    )
}

//불필요한 렌더링이 발생하는 자식컴포넌트는 React.memo() 묶어줍니다.
const Child = React.memo( ( {increase} ) => {

    console.log("부모에서 클릭 or 자식에서 클릭 할때 렌더링이 발생함");

    return (
        <>
            <h3>자식 컴포넌트 child</h3>
            <button type="button" onClick={increase} >증가</button>
        </>
    )
} ) 


export default HookCallback;

