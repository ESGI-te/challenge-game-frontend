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

export const checkInvitationCode = (code) =>
  callApi({
    url: `/lobbies/invitation-code/${code}`
  })

export const getUser = () =>
  callApi({
    url: '/users/authenticated'
  })

export const getLobby = (lobbyId) =>
  callApi({
    url: `/lobbies/${lobbyId}`
  })
