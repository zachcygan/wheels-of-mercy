import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'
const prisma = new PrismaClient()


type Donor = {
    firstName?: string,
    lastName?: string,
    email?: string,
    phone?: string,
    amount?: number,
}

export async function POST(req: Request) {
    try {
        
        const data: Donor = await req.json()
        console.log(data)
        const { firstName, lastName, email, phone, amount } = data

        if (!firstName || !lastName || !email || !phone || !amount) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        // Check if the donor already exists
        let donor = await prisma.donors.findUnique({
            where: {
                email: email
            }
        })

        if (donor) {
            donor = await prisma.donors.update({
                where: {
                    id: donor.id
                },
                data: {
                    totalDonations: donor.totalDonations + amount
                }
            })
        } else {
            donor = await prisma.donors.create({
                data: {
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    phone: phone,
                    totalDonations: amount
                }
            })
        }

        const donation = await prisma.donations.create({
            data: {
                donorId: donor.id,
                amount: amount
            }
        })

        return NextResponse.json({ donor, donation }, { status: 200 })
    } catch (err) {
        console.error("Error in POST function:", err);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}