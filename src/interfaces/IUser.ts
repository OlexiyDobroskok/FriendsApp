interface IName {
  title: string;
  first: string;
  last: string;
}

interface IStreet {
  number: number;
  name: string;
}

interface ICoordinates {
  latitude: string;
  longitude: string;
}

interface ITimeZone {
  offset: string;
  description: string;
}

interface ILocation {
  street: IStreet;
  city: string;
  state: string;
  country: string;
  postcode: string;
  coordinates: ICoordinates;
  timezone: ITimeZone;
}

interface ILogin {
  uuid: string;
  username: string;
  password: string;
  salt: string;
  md5: string;
  sha1: string;
  sha256: string;
}

interface IDoB {
  date: string;
  age: number;
}

interface IRegistered {
  date: string;
  age: number;
}

interface IId {
  name: string;
  value: string;
}

interface IPicture {
  large: string;
  medium: string;
  thumbnail: string;
}

export interface IUser {
  gender: string;
  name: IName;
  location: ILocation;
  email: string;
  login: ILogin;
  dob: IDoB;
  registered: IRegistered;
  phone: string;
  cell: string;
  id: IId;
  picture: IPicture;
  nat: string;
}
