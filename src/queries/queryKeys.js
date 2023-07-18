import { mergeQueryKeys } from '@lukemorales/query-key-factory'
import { userKeys } from './user/userKeys'
import { gameKeys } from './game/gameKeys'
import { lobbyKeys } from './lobby/lobbyKeys'
import { userInvitationKeys } from './userInvitation/userInvitationKeys'
import { userFriendsKeys } from './userFriends/userFriendsKeys'

export const queryKeys = mergeQueryKeys(
  userKeys,
  gameKeys,
  lobbyKeys,
  userInvitationKeys,
  userFriendsKeys
)
