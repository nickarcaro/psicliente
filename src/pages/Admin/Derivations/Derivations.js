import React, { useState, useEffect } from "react";
import { getAccessTokenApi } from "../../../api/auth";
import { getRUTPatients } from "../../../api/pacientes";
import { getMotivos, getDerivations } from "../../../api/derivaciones";
import ListDerivations from "../../../components/Admin/Derivations/ListDerivations";
import { getCoordinadores } from "../../../api/convenios";
export default function Derivations() {
  const [coordinadores, setCoordinadores] = useState([]);
  const [reloadCoordinadores, setReloadCoordinadores] = useState(false);
  const [motivos, setMotivos] = useState([]);
  const [reloadMotivos, setReloadMotivos] = useState(false);
  const [derivaciones, setDerivaciones] = useState([]);
  const [reloadDerivaciones, setReloadDerivaciones] = useState(false);
  const [rutconsultants, setRutConsultants] = useState([]);
  const [reloadRutConsultants, setReloadRutConsultants] = useState(false);

  const token = getAccessTokenApi();

  useEffect(() => {
    getMotivos(token).then((response) => {
      setMotivos(response.rows);
    });
    getCoordinadores(token).then((response) => {
      setCoordinadores(response.rows);
    });

    getDerivations(token).then((response) => {
      setDerivaciones(response.rows);
    });
    getRUTPatients(token).then((response) => {
      setRutConsultants(response.rows);
    });

    setReloadMotivos(false);
    setReloadCoordinadores(false);
    setReloadRutConsultants(false);
    setReloadDerivaciones(false);
  }, [
    token,
    reloadMotivos,
    reloadCoordinadores,
    reloadRutConsultants,
    reloadDerivaciones,
  ]);

  return (
    <div>
      <ListDerivations
        motivos={motivos}
        coordinadores={coordinadores}
        rutconsultants={rutconsultants}
        derivaciones={derivaciones}
        reloadCoordinadores={reloadCoordinadores}
        reloadRutConsultants={reloadRutConsultants}
        setReloadDerivaciones={setReloadDerivaciones}
        reloadMotivos={reloadMotivos}
      ></ListDerivations>
    </div>
  );
}
