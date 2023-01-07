import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { sendMessageActionCreater } from '../../redux/dialogs-reducer';


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageBody) => {
            dispatch(sendMessageActionCreater(newMessageBody));
        }
    }
} 

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;