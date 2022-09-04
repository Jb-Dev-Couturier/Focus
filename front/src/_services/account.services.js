




let saveToken = (token) => {
  localStorage.setItem('token', token);
};
let saveIdUser = (userId) => {
  localStorage.setItem('userid', userId);
};

let logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('userid');
};

let isLogged = () => {
  let token = localStorage.getItem('token');

  return !!token; //transforme la variable token en boolean (si vide false / si remplie true)
};

export const accountServices = {
  saveToken,
  logout,
  isLogged,
  saveIdUser,
};
