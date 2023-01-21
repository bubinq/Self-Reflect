import { useContext } from "react";
import { ModalContext } from "../contexts/ModalContext";
import { OpeningCard } from "./OpeningCard";
import { HealthCard } from "./HealthCard";
import { WealthCard } from "./WealthCard";
import { RelationShipCard } from "./RelationShipCard";

export const Modals = () => {
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
