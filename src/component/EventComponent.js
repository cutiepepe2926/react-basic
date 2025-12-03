import { useState } from "react";

function EventComponent() {

    let [name, setName] = useState('');
    let [topic, setTopic] = useState('');

    //이벤트함수의 첫번째 매개변수에는 event객체가 전달됨
    const handleChange = (e) => { 
        setName(e.target.value); //state체인지
    }

    const handleClick = () => {
        alert(`${name} 님의 메모 ${topic}`);
        setName('');
        setTopic('');
    }

    const handleKeyUp = (e) => {
        //엔터값 감지
        if(e.key === 'Enter') {
            handleClick();
        }
    }

    return (
        <>  
            현재state: {name}, {topic}
            <br/>

            이름:<input type="text" name="name" onChange={handleChange} value={name} /><br/>
            메모:<input 
                    type="text"
                    name="topic" 
                    onChange={ e => setTopic(e.target.value) } 
                    value={topic} 
                    onKeyUp={handleKeyUp}
                    />
            <br/>

            <button type="button" onClick={handleClick}>클릭</button>
        </>
    )
}

export default EventComponent;