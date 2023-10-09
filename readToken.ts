import { decode } from 'hono/jwt';

// Decode the JWT token
const tokenToDecode =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb2xsZWN0aW9uSWQiOiJfcGJfdXNlcnNfYXV0aF8iLCJleHAiOjE2OTY4MDUzNjQsImlkIjoiY3MwdHZscjlvdThpdGF2IiwidHlwZSI6ImF1dGhSZWNvcmQifQ.2HhyHqpDNWvUzYQB0X86E4OTtjayGFNIbghTCBA4i_c';

const { header, payload } = decode(tokenToDecode);
const { collectionId, exp, id, type } = payload;
const formattedDate = new Date(exp);
const epochDate = formattedDate.getTime();

console.log('Decoded Header:', header);
console.log('Decoded Payload:', payload);
console.log('Formatted Date:', formattedDate);
console.log('Epoch Date:', epochDate);
