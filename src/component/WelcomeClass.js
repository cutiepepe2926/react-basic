import React from 'react';


class WelcomeClass extends React.Component {


    //props
    constructor(props) {
        super(props);
        //필드로 state 객체를 선언해서 관리함
        this.state = {
            a : "초기값"
        }
    }

    changeState = () => {
        //state의 값을 변경할 때는 부모님한테 물려받은 setState를 사용함
        this.setState({a: "변경된 값"});
    }

    render() {

        //props값은 필드로 관리되는데
        let {name,age} = this.props;
        console.log(this.state);
        return (
            <div>
                클래스형 컴포넌트 {name} , {age} <br/>
                state 값 : {this.state.a}
                <button type="button" onClick={this.changeState}>스테이트변경</button>
            </div>
        )
    }
}

export default WelcomeClass;