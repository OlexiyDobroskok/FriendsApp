import { getUsers } from "./modules/services.js";
import { renderUsersList } from "./modules/users-list.js";
import { IRenderParams } from "./interfaces/IRenderParams";
import { IUser } from "./interfaces/IUser";
import { SortParam } from "./types/SortParam";

const renderParams: IRenderParams = {
  sort: "a-z",
  search: "",
  filter: "",
};

const handleFormInput = ({ target }: Event, users: IUser[]) => {
  const searchInput = (target as HTMLInputElement).closest(
    "#search"
  )! as HTMLInputElement;
  const sortSelect = (target as HTMLSelectElement).closest(
    "#sort"
  )! as HTMLSelectElement;
  renderParams.search = searchInput?.value;
  renderParams.sort = sortSelect?.value as SortParam;
  renderUsersList(users, renderParams);
};

const init = async () => {
  const exploreForm = document.getElementById(
    "explore-form"
  )! as HTMLFormElement;
  try {
    const users = await getUsers();
    renderUsersList(users, renderParams);
    exploreForm.addEventListener("input", (e: Event) =>
      handleFormInput(e, users)
    );
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
  }
};

init();
