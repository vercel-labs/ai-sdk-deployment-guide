import { Chat } from "./_components/chat";

// allow streaming responses up to 30 seconds
export const maxDuration = 30;

export default function Page() {
  return <Chat />;
}
