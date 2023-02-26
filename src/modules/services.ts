import { IResData } from "../interfaces/IResData";
import { IUser } from "../interfaces/IUser";

const setSeed = (seed: string) => {
  localStorage.setItem("seed", seed);
};

const getSeed = (): string | null => {
  return localStorage.getItem("seed");
};

export const getUsers = async (): Promise<IUser[]> => {
  const seed = getSeed();
  const url = `https://randomuser.me/api/?results=1000${
    seed ? `&seed=${seed}` : ""
  }`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP Error! Status: ${response.status}`);
  }
  const data: IResData = await response.json();
  if (!getSeed()) setSeed(data.info.seed);
  return data.results;
};
