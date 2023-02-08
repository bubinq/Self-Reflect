import { Header } from "../components/Header";
import { Modal } from "../utilities/modals";
import { useContext, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "../contexts/AuthContext";

export const HomePage = () => {
  const { user, setUser } = useContext(AuthContext);

  useEffect(() => {
    const controller = new AbortController();

    const loadAuthUser = async () => {
      const response = await axios.get(
        "http://localhost:8000/auth/login/success",
        { withCredentials: true, signal: controller.signal }
      );
      setUser(response.data);
    };
    if (!user) {
      loadAuthUser();
    }

    return () => {
      controller.abort();
    };
  }, []);
  return (
    <div>
      <Header></Header>
      <Modal></Modal>
    </div>
  );
};
