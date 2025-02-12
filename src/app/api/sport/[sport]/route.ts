import { NextRequest,NextResponse } from "next/server"
type GETProps = {
    params: Promise<{ sport: string }>
}
export async function GET(req: NextRequest, { params }: GETProps) {
    const { sport } = await params
    const response = await fetch(`https://newsapi.org/v2/everything?q=${sport}&language=en&apiKey=${process.env.API_KEY}`)
    const data = await response.json();
    return NextResponse.json(data,{status:200})
}