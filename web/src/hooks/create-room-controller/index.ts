import { fetchRooms } from "@/services/create-room";
import { useQuery } from "@tanstack/react-query";

export function useCreateRoomController() {
  const roomsQuery = useQuery({
    queryKey: ["get-rooms"],
    queryFn: fetchRooms,
  });

  return {
    roomsQuery,
  };
}
