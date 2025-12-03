import { useState } from "react";


function IterationComponent2() {

    //더미 데이터
    const data = [
        {id:1, topic: "hello"},
        {id:2, topic: "good bye~"}
    ];
    //state로 관리
    const [list, setList] = useState(data); 
    //반복시켜서 화면에 출력
    const newList = list.map( (item) => 
        <li key={item.id} onDoubleClick={ () => handleRemove(item.id) }>
            {item.topic}
        </li>
    )

    //인풋데이터 state로 관리
    const [inputData, setInputData] = useState('');

    //클릭이벤트
    const handleClick = () => {
        const obj = {id: list[list.length-1].id + 1 , topic: inputData};
        //배열의 합치기
        //배열.concat(배열)
        //{...배열, ...배열}
        const newObj = list.concat(obj); //새로운 배열로 반환
        setList(newObj); //state변경
        setInputData(''); //input state변경
        
    }

    const handleRemove = (id) => {
        //array.filter() - true를 반환하는 데이터만 필터링함
        const newItem = list.filter( item => item.id !== id )
        setList(newItem); //state체인지
    }

    return (
        <>

            <input type="text" onChange={ (e) => setInputData(e.target.value) } value={inputData} />
            <button type="button" onClick={handleClick}>할일목록추가</button>
            <ul>
                {newList}
            </ul>

        </>
    )
}

export default IterationComponent2;