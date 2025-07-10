import type { GetRoomsApiResponse } from "./types";

export async function fetchRooms(): Promise<GetRoomsApiResponse[]> {
  const response = await fetch("http://localhost:3333/rooms");

  if (!response.ok) throw new Error("Erro ao buscar salas");
  return await response.json();
}
