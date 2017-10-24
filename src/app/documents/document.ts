export class Document {
  _id?: string;
  name: string;
  body: string;
  categories: {
    cluster: string;
    group: string;
  }
}
