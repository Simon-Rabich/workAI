import { google } from 'googleapis';
import { authorize } from './gmail-auth';

export async function fetchLatestOTPCode(): Promise<string> {
  const auth = await authorize();
  const gmail = google.gmail({ version: 'v1', auth });

  const res = await gmail.users.messages.list({
    userId: 'me',
    q: 'from:love@ai.work subject:"Your log in code" is:unread',
    maxResults: 1,
  });

  if (!res.data.messages || res.data.messages.length === 0) {
    throw new Error('No OTP email found.');
  }

  const msgId = res.data.messages[0].id!;
  const msg = await gmail.users.messages.get({
    userId: 'me',
    id: msgId,
    format: 'full',
  });

  const parts = msg.data.payload?.parts || [];
  const part = parts.find(p => p.mimeType === 'text/plain');
  const bodyData = part?.body?.data || '';

  const decoded = Buffer.from(bodyData, 'base64').toString();
  const match = decoded.match(/[A-Z0-9]{6}/i);

  if (!match) {
    throw new Error('OTP code not found in the email content.');
  }

  return match[0];
}
