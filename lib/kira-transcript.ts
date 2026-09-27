export type TranscriptItem = { id: string; role: "user" | "assistant"; text: string };
export type KiraEvent = { event: string; data?: { state?: string; message?: {
  type?: string; role?: string; action?: string; content?: string; item_id?: string; response_id?: string;
} } };

export function updateTranscript(items: TranscriptItem[], event: KiraEvent): TranscriptItem[] {
  const message = event.data?.message;
  if (event.event !== "message_received" || !message || message.type === "session" ||
      (message.role !== "user" && message.role !== "assistant") ||
      !["created", "delta", "completed"].includes(message.action ?? "")) return items;
  const id = message.item_id || message.response_id;
  if (!id) return items;
  const index = items.findIndex((item) => item.id === id);
  const content = message.content ?? "";
  // Typed input is displayed immediately. Reconcile its eventual server echo.
  const pending = index < 0 && message.role === "user" && content
    ? items.findIndex((item) => item.id.startsWith("local-") && item.text === content) : -1;
  const target = index >= 0 ? index : pending;
  const next = [...items];
  const previous = target >= 0 ? next[target].text : "";
  const text = message.action === "delta" ? previous + content : content || previous;
  const item: TranscriptItem = { id, role: message.role, text };
  if (target >= 0) next[target] = item;
  else if (message.item_id) next.push(item);
  return next.slice(-100);
}
