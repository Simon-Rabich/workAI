import fs from 'fs/promises';
import path from 'path';
import { authenticate } from '@google-cloud/local-auth';
import { google } from 'googleapis';

const SCOPES = ['https://www.googleapis.com/auth/gmail.readonly'];
const TOKEN_PATH = path.join(__dirname, '../credentials/token.json');
const CREDENTIALS_PATH = path.join(__dirname, '../credentials/credentials.json');

export async function authorize() {
  let client = await loadSavedCredentialsIfExist();
  if (client) return client;

  client = await authenticate({
    scopes: SCOPES,
    keyfilePath: CREDENTIALS_PATH,
  });

  if (client.credentials) {
    await fs.writeFile(TOKEN_PATH, JSON.stringify(client.credentials));
  }

  return client;
}

async function loadSavedCredentialsIfExist() {
  try {
    const content = await fs.readFile(TOKEN_PATH, 'utf8');
    const credentials = JSON.parse(content);
    return google.auth.fromJSON(credentials);
  } catch {
    return null;
  }
}
