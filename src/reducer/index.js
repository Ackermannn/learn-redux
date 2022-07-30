/**
 * 
 * 创建 reducer 处理发送过来的action
 * 
 */

const initSate = {
  value: "default"
}
const reducer = (state = initSate, action) => {
  console.log("reducer 收到了： ",state, action);
  switch (action.type) {
    case 'send_type':
      return Object.assign({}, state, action)
    default:
      return state;
  }

}
module.exports = {
  reducer
};