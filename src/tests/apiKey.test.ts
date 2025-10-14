import { getAPIKey } from "src/api/auth";
import { describe, expect, test } from "vitest";

const person = {
    isActive: true,
    age: 32,
};

describe("person", () => {
    test("person is defined", () => {
        expect(person).toBeDefined();
    });

    test("is active", () => {
        expect(person.isActive).toBeTruthy();
    });
});

const validHeaders = {
    authorization:
        "ApiKey eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VyVVVJRCI6IjM2NmYxZDYwLWE4NzUtNGQxZi05YjdjLTFhZWM2MWQwNDU1ZCIsImlzcyI6ImJvb3QuZGV2IiwiZXhwIjoxNzYwNDQ2NDA4LCJpYXQiOjE3NjA0NDI4MDh9.RFcogsfD3XWz5xDNE57Lx7pQWTxIkgyGFt45thTmadM ",
};
const inValidHeaders = {
    authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VyVVVJRCI6IjM2NmYxZDYwLWE4NzUtNGQxZi05YjdjLTFhZWM2MWQwNDU1ZCIsImlzcyI6ImJvb3QuZGV2IiwiZXhwIjoxNzYwNDQ2NDA4LCJpYXQiOjE3NjA0NDI4MDh9.RFcogsfD3XWz5xDNE57Lx7pQWTxIkgyGFt45thTmadM ",
};

describe("ApiKey", () => {
    test("is Valid", () => {
        const ApiKey = getAPIKey(validHeaders);
        expect(ApiKey).toBeDefined();
    });

    test("isn't Valid", () => {
        const ApiKey = getAPIKey(validHeaders);
        expect(ApiKey).toBeNull();
    });
});
