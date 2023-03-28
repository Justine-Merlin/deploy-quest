import React, { useState } from "react";
import { gql, useMutation } from '@apollo/client';
import { Button, Form, Input, Label } from "./styles/form-elements";
import { WilderData } from "./App";


const CREATE_WILDER = gql`
mutation AddWilderMutation($addWilderWilder: WilderInput!) {
  addWilder(wilder: $addWilderWilder) {
    name
  }
}`;


function AddWilder() {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");

  const [addWilder, { data, error }] = useMutation<{addWilder: WilderData}>(CREATE_WILDER);
  if (error) return <p>Error : {error.message}</p>;
  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        addWilder(
          {
            variables: {
              addWilderWilder: {
                name,
                city
              }
            }
          }
        )
      }}
    >
      {data && <p>wilder { data.addWilder.name } a été ajouté.e</p>}
      <Label htmlFor="name-input">Name :</Label>
      <Input
        id="name-input"
        type="text"
        placeholder="Type the name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Label htmlFor="city-input">City :</Label>
      <Input
        id="city-input"
        type="text"
        placeholder="Type the city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <Button>Add</Button>
    </Form>
  );
}

export default AddWilder;
