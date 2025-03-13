// /** LIBRARY */
// import { Configs, Keys } from 'configs';
// import { call, put, takeEvery } from 'redux-saga/effects';
// import { USER_GET_INFO_ACTION, USER_LOGIN_ACTION, USER_LOGIN_SUCCESS_ACTION, USER_UPDATE_ACTION, USER_UPDATE_INFO_ACTION, USER_UPDATE_PASSWORD_ACTION, ADMIN_FIND_TEACHER_ACTION, USER_CREATE_TEACHER_ACTION, ADMIN_UPDATE_INFO_TEACHER_ACTION, UPDATE_ADDRESS_DEFAULT_ACTION, USER_ADD_SHIPPING_ADDRESS_ACTION, CUSTOMER_MERGE_CART_ACTION, USER_FORGOT_PASSWORD_ACTION,USER_SET_PASSWORD_ACTION, CUSTOMER_GET_CART_ACTION } from '../../redux/types';
// import { Helpers } from 'utils/helpers';
// import { apiGetUserInfo, apiLoginUser, apiUserUpdateInfo, apiUserUpdatePassword, apiFindTeacher, apiCreateTeacher, apiAdminUpdateInfoTeacher, apiAdminUpdateAddressDefaultUser, apiAddShippingAddress, apiForgotPassword, apiSetPassword } from './api';

// // function* login(action) {
// //   const { params, callback } = action.payload;
// //   try {
// //     const res = yield call(apiLoginUser, params);
// //     console.log('Login response:', res); // Log phản hồi API

// //     if (res && res.status === 200) {  // Kiểm tra res có tồn tại và status là 200
// //       Helpers.setDataStorage(Keys.dataToken, res.data.token); // Lưu token
// //       yield put({ type: USER_LOGIN_SUCCESS_ACTION, payload: res.data.token });
// // 			// yield put({
// // 			// 	type: CUSTOMER_MERGE_CART_ACTION,
// // 			// 	payload: {
// // 			// 		callback: () => {}
// // 			// 	}
// // 			// });
// //       callback(true);  // Thành công
// //     } else {
// //       console.log('Login failed with status:', res.status);  // Log lỗi
// //       callback(false);  // Thất bại
// //     }
// //   } catch (err) {
// //     console.log('Error during login:', err);  // Log lỗi nếu có
// //     callback(false);
// //   }
// // }
// function* login(action) {
//   const { params, callback } = action.payload;
//   try {
//     const res = yield call(apiLoginUser, params);
//     console.log('Login response:', res);

//     if (res && res.status === 200) {
//       Helpers.setDataStorage(Keys.dataToken, res.data.token);
//       yield put({ type: USER_LOGIN_SUCCESS_ACTION, payload: res.data.token });

//       // Gọi merge cart và đợi kết quả
//       const mergeCartResult = yield call(function* () {
//         let mergeSuccess = false;
//         yield put({
//           type: CUSTOMER_MERGE_CART_ACTION,
//           payload: {
//             callback: (success) => {
//               mergeSuccess = success;
//             }
//           }
//         });
//         return mergeSuccess;
//       });

//       // Nếu merge thành công thì clear local cart và get cart mới
//       if (mergeCartResult) {
//         Helpers.clearLocalCart();
//         yield put({ type: CUSTOMER_GET_CART_ACTION });
//       }
      
//       // Gọi callback sau khi hoàn tất tất cả các thao tác
//       callback(true);
//     } else {
//       console.log('Login failed with status:', res.status);
//       callback(false);
//     }
//   } catch (err) {
//     console.log('Error during login:', err);
//     callback(false);
//   }
// }

// function* getUserInfo(action) {
//   const { params, callback } = action.payload;
//   try {
//     const res = yield call(apiGetUserInfo, params);
//     if (res.status === 200) {
//       // Cập nhật user info vào store
//       yield put({ 
//         type: USER_UPDATE_ACTION, 
//         payload: res.data 
//       });

//       // Nếu user có cart reference, dispatch action lấy cart
//       if (res.data?.cart) {
//         console.log('User has cart reference, fetching cart:', res.data.cart);
//         yield put({
//           type: CUSTOMER_GET_CART_ACTION,
//           payload: {
//             callback: (success) => {
//               if (!success) {
//                 console.error('Failed to fetch user cart');
//               }
//             }
//           }
//         });
//       } else {
//         console.log('User has no cart reference');
//         // Kiểm tra nếu có cart trong session
//         const sessionCartId = Helpers.getCartSession();
//         if (sessionCartId) {
//           console.log('Found session cart, merging with user:', sessionCartId);
//           // Merge session cart với user
//           yield put({
//             type: CUSTOMER_MERGE_CART_ACTION,
//             payload: {
//               callback: (success) => {
//                 if (!success) {
//                   console.error('Failed to merge session cart');
//                 }
//               }
//             }
//           });
//         }
//       }

//       callback?.(res.data);
//     } else {
//       console.error('Get user info failed:', res);
//       callback?.(null);
//     }
//   } catch (err) {
//     console.error('Get user info error:', err);
//     callback?.(null);
//   }
// }

// function* userUpdateInfo(action) {
//   const { params, callback } = action.payload;
//   try {
//     const res = yield call(apiUserUpdateInfo, params);
//     if (res.status === 200) {
//       yield put({ type: USER_UPDATE_ACTION, payload: { callback: () => {} } });
//       callback(true);
//     }else{
//       callback(false);
//     }
//   } catch (err) {
//     callback(false);
//   }
// }

// function* adminUpdateInfoTeacher(action) {
//   const { params, callback } = action.payload;
//   try {
//     const res = yield call(apiAdminUpdateInfoTeacher, params);
//     if (res.status === 200) {
//       yield put({ type: ADMIN_FIND_TEACHER_ACTION, payload: { callback: () => {} } });
//       callback(true);
//     }else{
//       callback(false);
//     }
//   } catch (err) {
//     callback(false);
//   }
// }

// function* adminUpdateAddressDefaultUser(action) {
//   const { params, callback } = action.payload;
//   try {
//     const res = yield call(apiAdminUpdateAddressDefaultUser, params);
//     if (res.status === 200) {
//       // yield put({ type: ADMIN_FIND_TEACHER_ACTION, payload: { callback: () => {} } });
//       callback(true);
//     }else{
//       callback(null);
//     }
//   } catch (err) {
//     callback(false);
//   }
// }

// function* userUpdatePassword(action) {
//   const { params, callback } = action.payload;
//   try {
//     const res = yield call(apiUserUpdatePassword, params);
//     if (res.status === 200) {
//       callback(true);
//     }else{
//       callback(false);
//     }
//   } catch (err) {
//     callback(false);
//   }
// }
// function* userCreateTeacher(action) {
//   const { params, callback } = action.payload;
//   try {
//     const res = yield call(apiCreateTeacher, params);
//     if (res.status === 200) {
//       yield put({ type: ADMIN_FIND_TEACHER_ACTION, payload: res.data });
//       callback(res.data)
//     }else{
//       callback(res.response);
//     }
//   } catch (err) {
//     callback(null)
//   }
// }
// function* userFindTeacher(action) {
//   const { params, callback } = action.payload;
//   try {
//     const res = yield call(apiFindTeacher, params);
//     if (res.status === 200) {
//       callback(res.data)
//     }else{
//       callback(null)
//     }
//   } catch (err) {
//     callback(null)
//   }
// }

// function* addShippingAddress(action) {
//   const { params, callback } = action.payload;
//   try {
//     const res = yield call(apiAddShippingAddress, params);
//     if (res && res.status === 200) {
//       // Assuming the API returns the updated user data including the new address
//       yield put({ type: USER_UPDATE_ACTION, payload: res.data });
//       callback(res.data);
//     } else {
//       callback(null);
//     }
//   } catch (err) {
//     console.error("Error adding shipping address:", err);
//     callback(null);
//   }
// }

// function* forgotPassword(action) {
//   const { email, callback } = action.payload;
//   try {
//     const res = yield call(apiForgotPassword, email);
//     if (res && res.status === 200) {
//       callback(true);
//     } else {
//       callback(false);
//     }
//   } catch (err) {
//     console.error("Error in forgot password:", err);
//     callback(false);
//   }
// }
// function* setPassword(action) {
//   const { params, callback } = action.payload;
//   try {
//     const res = yield call(apiSetPassword, params);
    
//     if (res && res.status === 200) {
//       // Nếu set password thành công và có token trả về
//       if (res.data.token) {
//         // Lưu token nếu API trả về
//         Helpers.setDataStorage(Keys.dataToken, res.data.token);
//         yield put({ type: USER_LOGIN_SUCCESS_ACTION, payload: res.data.token });
//       }
      
//       callback({
//         status: "OK",
//         message: "Đặt mật khẩu thành công"
//       });
//     } else {
//       callback({
//         status: "ERR",
//         message: res?.data?.message || "Đặt mật khẩu thất bại"
//       });
//     }
//   } catch (err) {
//     console.error("Error in set password:", err);
//     callback({
//       status: "ERR", 
//       message: "Đã có lỗi xảy ra"
//     });
//   }
// }

// // function* resetPassword(action) {
// //   const { params, callback } = action.payload;
// //   try {
// //     const res = yield call(apiResetPassword, params);
    
// //     if (res && res.status === 200) {
// //       callback({
// //         status: "OK",
// //         message: "Đặt lại mật khẩu thành công"
// //       });
// //     } else {
// //       callback({
// //         status: "ERR",
// //         message: res?.data?.message || "Đặt lại mật khẩu thất bại"
// //       });
// //     }
// //   } catch (err) {
// //     console.error("Error in reset password:", err);
// //     callback({
// //       status: "ERR",
// //       message: "Đã có lỗi xảy ra"
// //     });
// //   }
// // }

// export function* userSaga() {
//   yield takeEvery(USER_LOGIN_ACTION, login);
//   yield takeEvery(USER_UPDATE_INFO_ACTION, userUpdateInfo);
//   yield takeEvery(USER_GET_INFO_ACTION, getUserInfo);
//   yield takeEvery(USER_UPDATE_PASSWORD_ACTION, userUpdatePassword);
//   yield takeEvery(ADMIN_FIND_TEACHER_ACTION, userFindTeacher);
//   yield takeEvery(USER_CREATE_TEACHER_ACTION, userCreateTeacher);
//   yield takeEvery(ADMIN_UPDATE_INFO_TEACHER_ACTION, adminUpdateInfoTeacher);
//   yield takeEvery(UPDATE_ADDRESS_DEFAULT_ACTION, adminUpdateAddressDefaultUser);
// 	yield takeEvery(USER_ADD_SHIPPING_ADDRESS_ACTION, addShippingAddress);
// 	yield takeEvery(USER_FORGOT_PASSWORD_ACTION, forgotPassword);
// 	yield takeEvery(USER_SET_PASSWORD_ACTION, setPassword);
	
// }
