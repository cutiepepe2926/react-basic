import IterationComponent from "./component/IterationComponent";
import IterationComponent2 from "./component/IterationComponent2";
import IterationComponentQ from "./component/IterationComponentQ";
import IterationComponentQ2 from "./component/IterationComponentQ2";

function App() {

    return (
        <>
            <h3>컴포넌트 반복</h3>
            <IterationComponent/>
            <hr/>

            <h3>할일 목록만들기</h3>
            <IterationComponent2/>

            <h3>실습</h3>
            <IterationComponentQ/>

            <hr/>
            <h3>실습</h3>
            <IterationComponentQ2/>
        </>
    )
}

export default App;