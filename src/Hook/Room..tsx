import { viewAllCreateRooms } from "../Api/CreatingRoomsApi"
import { useQuery } from "@tanstack/react-query"

export const useTanRoom = () => {
    const { data: rooms, isLoading } = useQuery({
        queryKey: ['viewrooms'],
        queryFn: viewAllCreateRooms,
        refetchInterval: 1000,
    })
    return { rooms, isLoading}
}
