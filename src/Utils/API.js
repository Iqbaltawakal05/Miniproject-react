// API.js

const userAPI = (currentPage) => `https://reqres.in/api/users?page=${currentPage}`;
const singleUserAPI = (id) => `https://reqres.in/api/users/${id}`;
const loginAPI = `https://reqres.in/api/login`;
const registerAPI = `https://reqres.in/api/register`;
const logoutAPI = `https://reqres.in/api/logout`;

export { userAPI, singleUserAPI, loginAPI, registerAPI, logoutAPI };
