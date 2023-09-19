import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'
const prisma = new PrismaClient()

type MailingList = {
    firstName?: string,
    lastName?: string,
    email?: string,
}

export async function POST(req: Request) {
    try { 
        const data: MailingList = await req.json()
        const { firstName, lastName, email } = data

        if (!firstName || !lastName || !email) return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        
        // Check if the user already signed up for the mailing list
        let mailingList = await prisma.mailingList.findUnique({
            where: {
                email: email
            }
        })

        if (mailingList) {
            return NextResponse.json({ error: 'This email is already signed up for the mailing list' }, { status: 400 });
        } else {
            mailingList = await prisma.mailingList.create({
                data: {
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                }
            })
        }

        return NextResponse.json({ mailingList }, { status: 200 })
    } catch (err) {
        console.log(err)
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}