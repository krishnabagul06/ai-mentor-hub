export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: number;
}

export interface AskAiResponse {
  answer: string;
}

const DEFAULT_WEBHOOK_URL =
  "https://krishnabagul.app.n8n.cloud/webhook/cf5e673f-ee4c-4897-abdb-a870f20de770";
const WEBHOOK_URL =
  (import.meta.env.VITE_N8N_WEBHOOK_URL as string | undefined) ?? DEFAULT_WEBHOOK_URL;

/**
 * Extract a text answer from an unknown webhook response payload.
 * n8n workflows vary; we try common shapes and fall back to JSON.
 */
function extractAnswer(data: unknown): string {
  if (typeof data === "string") return data;
  if (Array.isArray(data) && data.length > 0) return extractAnswer(data[0]);
  if (data && typeof data === "object") {
    const obj = data as Record<string, unknown>;
    for (const key of ["answer", "output", "response", "text", "message", "result", "reply"]) {
      const val = obj[key];
      if (typeof val === "string" && val.trim()) return val;
      if (val && typeof val === "object") {
        const nested = extractAnswer(val);
        if (nested && nested !== "```json\n{}\n```") return nested;
      }
    }
  }
  return "```json\n" + JSON.stringify(data, null, 2) + "\n```";
}

export async function askAi(query: string, signal?: AbortSignal): Promise<string> {
  if (!WEBHOOK_URL) {
    throw new Error(
      "AI backend isn't configured yet. Add VITE_N8N_WEBHOOK_URL to enable doubt-solving.",
    );
  }

  const res = await fetch(WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    signal,
    body: JSON.stringify({
      query,
      timestamp: new Date().toISOString(),
    }),
  });

  if (!res.ok) {
    throw new Error(`Request failed (${res.status})`);
  }

  const contentType = res.headers.get("content-type") ?? "";
  if (contentType.includes("application/json")) {
    const data = await res.json();
    return extractAnswer(data);
  }
  const text = await res.text();
  return text || "No response.";
}
