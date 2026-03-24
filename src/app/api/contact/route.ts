import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, message } = body;

    // Validate incoming data
    if (!name || !phone || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Here you would typically integrate with an email service
    // like Resend, SendGrid, or nodemailer to send the email,
    // or save the contact request to a MongoDB database (MERN stack).
    
    // For this demonstration, we'll simulate a successful submission
    console.log('Received new contact request:', { name, phone, message });

    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    return NextResponse.json(
      { message: 'Message received successfully' },
      { status: 200 }
    );
    
  } catch (error) {
    console.error('Error handling contact form submission:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
