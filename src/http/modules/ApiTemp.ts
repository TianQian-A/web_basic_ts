import { httpInstance } from "..";

export namespace ApiTemp {
  interface Req {
    id: number;
  }
  export interface Res {
    name: string;
  }
  export const findUserById = (params: Req) => {
    return httpInstance.get<Res>("/apis/findUser", params);
  };
}
