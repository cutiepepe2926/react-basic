import { useEffect, useRef, useState } from "react";

const HookQ = () => {
    /*
    실습
    1. 이페이지가 mount된 즉시 useEffect를 사용하여 id태그에 포커스를 추가해주세요

    2. state를 활용해서 {id, pw}를 관리하고, 
    로그인 클릭시 공백이라면 공백인 태그에 포커스를 추가하세요.
    로그인 클릭시 공백이 아니라면 경고창으로 입력된 id, pw를 출력해주세요.
    */
    
    const idRef = useRef(null);
    const pwRef = useRef(null);
    const [data, setData] = useState({id: '', pw: ''});

    useEffect( () => {
        idRef.current.focus();
    }, []);

    const handleChange = (e) => {
        //setData({...data, [e.target.name]: e.target.value });
        setData( (prev) => {
            return {...prev, [e.target.name]: e.target.value };
        })
    }

    const handleClick = () => {
        console.log(idRef.current.value)
        if(idRef.current.value === '' ) {
            idRef.current.focus();
        } else if(pwRef.current.value === '') {
            pwRef.current.focus();
        } else {
            alert(`${data.id}, ${data.pw}`);
        }
    }


    return (
        <div>
            <input type="text" name="id"     placeholder="아이디" onChange={handleChange} value={data.id} ref={idRef}/><br/>
            <input type="password" name="pw" placeholder="비밀번호" onChange={handleChange} value={data.pw} ref={pwRef}/><br/>
            <button type="button" onClick={handleClick}>로그인</button>
        </div>
    )
}

export default HookQ;