import Post from "@/models/Post"
import connectMongoDatabase from "@/utils/db"
import { NextResponse } from "next/server"

export const GET = async(request, {params}) => {
    const {id} = params
    //fetch
    try {
        await connectMongoDatabase()
        let post = await Post.findById(id)
        return new NextResponse(JSON.stringify(post), {status : 200})

    } catch (error) {
        return new NextResponse("Database Error", {status : 500})
    }
}