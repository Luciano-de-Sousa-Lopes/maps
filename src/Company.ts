import { faker } from "@faker-js/faker";
import { Mappable } from "./CustomMap";

export class Company implements Mappable {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };
  content: string;

  constructor() {
    (this.companyName = faker.company.name()),
      (this.catchPhrase = faker.company.catchPhrase()),
      (this.content = `<div>
        <h2>Company name: ${this.companyName}</h2>
        <h3>Company catch phrase: ${this.catchPhrase}</h3>
        <p>This is the Company location on the map</p>
      </div>`),
      (this.location = {
        lat: parseFloat(faker.address.latitude()),
        lng: parseFloat(faker.address.longitude()),
      });
  }
}
