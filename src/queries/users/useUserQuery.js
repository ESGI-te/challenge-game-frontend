import { useQuery } from "@tanstack/vue-query"
import { queryKeys } from "../queryKeys";
import { getUser } from "../../api";

const useUserQuery = () => {
    return useQuery({
        queryKey: queryKeys.users.detail(),
        queryFn: () => getUser()
    })
}

export default useUserQuery;