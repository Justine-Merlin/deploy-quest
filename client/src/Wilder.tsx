import React from "react";
import blank_profile from "./blank-profile-picture-female.png";
import { Card } from "./styles/elements";

type WilderProps = {
  name: string
  city: string
}

function Wilder({ city, name }: WilderProps) {
  return (
    <Card>
      <img src={blank_profile} alt={`${name} Profile`} />
      <h3>{name}</h3>
      <h4>City</h4>
      <p>{city}</p>
    </Card>
  );
}

export default Wilder;
