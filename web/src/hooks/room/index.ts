import { fetchRoomDetails } from "@/services/room";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";

type RoomParams = {
  roomId: string;
};
export function useRoomDetailsController() {
  const params = useParams<RoomParams>();
  const navigate = useNavigate();

  const roomsDetailsQuery = useQuery({
    queryKey: ["get-room-details"],
    queryFn: () => fetchRoomDetails(params.roomId!),
  });

  React.useEffect(() => {
    if (!params.roomId) {
      navigate("/", {
        replace: true,
      });
    }
  }, [params.roomId]);

  return {
    roomsDetailsQuery,
  };
}
