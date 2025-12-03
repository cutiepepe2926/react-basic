import { useState } from "react";

function IterationComponentQ() {

    //데이터 - public폴더밑에 예시로 사용하기 위해 넣습니다.
    const arr = [
        {src : '/img/img1.png', title : '아이폰10', price: 1000},
        {src : '/img/img2.png', title : '아이폰11', price: 2000},
        {src : '/img/img3.png', title : '아이폰12', price: 3000},
        {src : '/img/img4.png', title : '아이폰13', price: 4000},
    ]
    //1. state로 관리
    const [img, setImg] = useState('/img/img1.png');
    //2. 화면처리
    const [list, setList] = useState(arr);

    //3. 클릭이벤트
    const handleClick = (src) => {
        // if( e.target.tagName != "IMG" ) {
        //     return;
        // }
        setImg(src);
    }


    const newList = list.map( (item, index) => 
        <div key={index} onClick={ () => handleClick(item.src) }>
            <img src={item.src} alt={item.title}/>
            <p>{item.title}</p>
            <p>{item.price}</p>
        </div>
    )

    return (
        <>
            <hr/>
            <h3>이미지 데이터 반복해보기</h3>
            <pre>
                1. 대표이미지를 state로 관리<br/>
                2. 더미데이터는 state로 관리하고, 컴포넌트 반복으로 화면 출력<br/>
                3. 컴포넌트 클릭시, 대표이미지를 변경합니다.
            </pre>

            <div>
                <img src={img} alt="제목"/>
            </div>

            <div style={{display: "flex", justifyContent: "space-around"}}>
                {newList}
            </div>

        </>
    )


}

export default IterationComponentQ;