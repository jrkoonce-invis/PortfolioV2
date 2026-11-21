// Health check endpoint for Kubernetes probes.

export const dynamic = "force-dynamic";

export function GET() {
  return Response.json({
    status: "ok",
    uptimeSeconds: Math.round(process.uptime()),
  });
}