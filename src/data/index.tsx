import Dexie from "dexie";

interface Friend {
  id?: number;
  name?: string;
  age?: number;
}

class PotatoDatabase extends Dexie {
  public friends: Dexie.Table<Friend, number>; // id is number in this case

  public constructor() {
    super("PotatoDatabase");
    this.version(1).stores({
      friends: "++id,name,age",
    });
    this.friends = this.table("friends");
  }
}

const db = new PotatoDatabase();

export default db;