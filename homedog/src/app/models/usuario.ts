export class Usuarios {
    /*  user: String,
      pass: String,
      date: { type: Date, default: Date.now},
      image: String*/
    constructor(
        public _id: string,
        public user: string,
        public pass: string,
        public date: any,
        public image: string
    ) { }
}