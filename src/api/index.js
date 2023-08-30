import { callApi } from './config'

/* Auth */
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

/* Game */
export const createGame = (formData) =>
  callApi({
    url: '/games',
    method: 'POST',
    data: formData
  })

/* User */
export const getUser = () =>
  callApi({
    url: '/user'
  })
export const getUserFriends = () =>
  callApi({
    url: '/users/friends'
  })

/* Lobby */
export const getLobby = (lobbyId) =>
  callApi({
    url: `/lobbies/${lobbyId}`
  })
export const getLobbyByCode = (code) =>
  callApi({
    url: `/lobbies/search/${code}`
  })
export const createLobby = (formData) =>
  callApi({
    url: '/lobbies',
    method: 'POST',
    data: formData
  })

/* Quizz Theme */
// export const getQuizzThemes = (ids) => {
//   const params = new URLSearchParams()
//   params.append('ids', ids.join(','))
//   return callApi({
//     url: `/quizz-themes/search?${params.toString()}`
//   })
// }
export const getQuizzThemes = () =>
  callApi({
    url: '/quizz-themes'
  })
export const getQuizzTheme = (quizzThemeId) =>
  callApi({
    url: `/quizzs/${quizzThemeId}`
  })
export const createQuizzTheme = (data) =>
  callApi({
    url: '/quizz-themes',
    method: 'POST',
    data
  })

/* Quizz */
export const getQuizzes = () =>
  callApi({
    url: '/quizzs'
  })
export const getQuizz = (quizzId) =>
  callApi({
    url: `/quizzs/${quizzId}`
  })
export const createQuizz = (data) =>
  callApi({
    url: '/quizzs',
    method: 'POST',
    data
  })
export const deleteQuizz = (quizzId) =>
  callApi({
    url: `/quizzs/${quizzId}`,
    method: 'DELETE'
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
export const sendGameInvitation = (invitation) =>
  callApi({
    url: '/game-invitations',
    method: 'POST',
    data: invitation
  })
export const cancelGameInvitation = (data) =>
  callApi({
    url: `/game-invitations/cancel`,
    method: 'POST',
    data
  })
export const acceptGameInvitation = (data) =>
  callApi({
    url: `/game-invitations/accept`,
    method: 'POST',
    data
  })
export const declineGameInvitation = (data) =>
  callApi({
    url: `/game-invitations/decline`,
    method: 'POST',
    data
  })
export const getHistory = () =>
  callApi({
    url: '/history'
  })
export const getHistoryLastEntries = () =>
  callApi({
    url: '/history/stats/last-entries'
  })
export const getStatsAverage = (days) =>
  callApi({
    url: `/stats/average?days=${days}`
  })
export const getGameByCode = (code) =>
  callApi({
    url: `/games/${code}`
  })

/* Achievements */
export const getAchievements = () =>
  callApi({
    url: '/achievements'
  })
export const getUserAchievements = () =>
  callApi({
    url: '/user-achievements'
  })
