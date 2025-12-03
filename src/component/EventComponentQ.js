import { useState } from "react";


const EventComponentQ = () => {
    //실습
    const [data, setData]= useState('메뉴를 선택하세요')

    const handleChange = (e) => {
        if(e.target.value === '메뉴선택') {
            setData('메뉴를 선택하세요');
            return;
        }

        setData(e.target.value);
    }

    return (
        <div>

            <pre>셀렉트 태그가 체인지 될 때 선택한 결과를 아래에 출력</pre>            

            <select onChange={handleChange}>
				<option>메뉴선택</option>
                <option>피자</option>
                <option>햄버거</option>
                <option>치킨</option>
            </select>

            <h3>선택한 결과</h3>
            <p>{data}</p>

        </div>
    )
}

export default EventComponentQ;