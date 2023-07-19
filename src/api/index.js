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
    url: '/user'
  })
export const getUserFriends = () =>
  callApi({
    url: '/users/friends'
  })

export const getLobby = (lobbyId) =>
  callApi({
    url: `/lobbies/${lobbyId}`
  })
/* User invitation */
export const getUserRequests = () =>
  callApi({
    url: '/user-invitations?type=requested'
  })
export const getUserInvitations = () =>
  callApi({
    url: '/user-invitations?type=invited'
  })
export const getUserInvitation = (invitationId) =>
  callApi({
    url: `/user-invitations/${invitationId}`
  })
export const inviteUser = (username) =>
  callApi({
    url: '/user-invitations',
    method: 'POST',
    data: { username }
  })
export const cancelUserInvitation = (invitationId) =>
  callApi({
    url: `/user-invitations/${invitationId}/cancel`,
    method: 'POST'
  })
export const acceptUserInvitation = (invitationId) =>
  callApi({
    url: `/user-invitations/${invitationId}/accept`,
    method: 'POST'
  })
export const declineUserInvitation = (invitationId) =>
  callApi({
    url: `/user-invitations/${invitationId}/decline`,
    method: 'POST'
  })
/* Game invitation */
export const getGameInvitations = () =>
  callApi({
    url: '/game-invitations'
  })
export const getGameInvitation = (invitationId) =>
  callApi({
    url: `/game-invitations/${invitationId}`
  })
export const inviteToGame = ({ userId, lobbyId }) =>
  callApi({
    url: '/game-invitations',
    method: 'POST',
    data: { userId, lobbyId }
  })
export const cancelGameInvitation = (invitationId) =>
  callApi({
    url: `/game-invitations/${invitationId}/cancel`,
    method: 'POST'
  })
export const acceptGameInvitation = (invitationId) =>
  callApi({
    url: `/game-invitations/${invitationId}/accept`,
    method: 'POST'
  })
export const declineGameInvitation = (invitationId) =>
  callApi({
    url: `/game-invitations/${invitationId}/decline`,
    method: 'POST'
  })
