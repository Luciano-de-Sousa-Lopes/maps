import { faker } from "@faker-js/faker";
import { Mappable } from "./CustomMap";

export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  content: string;

  constructor() {
    this.name = faker.name.firstName();
    this.content = `<div>
        <h2>Name: ${this.name}</h2>
        <p>This is the User location on the map</p>
    </div>`;
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
}
