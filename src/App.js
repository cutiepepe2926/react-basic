
import './css/App.css'; //임포트
import styled from './css/App.module.css'; //모듈css 임포트

function App() {

    return (
        <>
            <div>
                <h3 style={{textAlign: "center", color: "red"}} >리액트에 직접 style하기</h3>
                <div className="app_header">
                    내용...
                </div>
                {/* 모듈 css */}
                <div className={styled.app_wrap}>
                    <div className={styled.item}>아이템</div>
                    <div className={styled.item}>아이템</div>
                    <div className={styled.item}>아이템</div>
                </div>
                {/* 모듈 css의 전역선택자 */}
                <h3 className="title">:global의사용</h3>
                <h3 className="content">:global의사용</h3>
            
                {/* public폴더 아래에 css적용 */}
                <p className="static_hello">응?</p>

            </div>
        
        </>
    )
}

export default App;