import Post from "@/models/Post"
import connectMongoDatabase from "@/utils/db"
import { NextResponse } from "next/server"

export const GET = async(request) => {
    //fetch
    try {
        await connectMongoDatabase()
        let posts = await Post.find()
        return new NextResponse(JSON.stringify(posts), {status : 200})

    } catch (error) {
        return new NextResponse("Database Error", {status : 500})
    }
}