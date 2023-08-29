// import { useLocalStoredValue } from "../../hooks";
import { useFetch } from "../../../hooks/useFetch.hook";
import { Routes } from "../../models";

export const TestCustomHook = () => {
  // const { storedValue, storeValue } = useLocalStoredValue();
  const { data: users, error: usersError } = useFetch(Routes.GET_USERS);
  const { data: users2, error: usersError2 } = useFetch(Routes.GET_USERS);

  // const handleClick = () => {
  //   storeValue("lastName", "Buscaglia");
  // };

  return (
    <div>
      {usersError ? JSON.stringify(usersError) : JSON.stringify(users)}
      {usersError2 ? JSON.stringify(usersError2) : JSON.stringify(users2)}
      {/* <button onClick={handleClick}>Set Alan inside the State</button> */}
    </div>
  );
};
