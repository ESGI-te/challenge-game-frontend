import { mergeQueryKeys } from '@lukemorales/query-key-factory'
import { userKeys } from './user/userKeys'
import { gameKeys } from './game/gameKeys'
import { lobbyKeys } from './lobby/lobbyKeys'
import { userInvitationKeys } from './userInvitation/userInvitationKeys'
import { userFriendsKeys } from './userFriends/userFriendsKeys'
import { gameInvitationKeys } from './gameInvitation/gameInvitationKeys'
import { quizzThemeKeys } from './quizzTheme/quizzThemeKeys'
import { historyKeys } from './history/historykeys'
import { statsKeys } from './stats/statsKeys'
import { quizzKeys } from './quizz/quizzKeys'
import { achievementKeys } from './achievement/achievementKeys'

export const queryKeys = mergeQueryKeys(
  userKeys,
  gameKeys,
  lobbyKeys,
  userInvitationKeys,
  userFriendsKeys,
  gameInvitationKeys,
  quizzThemeKeys,
  historyKeys,
  statsKeys,
  quizzKeys,
  achievementKeys
)
