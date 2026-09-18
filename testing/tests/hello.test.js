import {hello} from '@/app/page';

test("testing hello utility function", () => {

    const message = hello("Henry");
    expect(message).toBe("Hello, Henry")

})