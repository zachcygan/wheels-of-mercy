import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'
const prisma = new PrismaClient()

export async function GET() {
    try {
        let donors = await prisma.donors.findMany({
            select: {
                firstName: true,
                lastName: true,
                email: true,
                phone: true,
                totalDonations: true,
                donations: {
                    select: {
                        id: true,
                        donorId: true,
                        amount: true,
                    }
                }
            }
        })

        return NextResponse.json({ donors }, { status: 200 })
    } catch (err) {
        console.log(err)
        return NextResponse.json({ error: `Internal Server Error: ${err}` }, { status: 500 });
    }
}