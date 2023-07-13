import { createQueryKeys } from '@lukemorales/query-key-factory'

export const usersKeys = createQueryKeys('users', {
    detail: null,
    list: (filters) =>  [{ filters }],
})

