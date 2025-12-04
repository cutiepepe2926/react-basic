import HookCallback from "./hook/HookCallback";
import HookEffect from "./hook/HookEffect";
import HookMemo from "./hook/HookMemo";
import HookQ from "./hook/HookQ";
import HookReducer from "./hook/HookReducer";
import HookRef from "./hook/HookRef";


function App() {


    return (
        <>
            <h3>useEffect</h3>
            <HookEffect/>
            <hr/>

            <h3>useRef - 태그에 이름붙이기</h3>
            <HookRef/>
            <hr/>

            <h3>실습</h3>
            <HookQ/>
            <hr/>

            <h3>useReducer - 외부에서 state관리</h3>
            <HookReducer/>
            <hr/>

            <h3>useMemo - 렌더링 최적화</h3>
            <HookMemo/>
            <hr/>

            <h3>useCallback - 렌더링 최적화</h3>
            <HookCallback/>
            <hr/>


        </>
    )
}

export default App;