import { useRoomDetailsController } from "@/hooks/room";

export function Room() {
  const { roomsDetailsQuery } = useRoomDetailsController();

  return <h1>Room</h1>;
}
