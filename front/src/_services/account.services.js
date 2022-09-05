
let logout = () => {
  localStorage.removeItem('profile');
  localStorage.removeItem('userAdmin');
  localStorage.removeItem('id');
};

let saveUserAdmin = (userAdmin) => {
  localStorage.setItem('userAdmin', userAdmin);
};

let isAdmin = ()=>{
  let admin = localStorage.getItem('userAdmin');
  return !!admin
}

let getUserId = ()=>{
  let userId = localStorage.getItem('id');
  return userId.replace(/['"]+/g, '')
}


let isLogged = () => {
  let token = localStorage.getItem('profile');
  return !!token; //transforme la variable token en boolean (si vide false / si remplie true)
};

export const accountServices = {
  logout,
  isLogged,
  saveUserAdmin,
  isAdmin,
  getUserId,
};

