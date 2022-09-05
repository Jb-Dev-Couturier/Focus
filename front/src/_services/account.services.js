
let logout = () => {
  localStorage.removeItem('profile');
};

let isLogged = () => {
  let token = localStorage.getItem('profile');

  return !!token; //transforme la variable token en boolean (si vide false / si remplie true)
};

export const accountServices = {
  
  logout,
  isLogged,
  
};
