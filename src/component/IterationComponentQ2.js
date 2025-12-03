import { useState } from "react";

const IterationComponentQ2 = () => {
    //1 - select는 컴포넌트반복으로 option태그를 생성합니다.
    const select = ['전체', 'HTML', 'Javascript', 'CSS', 'Java', 'Oracle', 'Mysql'];
    const options = select.map( (item, index) => <option key={index}>{item}</option>)

    //2 - 아래 데이터는 state로 관리하고 화면에 li태그로 반복해주세요 .
    const data = [
        {id: 1, type: 'Java', teacher: '이순신'},
        {id: 2, type: 'Java', teacher: '홍길자'},
        {id: 3, type: 'Javascript', teacher: '홍길동'},
        {id: 4, type: 'Oracle', teacher: '이순신'},
        {id: 5, type: 'Mysql', teacher: '이순신'},
        {id: 6, type: 'CSS', teacher: '박찬호'},
        {id: 7, type: 'HTML', teacher: 'coding404'},
    ];
    const [list, setList] = useState(data);
    const newList = list.map( item => <li key={item.id}>{item.type}-{item.teacher}</li>)

    //3 - 필터기능
    //셀렉트박스가 체인지되면 이벤트객체를 활용해서 선택된 값만 필터링해주세요.
    //'전체' 일때는 전체 데이터를 보여주세요
    const handleSelect = (e) => {
        if(e.target.value === '전체') {
            setList(data); //전체데이터로 업데이트
            return;
        }
        //필터...
        const newList = data.filter( item => item.type === e.target.value);
        setList(newList);
    }

	//4 - 검색기능
    //input값이 변경되면, data에서 filter를 적용해서 포함된 값만 보여주세요.
    //includes함수를 사용하면 됩니다. 
    const [inputData,setInputData] = useState('');
    const handleChange = (e) => {
        //인풋state처리
        setInputData(e.target.value); //비동기적으로 값을 체인지 함!!

        //필터링
        const newList = data.filter( item => 
            item.type.toLowerCase().includes(e.target.value) || 
            item.teacher.includes(e.target.value) 
        )
        setList(newList);

    }
	
    return (
        <div>
            Search: <input type="text" onChange={handleChange} value={inputData}/>
            <br/>
            
			과목찾기:
            <select onChange={handleSelect}>
                {options}
            </select>
            <ul>
                {newList}
            </ul>
        </div>
    )
}

export default IterationComponentQ2;
