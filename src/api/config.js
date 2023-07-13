const BASE_URL =  import.meta.env.VITE_API_URL;

export const callApi = async ({ url, method = 'GET', data = null, headers = {} }) => {
  
  const URL = BASE_URL + url;

  console.log(BASE_URL, URL)

  const options = {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
      ...authHeader()
    }
  }

  if (data) {
    options.body = JSON.stringify(data)
  }

  try {
    const response = await fetch(URL, options)
    const responseData = await response.json()
    return responseData
  } catch (error) {
    console.error('Request error:', error)
    throw error
  }
}

const authHeader = () => {
  const token = localStorage.getItem('token')
  if (!token) return {}
  return { Authorization: 'Bearer ' + token }
}
