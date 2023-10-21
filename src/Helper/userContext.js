import { createContext } from "react";

const user = createContext({
  user: {
    name: "Dummy Name",
    email: "Dummy@gmail.com",
  },
});

export default user;
