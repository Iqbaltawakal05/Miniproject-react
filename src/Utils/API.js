const loginAPI = `https://reqres.in/api/login`;
const registerAPI = `https://reqres.in/api/register`;
const userAPI = (currentPage) => `https://reqres.in/api/users?page=${currentPage}`;
const singleUserAPI = (id) => `https://reqres.in/api/users/${id}`;
const imgFollowAPI = `https://reqres.in/api/users?page=2`;

export { userAPI, singleUserAPI, loginAPI, registerAPI, imgFollowAPI };
