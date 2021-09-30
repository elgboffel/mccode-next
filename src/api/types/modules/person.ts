import { ImageField } from "@api/types/fields/image";

export interface PersonModule {
  image: ImageField;
  name: string;
  title: string;
  company: string;
  shortBio: string;
  email: string;
  phone: string;
  facebook: string;
  twitter: string;
  github: string;
}
