import MyState from "./component/MyState";
import MyStateQ from "./component/MyStateQ";
import Welcome from "./component/Welcome";
import WelcomeClass from "./component/WelcomeClass";


function App() {

    return (
        <div>
            <h3>컴포넌트와 props</h3>
            <Welcome name={"홍길동"} age={20} addr={"서울시"} />
            <Welcome name={"이순신"} age={30} />

            <hr/>
            <h3>state값 확인하기</h3>
            <MyState/>
            <hr/>
            <MyStateQ/>

            <hr/>
            <WelcomeClass name={"홍길자"} age={20}/>
 
        </div>
    )
}

export default App;