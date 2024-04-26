import Post from "@/models/Post";
import connectMongoDatabase from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  const url = new URL(request.url);

  const username = url.searchParams.get("username"); ///api/posts?[[username=${session.data.user.name}]]
  //fetch
  try {
    await connectMongoDatabase();
    //In Blog Page we are not passing userName so it fetches all the posts, but in Dashboard we're passing usrName so just fetching those posts
    let posts = await Post.find(username && { username }); //if username is there fetch the userName data else fetch All.
    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const POST = async (request) => {
  //   const { title, desc, img, content, username } = await request.json();
  const body = await request.json();
  const newPost = new Post(body)
  //fetch
  try {
    await connectMongoDatabase();
    await newPost.save()
    // let posts = await Post.create({ title, desc, img, content, username });
    return new NextResponse("Post has been created", { status: 201 });
  } catch (error) {
    console.log(error);
    return new NextResponse("Database Error", { status: 500 });
  }
};
