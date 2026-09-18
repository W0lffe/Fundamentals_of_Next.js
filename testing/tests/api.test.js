import { GET } from '../src/app/api/hello/route';

jest.mock("next/server", () => ({
    NextResponse: {
        json: (body, init) => ({
            status: init?.status || 200,
            json: async () => body,
        }),
    },
}));


test("Hello API returns message", async() => {

    const message = "This message is from Hello API!";
    const response = await GET();
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data).toEqual({message})
})