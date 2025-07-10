import { useCreateRoomController } from "@/hooks/create-room-controller";
import { Link } from "react-router-dom";

export function CreateRoom() {
  const { roomsQuery } = useCreateRoomController();

  const { data, isLoading, error } = roomsQuery;

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Erro: {error.message}</p>
      ) : data?.length === 0 ? (
        <p>Nenhuma sala encontrada.</p>
      ) : (
        <ul className="flex flex-col gap-2">
          {data?.map((room) => (
            <li key={room.id} className="flex items-center gap-2">
              <Link to={`/room/${room.id}`}>{room.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
