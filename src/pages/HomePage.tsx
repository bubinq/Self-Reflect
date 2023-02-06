import { Header } from "../components/Header";
import { Modal } from "../utilities/modals";
import { useContext, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "../contexts/AuthContext";

export const HomePage = () => {

  const {setUser} = useContext(AuthContext)

  useEffect(() => {
    const loadAuthUser = async () => {
      const response = await axios.get(
        "http://localhost:8000/auth/login/success",
        { withCredentials: true }
      );
      setUser(response.data);
    };
    loadAuthUser();
  }, []);
  return (
    <div>
      <Header></Header>
      <Modal></Modal>
    </div>
  );
};
