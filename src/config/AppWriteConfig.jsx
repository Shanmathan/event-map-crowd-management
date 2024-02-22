import { Account, Client, Databases, Storage } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("65a42e80a8a094397926");

export const account = new Account(client);

export const database = new Databases(client, "65a4323a1201a22bec22");

export const storage = new Storage(client);
