import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, contact, message } = body;

    if (!name || !email || !contact || !message) {
      return NextResponse.json(
        { message: "Please fill all the fields" },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["priyeshrai.dev@gmail.com"],
      subject: "Contact Me Form",
      html: `<strong>Name: ${name} <br/> 
            Email: ${email} <br/> 
            Contact No: ${contact} <br/>
            Message: ${message} <br/> </strong>`,
    });

    if (error) {
      return NextResponse.json(
        { error: error.message || "Error sending email" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Email sent successfully",success:true},
      { status: 200 }
    );
  } catch (error) {
    console.error("Error handling POST request:", error);
    return NextResponse.json(
      { error: "An error occurred while processing the request." },
      { status: 500 }
    );
  }
}
