import prisma from "@/lib/prisma"
import { User } from "@prisma/client"
import Link from "next/link"
import { GetServerSideProps } from "next"
import { FC } from "react"



async function createUser() {
    /*const user = await prisma.user.create({
        data: {
            userNum (?)
            firstName
            lastName
            street
            city
            state
            postalCode
            commission
            rate
        },
    })*/
}

export default function UserCreate() {
    return (
        <main className="page-content user-creation">
            <h1>Hello Test</h1>
        </main>
    )
}