import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'
const prisma = new PrismaClient()

type MailingList = {
    email?: string,
    recieveEmails?: boolean,
}

export async function PUT(req: Request) {
    try {
        const data: MailingList = await req.json()
        const { email, recieveEmails } = data

        if (!email) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        // Check if the donor already exists
        let user = await prisma.mailingList.findUnique({
            where: {
                email: email
            }
        })
        if (user) {
            let updateList = await prisma.mailingList.update({
                where: {
                    email: email
                },
                data: {
                    recieveEmails: false
                }
            })
        } else {
            return NextResponse.json({ error: 'This email is not signed up for the mailing list' }, { status: 400 });
        }

        return NextResponse.json({ data }, { status: 200 })
    } catch (err) {
        console.log(err)
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}