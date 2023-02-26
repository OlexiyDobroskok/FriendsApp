import { IUser } from "../interfaces/IUser";

export const searchUser = (users: IUser[], param: string): IUser[] => {
  if (!param) return users;
  return users.filter(
    ({ name, email }: IUser) =>
      name.first.includes(param) ||
      name.last.includes(param) ||
      email.includes(param)
  );
};
