import { IUser } from "../interfaces/IUser";
import { IRenderParams } from "../interfaces/IRenderParams";
import { sortUsers } from "./sort.js";
import { searchUser } from "./search.js";

export const renderUsersList = (
  users: IUser[],
  { sort, search, filter }: IRenderParams
) => {
  const usersGrid = document.getElementById("users-grid")! as HTMLUListElement;
  const processedList: IUser[] = sortUsers(
    searchUser([...users], search),
    sort
  );

  if (!processedList.length) {
    usersGrid.innerHTML = `<p>No users found</p>`;
    return;
  }

  const usersList: string[] = processedList.map(
    ({ name, dob, picture }: IUser) => `
      <li class="user">
        <p class="user__name-age">
          <span class="user__name">${name.first}</span>, 
          <span class="user__age">${dob.age}</span>
        </p>
        <p class="user__surname">${name.last}</p>
        <img src="${picture.large}" alt="" class="user__photo" />
      </li>
  `
  );

  usersGrid.innerHTML = usersList.join("");
};
