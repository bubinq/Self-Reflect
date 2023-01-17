import { useContext } from "react";
import { ModalContext } from "../contexts/ModalContext";
import { OpeningModal } from "./OpeningModal";
import { HealthModal } from "./HealthModal";
import { WealthModal } from "./WealthModal";
import { RelationShipModal } from "./RelationShipModal";

export const Modals = () => {
  const { modalIdx } = useContext(ModalContext);

  switch (modalIdx) {
    case 1:
      return <OpeningModal></OpeningModal>;
    case 2:
      return <HealthModal></HealthModal>;
    case 3:
      return <WealthModal></WealthModal>;
    case 4:
      return <RelationShipModal></RelationShipModal>;
    default:
      return <OpeningModal></OpeningModal>;
  }
};
