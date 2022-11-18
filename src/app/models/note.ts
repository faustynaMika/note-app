export class Note {
  id: string | null;
  title: string;
  description: string;

  constructor(id: string | null, title: string, description: string) {
    this.id = id;
    this.title = title;
    this.description = description;
  }
}
