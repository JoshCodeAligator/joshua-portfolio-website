import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend("re_eRiQfdG9_8CouJedaUEXyX9U1hn1Av5qv");
const fromEmail = "joshdebele8@gmail.com";

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  console.log(email, subject, message);
  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: [fromEmail, email],
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thank you for contacting us!</p>
          <p>New message submitted:</p>
          <p>{message}</p>
        </>
      ),
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}