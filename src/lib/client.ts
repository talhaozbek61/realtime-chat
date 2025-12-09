import { treaty } from "@elysiajs/eden";
import type { app } from "../app/api/[[...slugs]]/route";

const API_URL = process.env.NEXT_PUBLIC_API_URL?.toString() as string;

// this require .api to enter /api prefix
export const client = treaty<app>(API_URL).api;
