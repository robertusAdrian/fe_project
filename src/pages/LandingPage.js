import React, { Component } from "react";

import {
  Container,
  FromWrap,
  FormContent,
  Form,
  Formh1,
  Formh2,
} from "./Styles";

// Contoh Data.json
import ItemDetail from "data/item.json";

export default class LandingPage extends Component {
  async componentDidMount() {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: "Testing" }),
    };

    const response = await fetch("http://localhost:8080/", requestOptions);
    const data = await response.json();

    console.log(data);
  }

  addItem = (e) => {
    e.preventDefault();

    this.props.item.add({
      name: this.refs.name.value,
      age: this.refs.age.value,
      city: this.refs.city.value,
    });

    this.refs.name.value = null;
    this.refs.age.value = null;
    this.refs.city.value = null;
  };

  render() {
    return (
      <>
        <Container>
          <FromWrap>
            <FormContent>
              <Form onSubmit={this.addItem}>
                <Formh1>Halo</Formh1>
                {ItemDetail.Users.map((item, index) => (
                  <>
                    <div className="container" key={`form-${index}`}>
                      <Formh2>Username:{item.Name}</Formh2>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        ref="name"
                        placeholder="Enter Name"
                      />

                      <Formh2>Age:{item.Age}</Formh2>
                      <input
                        type="text"
                        className="form-control"
                        id="age"
                        ref="age"
                        placeholder="Enter Age"
                      />

                      <Formh2>City:{item.City}</Formh2>
                      <input
                        type="text"
                        className="form-control"
                        id="city"
                        ref="city"
                        placeholder="Enter City"
                      />

                      <button type="submit" className="button">
                        Submit
                      </button>
                    </div>
                  </>
                ))}
              </Form>
            </FormContent>
          </FromWrap>
        </Container>
      </>
    );
  }
}
