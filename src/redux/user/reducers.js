// import { Keys } from "configs";
// import { USER_LOGOUT_ACTION, USER_UPDATE_ACTION, USER_LOGIN_SUCCESS_ACTION,USER_GET_INFO_SUCCESS_ACTION } from "../../redux/types";
// import { Helpers } from "utils/helpers";

// const init = {
//   token: Helpers.getDataStorage(Keys.dataToken) || null,
//   data: null,
//   isAuthenticated: false,
//   loading: false
// };
// const userReducer = (state = init, action) => {
//   switch (action.type) {
//     case USER_LOGIN_SUCCESS_ACTION:
//       return {
//         ...state,
//         token: action.payload,
// 				isAuthenticated: true
//       };
// 			case USER_GET_INFO_SUCCESS_ACTION:
// 				return {
// 					...state,
// 					data: action.payload,
// 					loading: false
// 				};
//     case USER_UPDATE_ACTION:
//       return {
//         ...state,
//         data: action.payload
//       }
//     case USER_LOGOUT_ACTION:
//       return {
//         ...init
//       };
//     default:
//       return state;
//   }
// };
// export default userReducer;
