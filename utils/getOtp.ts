import * as path from 'path';
import * as gmail from 'gmail-tester';

export async function getOtpFromGmail(): Promise<string> {
  const email = await gmail.check_inbox(
    path.resolve(__dirname, '../credentials/credentials.json'),
    path.resolve(__dirname, '../credentials/gmail_token.json'),
    {
      to: 'simonraviz1997@gmail.com',
      subject: 'Your verification code',
      wait_time_sec: 5,
      max_wait_time_sec: 45,
      include_body: true,
    }
  );

  if (!email || !email[0]) {
    throw new Error('OTP email not found!');
  }

  const body = email[0].body.text || email[0].body.html;

  const match = body.match(/\b\d{6}\b/);
  if (!match) {
    throw new Error('OTP code not found in email body!');
  }

  return match[0];
}
