import { useState } from "react";


const EventComponentQ2 = () => {
    //실습
    let [form, setForm] = useState({data: '', secret: ''}) //data - 인풋값, secret - 결과값

    //인풋태그 핸들링
    let handleChange = (e) => {
        setForm( {...form, ["data"]: e.target.value } );
    }
    
    let handleClick = () => {
        const result = form.data.charAt(0) + form.data.length;
        setForm( {data: '', secret: result } );
    }

    return (
        <div>

            <pre>
                <p>시크릿코드 - 첫번째 문자열 + 문자열길이</p>
                <p>abc123의 시크릿 코드 = a6</p>

                클릭시 input데이터는 공백으로, 결과는 인풋의 시크릿코드를 출력하시오.
            </pre>            

            <input type="text" onChange={handleChange} value={form.data} />
            <button type="button" onClick={handleClick}>추가하기</button>
            <h3>결과</h3>
            <p>{form.secret}</p>

        </div>
    )
}

export default EventComponentQ2;