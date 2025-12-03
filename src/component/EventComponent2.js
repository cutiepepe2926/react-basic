import { useState } from "react";

function EventComponent2() {

    //객체state관리
    let [inputData, setInputDate] = useState( {name: '', topic: ''} ); //초기값

    const handleChange = (e) => {
        //객체를 복사후에, 이벤트가 일어난 키값만 변경
        //1st
        // const copy = {...inputData, [e.target.name] : e.target.value};
        // setInputDate(copy);

        //2nd
        setInputDate( (prev) => {
            return {...prev, [e.target.name] : e.target.value};
        })

    }   

    return (
        <>
            현재state: {inputData.name}, {inputData.topic}
            <br/>
            이름:<input type="text" name="name" onChange={handleChange} value={inputData.name} /><br/>
            메모:<input type="text" name="topic" onChange={handleChange} value={inputData.topic} /><br/>

            <button type="button">클릭</button>
        </>
    )
}

export default EventComponent2;