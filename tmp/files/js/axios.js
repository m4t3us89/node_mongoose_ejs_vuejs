
const axiosInstance = axios.create({
  baseURL: 'http://localhost:3333',
});

axiosInstance.interceptors.response.use( (response)=>{
  return response
}, (err)=>{
  if(err.response.status == 401 || err.response.status == 403)
    window.location.href = `/error/${err.response.status}`
  return Promise.reject(err)
})

axiosInstance.interceptors.request.use( (config)=>{
  const credenciais = JSON.parse(localStorage.getItem('credentials'))
  config.headers.token = credenciais ? credenciais.token : ''
  return config;
}, (err)=>{
  return Promise.reject(err);
});


