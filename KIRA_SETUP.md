# Kira local setup

## Portrait recording

Open `/recording` for a 9:16 canvas containing the actual 360 × 640 mobile layout. It fits the available browser area without outer scrollbars; the recording frame also hides its page scrollbars while preserving wheel/touch scrolling. This leaves normal site breakpoints unchanged. For exactly 1080 × 1920 output, use a portrait 1080 × 1920 display, 100% display scaling and browser zoom, and F11 to remove browser chrome. The canvas then renders at 3× scale. Smaller viewports show a smaller preview.

For a desktop screen recording, the entire canvas must occupy 1080 × 1920 physical pixels in the captured source (for example, a portrait monitor or a suitably sized virtual display/window). Chrome DevTools “Fit to window” shrinks the visible page: recording that small preview and enlarging it still loses detail. Configure the recorder for 1080 × 1920 without upscaling a smaller source. This mode preserves mobile proportions; it cannot add detail beyond Napster's incoming avatar video resolution.

Install dependencies with `npm install`, then create an untracked `.env.local`:

```dotenv
NAPSTER_COMPANION_ID=1ae1807c-5433-4425-8e09-e035e2e14c2b
NAPSTER_API_KEY=your_authorized_key
```

Run `npm run dev`. Open the local site, select **Talk to Kira**, then **Start conversation** and allow microphone access. The SDK requires microphone permission even if you subsequently mute it and type. No Napster resources are created or modified other than transient conversation sessions. The configured companion must already be generated and accessible to the key.

The SDK is pinned to 1.5.0, matching the inspected Ask_SLT implementation. Browser audio/video flows directly to Napster. The Next.js route creates a short-lived token and supplies website-derived instructions. No agent ID, WebRTC URL, answer tool, or separate model key is required.

Application-supplied session tags use `project: SLT Workmate`. This is a label, not anonymization: Napster processes Kindforth's instructions and conversation content and may receive the browser origin. SDK analytics are disabled. Do not place the key in any `NEXT_PUBLIC_` variable.

## Verification

`npm test`, `npm run lint`, `npx tsc --noEmit`, and `npm run build` cover automated checks. Live testing requires an authorized Napster key, working microphone and browser WebRTC access. Verify:

- Opening greeting exactly once; recognizable live face and synchronized speech.
- Services, founders, published projects, pricing, unknown facts, and follow-up questions.
- Typed messages, spoken interruption, speaker/microphone mute, stop speaking.
- Internal navigation preserves the session; closing, ending, offline, and five-minute inactivity release the microphone.
- Denied microphone permission, autoplay recovery, failed connection, retry, and rapid open/close.
- Desktop Chrome, iOS Safari, Android Chrome, keyboard focus and mobile sizing.

The session route applies a five-second connection cooldown and six attempts per minute **per server process**, independently of client IP headers. A distributed public deployment must also configure a shared/edge rate limit on `/api/kira/connection`; process-local counters do not coordinate replicas. Napster account quotas remain another limit. Origin validation is not authentication and cannot stop non-browser clients from forging an Origin header.

Public deployment is separate. Configure the two server environment variables there, ensure the host forwards the canonical request origin, and validate the deployed endpoint before release. Never log tokens or transcripts. The widget holds at most 100 conversation items in memory; closing clears them. Napster's own session retention is separate.

Knowledge is assembled from repository content for each new connection. Publishing changes updates new sessions; ongoing conversations retain their original instructions. Draft case studies and articles are excluded.
