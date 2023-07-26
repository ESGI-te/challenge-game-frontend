
import { useQuery } from '@tanstack/vue-query'
import { queryKeys } from '../queryKeys'
import { getHistoryLastEntries } from 'api'

export const useLastEntriesQuery = () => {
    return useQuery({
        queryKey: queryKeys.history.lastEntryList().queryKey,
        queryFn: () => getHistoryLastEntries()
    })
}



