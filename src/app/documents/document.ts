export class Document {
  _id?: string;
  name: string;
  custodian: string;
  body: string;
  wordvec: string;
  categories: {
    cluster: string;
    group: string;
  }
}
