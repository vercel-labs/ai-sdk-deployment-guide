import { Chat } from "./_components/chat";

// Force the page to be dynamic and allow streaming responses up to 30 seconds
export const dynamic = "force-dynamic";
export const maxDuration = 30;

export default function Page() {
  return <Chat />;
}
