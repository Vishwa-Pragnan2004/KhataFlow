import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function ForecastRedirectPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | undefined>>;
}) {
  const sp = await searchParams;
  const q = new URLSearchParams();
  q.set("tab", "forecast");
  for (const [k, v] of Object.entries(sp)) {
    if (v && k !== "tab") {
      q.set(k, v);
    }
  }
  redirect("/?" + q.toString());
}
