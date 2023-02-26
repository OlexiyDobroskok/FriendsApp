import { IUser } from "../interfaces/IUser";
import { SortParam } from "../types/SortParam";

export const sortUsers = (users: IUser[], param: SortParam): IUser[] => {
  if (param === "a-z")
    return [...users].sort((firstUser: IUser, secondUser: IUser) =>
      firstUser.name.first.localeCompare(secondUser.name.first)
    );
  if (param === "z-a")
    return [...users].sort((firstUser: IUser, secondUser: IUser) =>
      secondUser.name.first.localeCompare(firstUser.name.first)
    );
  if (param === "asc")
    return [...users].sort(
      (firstUser: IUser, secondUser: IUser) =>
        firstUser.dob.age - secondUser.dob.age
    );
  if (param === "desc")
    return [...users].sort(
      (firstUser: IUser, secondUser: IUser) =>
        secondUser.dob.age - firstUser.dob.age
    );
  return users;
};
