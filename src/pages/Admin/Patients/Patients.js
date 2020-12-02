import React, { useState, useEffect } from "react";
import { getAccessTokenApi } from "../../../api/auth";
import { getPatients } from "../../../api/pacientes";
import ListPatients from "../../../components/Admin/Patients/ListPatients";
export default function Patients() {
  return (
    <div>
      <h2>pacientes</h2>
    </div>
  );
}
