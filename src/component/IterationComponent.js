

function IterationComponent() {

    //맵함수 - return에 담긴 값으로 새로운 배열을 만듬
    //필터함수 - return에 true값만 필터링
    // const arr = [1,2,3,4,5];
    // const newArr = arr.map( (value, index) => {
    //     return value * 10;
    // })
    // const newArr = arr.filter((value, index) => {
    //     return value % 2 === 0;
    // })
    // console.log(newArr);

    //map을 통해 반복시에 컴포넌트를 식별할수있는 key props를 전달해야 합니다.
    const list = ["홍길동", "이순신", "신사임당", "정약용"];
    const newList = list.map( (item, index) => <li key={index}>{item}</li> )


    return (
        <>
            <ul>
                {newList}
            </ul>
        </>
    )
}

export default IterationComponent;