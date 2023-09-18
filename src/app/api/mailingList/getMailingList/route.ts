import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'
const prisma = new PrismaClient()

type MailingList = {
    firstName?: string,
    lastName?: string,
    email?: string,
}

export async function GET() {
    try {
        let mailingList = await prisma.mailingList.findMany({
            select: {
                firstName: true,
                lastName: true,
                email: true,
                recieveEmails: true
            }
        })

        return NextResponse.json({ mailingList }, { status: 200 })
    } catch (err) {
        console.log(err)
        return NextResponse.json({ error: `Internal Server Error: ${err}` }, { status: 500 });
    }
}