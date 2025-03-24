import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    // Create a transporter
    const mail = "hazrataliein@gmail.com";
    const password = "gdmc lahx nmsn oymu";

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: mail,
        pass: password,
      },
    });

    const mailOptions = {
      from: mail,
      to: "hazrataliein@gmail.com",
      subject: data.subject,
      text: `You have received a new message from ${data.name} \n\n Message: ${data.message} \n\n Reply to: ${data.email}`,
    };

    return new Promise((resolve, reject) => {
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error("Email sending failed:", error);
          resolve(
            NextResponse.json(
              { not_sent: error.message, status: "!sent" },
              { status: 500 }
            )
          ); // Indicate error with 500 status
        } else {
          console.log("Email sent:", info.response);
          resolve(
            NextResponse.json({ Email_sent: info.response, status: "sent" })
          );
        }
      });
    });
  } catch (error: any) {
    console.error("Error processing request:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    ); // Indicate error with 500 status
  }
}
