import axios from 'utils/api'
export const AUTH_LOGIN = 'AUTH_LOGIN'
export const AUTH_CHECK = 'AUTH_CHECK'
export const AUTH_LOGOUT = 'AUTH_LOGOUT'
export const AUTH_ERROR_MESSAGE = 'AUTH_ERROR_MESSAGE'
export const checkUser = () => dispatch => {
  const user = localStorage.getItem('user') || ''

  if (user !== '') {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + JSON.parse(user).token
    dispatch({
      type: AUTH_LOGIN,
      payload: JSON.parse(user),
    })
  }
  dispatch({
    type: AUTH_CHECK,
  })
}

export const login = (eposta, parola) => dispatch => {
  console.log('//Login Islemi Basladi')
  axios
    .post('/users/authenticate', {
      eposta,
      parola,
    })
    .then(response => {
      console.log('//Login Basarili')
      console.log(response.data.sonuc)
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.sonuc.user.token
      localStorage.setItem('user', JSON.stringify(response.data.sonuc.user))
      dispatch({
        type: AUTH_LOGIN,
        payload: response.data.sonuc.user,
      })
    })
    .catch(error => {
      console.log('//Login Basarisiz')
      console.log(error.response.data.message)
      dispatch({
        type: AUTH_ERROR_MESSAGE,
        payload: error.response.data.message,
      })
    })
}

export const logout = () => dispatch => {
  console.log('cikis yapildi')
  localStorage.removeItem('user')
  dispatch({
    type: AUTH_LOGOUT,
  })
}
