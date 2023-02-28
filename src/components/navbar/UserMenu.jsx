import { useContext } from "react";
import { userContext } from "../../storage/userContext";

function UserMenu() {
  const context = useContext(userContext);
  console.log("--->", context);

  return (
    <div>
      <p>Usuario: {context.user}</p>
    </div>
  );
}

export default UserMenu;
