import { NextResponse } from "next/server"

export const GET = async()=> {
  console.log("get")
  return NextResponse.json({a:1})
}
export const POST = async(request: Request)=>{
  console.log("post")
  console.log(await request.json())
  return NextResponse.json({a:1})
}