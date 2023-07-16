import { callApi } from './config'

export const login = (formData) =>
  callApi({
    url: '/login',
    method: 'POST',
    data: formData
  })

export const register = (formData) =>
  callApi({
    url: '/register',
    method: 'POST',
    data: formData
  })

export const createGame = (formData) =>
  callApi({
    url: '/games',
    method: 'POST',
    data: formData
  })

export const getLobbyByCode = (code) =>
  callApi({
    url: `/lobbies/search/${code}`
  })

export const getUser = () =>
  callApi({
    url: '/users/authenticated'
  })

export const getLobby = (lobbyId) =>
  callApi({
    url: `/lobbies/${lobbyId}`
  })
