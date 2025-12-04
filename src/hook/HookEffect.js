import { useEffect, useState } from "react";

function HookEffect() {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    //mount된 이후에 실행됨
    // useEffect(() => {
    //     console.log(`렌더링 완료: ${name}, ${age}`);
    // });

    //첫번째 mount이후 딱한번 실행하려면, 두번째 매개변수에 [] 을 넣어주면 됩니다.
    //ex) 서버에서 데이터를 불러올때 1번
    // useEffect(() => {
    //     console.log(`렌더링 완료: ${name}, ${age}`);
    // } , [] );

    //특정 state가 변경될때마다 실행시키고 싶으면 [state, state ...] 을 넣으면 됩니다.
    // useEffect( () => {
    //     console.log(`렌더링 완료: ${name}, ${age}`);
    // }, [name])

    //unmoun되기 이전에 실행시킬 구문이 있으면 return에 함수를 걸어줍니다.
    useEffect( () => {
        console.log(`렌더링 완료: ${name}, ${age}`);

        return () => {
            console.log("unmount에 실행됨");
            console.log(`소멸되기직전name값: ${name}`); //이전 state값을 의미하게 됩니다.
        }

    }, [name])

    //useEffect는 여러개 선언될 수 있습니다.
    useEffect( () => {
        console.log("두번째 useEffect");
    })


    console.log(1);

    return (
        <>
            <input type="text" onChange={ (e) => setName(e.target.value) } value={name} /><br/>
            <input type="text" onChange={ (e) => setAge(e.target.value) } value={age} /><br/>

        </>
    )
}

export default HookEffect;