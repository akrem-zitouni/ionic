export class Contact {
  id: string;
  firstName: string;
  lastName: string;
  phone: string;
  phone2: string;
  category: ContactCategory;
}

export enum ContactCategory {
  FRIEND = "amis ",
  FAMILY = "famille ",
  PROFESSIONAL = "professionnel",
  OTHER = "autre",


}
