// 将 action.type 抽取为常量，减少出错
import {CHANGE_INPUT_INFO, GET_MEMBER_LIST} from '../types-constant';
// 将网络请求抽取出来，方便接口调试，函数返回 Promise
import {obtainMemberList, postNewMember} from '../../api/home';

// 获取 成员信息列表, 
export function getMemberList() {
    return dispatch => {
        obtainMemberList()
            .then(res => dispatch({type: GET_MEMBER_LIST, msg: res}))
            .catch(err => console.log('error ', err));
    }
}

// 改变新增的本地的成员信息
export function changeInputInfo(newMember) {
    return {type: CHANGE_INPUT_INFO, msg: newMember};
}

/*
    可以使用 async await 返回处理异步，返回的是一个 promise 
    如果发生错误，可以在这里使用 try catch 捕获，或者直接交给调用 action 的部分 通过 Promise 的 catch 方法捕获
*/
// 提交新成员信息
export function postNewInfo(newMember) {
    console.log('newMember', newMember);
    return async dispatch => {
        await postNewMember(newMember)
        const newData = await obtainMemberList();

        dispatch({type: GET_MEMBER_LIST, msg: newData});

        return 'success';
    }
}