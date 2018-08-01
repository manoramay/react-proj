import * as React from 'react';
import { connect } from 'react-redux';
import * as styled from 'styled-components';
import { Input, Form, Icon, Button } from 'antd';
import FormItem from 'antd/lib/form/FormItem';
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
import { sagasActions } from '../ecall/login';

const HeaderContainer = styled.default.div`
width: 100%;
height: 170px;
display: flex;
flex: 1 1 0%;
align-items: center;
justify-content: center;
font-size: 1.5em;
color: purple;
background: linear-gradient(154deg,#008fe2,#00b29c);
background-color: transparent !important;
  
`;

interface DispatchProps {
    login: (loginAction: any) => {};
}

type Props = DispatchProps & {};
interface StateProps { }

export class User extends React.Component<Props, StateProps> {

    state = {

        userName: '',
        password: '',

    };
    
    onLogin = () => {
        // this.props.login({ userName: this.state.userName, password: this.state.password });
    }
    render() {

        return (
            <HeaderContainer>
                Hello
            </HeaderContainer>
        );
    }
}
const mapStateToProps = (store: any) => {

    return {
        // data: store, // selData(store)
    };
};

export default connect<StateProps, DispatchProps>(
    mapStateToProps,
    {
        login: sagasActions.loginAction
    }
)(User);