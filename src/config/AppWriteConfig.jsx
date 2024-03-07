// Importing necessary modules from appwrite SDK
import { Account, Client, Databases, Storage } from "appwrite";

// Creating a new client instance
const client = new Client();

// Setting the endpoint and project ID for the client
client
  .setEndpoint("https://cloud.appwrite.io/v1") // Set your server API endpoint
  .setProject(""); // Add Your project ID here

// Creating a new account instance with the client
export const account = new Account(client);

// Creating a new database instance with the client and a database ID
export const database = new Databases(client, ""); // Add your database ID here

// Creating a new storage instance with the client
export const storage = new Storage(client);
