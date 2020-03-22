import axios from 'axios'
import store from '@/store'

axios.defaults.baseURL =
  process.env.NODE_ENV === 'production'
    ? 'https://mp.w3c.group/api'
    : 'http://localhost:2015/api'

axios.interceptors.request.use(
  function(config) {
    const token = store.state.user && store.state.user.token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    if (config.method === 'post') {
      config.headers['Content-Type'] = `application/x-www-form-urlencoded`
    }
    return config
  },
  function(error) {
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  function(response) {
    const data = response.data
    return data
  },
  err => {
    const e = new Error(err)
    const code = parseInt(String(e).split('code ')[1])
    let message = 'please try again later'
    if (code === 401) {
      message = 'token is expired'
    }
    if (code === 403) {
      message = "you don't have permission to access this resource"
    }
    return {
      code,
      message
    }
  }
)

export default axios
