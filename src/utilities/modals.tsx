import { useContext } from "react";
import { ModalContext } from "../contexts/ModalContext";
import { OpeningCard } from "../components/OpeningCard";
import { HealthCard } from "../components/HealthCard";
import { WealthCard } from "../components/WealthCard";
import { RelationShipCard } from "../components/RelationShipCard";

export const Modal = () => {
  const { modalIdx } = useContext(ModalContext);

  switch (modalIdx) {
    case 1:
      return <OpeningCard></OpeningCard>;
    case 2:
      return <HealthCard></HealthCard>;
    case 3:
      return <WealthCard></WealthCard>;
    case 4:
      return <RelationShipCard></RelationShipCard>;
    default:
      return <OpeningCard></OpeningCard>;
  }
};
