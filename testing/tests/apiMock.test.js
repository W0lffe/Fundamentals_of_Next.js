import { GET } from '../src/app/api/hello/route';

jest.mock("next/server", () => ({
    NextResponse: {
        json: (body, init) => ({
            status: init?.status || 200,
            json: async () => ({message: "THIS IS MOCK MESSAGE"}),
        }),
    },
}));


test("Hello API returns mocked message", async() => {

    const message = "THIS IS MOCK MESSAGE";
    const response = await GET();
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data).toEqual({message})
})