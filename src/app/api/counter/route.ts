export async function GET(request: Request) {

    return Response.json({ 
        method :'GET',
        count:100,
     })
}
export async function POST(request: Request) {

    return Response.json({ 
        method :'POST',
        count:100,
     })
}