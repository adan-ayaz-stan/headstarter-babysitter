import { embedMany } from "ai";
import { mistral } from "@ai-sdk/mistral";

const embeddingModel = mistral.embedding("mistral-embed");

export async function POST() {
  return new Response("Hello, Next.js!");
}
