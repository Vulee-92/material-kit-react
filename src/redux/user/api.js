// /** LIBRARY */
// import axios from "axios";
// import { Configs } from "configs";
// import { Base64 } from "js-base64";
// import Api from "services/api";
// import routesApi from "services/routesApi";

// export const apiLoginUser = async (params) => {
//   const body = {
//     email: params.username,
//     password: params.password,
//     // grant_type: "password"
//   };

//   // const authorizationString = `Basic ${Base64.encode(
//   //   `${Configs.client.clientId}:${Configs.client.clientSecret}`
//   // )}`;

//   const newUrl = `${Configs.baseUrl}${routesApi.user.login}`;

//   try {
//     const res = await axios.post(newUrl, body, {
//       headers: {
//         // Authorization: authorizationString,
//         "Content-Type": "application/json",
//       }
//     });
//     !Configs.isProduction && console.log("===apiLoginUser===", res)
//     return res;
//   } catch (error) {
//     !Configs.isProduction && console.log("===apiLoginUser===", error)
//     return null
//   }
// };

// export const apiGetUserInfo = async () => {
//   try {
//     let res = await Api.get(routesApi.user.info);
//     !Configs.isProduction && console.log("===apiGetUserInfo===", res)
//     return res;
//   } catch (error) {
//     !Configs.isProduction && console.log("===apiGetUserInfo===", error)
//     return null
//   }
// };

// export const apiForgotPassword = async (email) => {
//   try {
//     const res = await Api.post(routesApi.user.fotgotPassword, { email });
//     !Configs.isProduction && console.log("===apiForgotPassword===", res);
//     return res;
//   } catch (error) {
//     !Configs.isProduction && console.log("===apiForgotPassword error===", error);
//     return null;
//   }
// };
// export const apiSetPassword = async (params) => {
//   try {
//     const { id, token, password } = params;
//     const res = await Api.post(routesApi.user.setPassword, {
//       userId: id,
//       token,
//       password
//     });
//     !Configs.isProduction && console.log("===apiSetPassword===", res);
//     return res;
//   } catch (error) {
//     !Configs.isProduction && console.log("===apiSetPassword error===", error);
//     return null;
//   }
// };
// export const apiResetPassword = async (params) => {
//   try {
//     const { id, token, password } = params;
//     const res = await Api.post(routesApi.user.resetPassword, {
//       userId: id,
//       token,
//       password
//     });
//     !Configs.isProduction && console.log("===apiResetPassword===", res);
//     return res;
//   } catch (error) {
//     !Configs.isProduction && console.log("===apiResetPassword error===", error);
//     return null;
//   }
// };
// export const apiUserUpdateInfo = async (params) => {
//   let newUrl = `${routesApi.user.update}/${params._id}`
	
//   try {
//     let res = await Api.put(newUrl, params);
//     !Configs.isProduction && console.log("===apiUserUpdateInfo===", res)
//     return res;
//   } catch (error) {
//     !Configs.isProduction && console.log("===apiUserUpdateInfo===", error)
//     return null
//   }
// };
// export const apiAdminUpdateInfoTeacher = async (params) => {
//   try {
//     let res = await Api.put(routesApi.admin.info, params);
//     !Configs.isProduction && console.log("===apiAdminUpdateInfoTeacher===", res)
//     return res;
//   } catch (error) {
//     !Configs.isProduction && console.log("===apiAdminUpdateInfoTeacher===", error)
//     return null
//   }
// };
// export const apiAdminUpdateAddressDefaultUser= async (params) => {
//   try {
//     let res = await Api.put(routesApi.user.defaultAddress, params);
//     !Configs.isProduction && console.log("===apiAdminUpdateAddressDefaultUser===", res)
//     return res;
//   } catch (error) {
//     !Configs.isProduction && console.log("===apiAdminUpdateAddressDefaultUser===", error)
//     return null
//   }
// };

// export const apiUserUpdatePassword = async (params) => {
//   try {
//     let res = await Api.put(routesApi.user.changePassword, params);
//     !Configs.isProduction && console.log("===apiUserUpdatePassword===", res)
//     return res;
//   } catch (error) {
//     !Configs.isProduction && console.log("===apiUserUpdatePassword===", error)
//     return null
//   }
// };

// export const apiCreateTeacher = async (params) => {
//   try {
//     let res = await Api.post(routesApi.admin.createTeacher, params);
//     !Configs.isProduction && console.log("===apiCreateTeacher===", res)
//     return res;
//   } catch (error) {
//     !Configs.isProduction && console.log("===apiCreateTeacher===", error)
//     return error;
//   }
// };

// export const apiFindTeacher = async (params) => {
//   try {
//     let res = await Api.post(routesApi.admin.findTeacher, params);
//     !Configs.isProduction && console.log("===apiFindTeacher===", res)
//     return res;
//   } catch (error) {
//     !Configs.isProduction && console.log("===apiFindTeacher===", error)
//     return null
//   }
// };

// export const apiAddShippingAddress = async (params) => {
//   try {
//     let res = await Api.post(routesApi.user.addAddress, params);
//     !Configs.isProduction && console.log("===apiAddShippingAddress===", res)
//     return res;
//   } catch (error) {
//     !Configs.isProduction && console.log("===apiAddShippingAddress===", error)
//     return null
//   }
// };