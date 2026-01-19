import axios, { AxiosInstance } from "axios";

export class AxiosLib {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      validateStatus: (status) => status < 500,
    });
  }

  async get(url: string, headers: any) {
    return await this.client.get(url, headers);
  }
}
