import { mergeQueryKeys } from '@lukemorales/query-key-factory'
import { usersKeys } from './users/keys';

export const queryKeys = mergeQueryKeys(usersKeys);
