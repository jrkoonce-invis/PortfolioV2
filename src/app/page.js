import Image from "next/image";

const LEETCODE_USERNAME = "jrkoonce-invis";

const EXTERNAL_LINK_PROPS = { target: "_blank", rel: "noopener noreferrer" };

const ISLE_ROYALE_URL = "https://www.nps.gov/isro/index.htm";
const ULTRAMARATHON_URL = "https://nurun.co/brtc";

const contactLinks = [
  { label: "Linkedin", href: "https://www.linkedin.com/in/jameson-koonce-543292267/" },
  { label: "GitHub", href: "https://github.com/jrkoonce-invis" },
  { label: "Email", href: "mailto:jamesonkoonce@gmail.com" },
  { label: "Legacy site", href: "/legacy" },
];

const photoStack = [
  { color: "/framer/photo-1.jpg", halftone: "/framer/photo-1-halftone.png" },
  { color: "/framer/photo-2.jpg", halftone: "/framer/photo-2-halftone.png" },
  { color: "/framer/photo-3.jpg", halftone: "/framer/photo-3-halftone.png" },
];

async function getLeetCodeSolvedCount(username) {
  try {
    const res = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `query getUserProfile($username: String!) {
          matchedUser(username: $username) {
            submitStatsGlobal { acSubmissionNum { difficulty count } }
          }
        }`,
        variables: { username },
      }),
      next: { revalidate: 86400 },
    });
    if (!res.ok) return null;
    const json = await res.json();
    const stats = json?.data?.matchedUser?.submitStatsGlobal?.acSubmissionNum;
    const total = stats?.find((s) => s.difficulty === "All")?.count;
    return typeof total === "number" ? total : null;
  } catch {
    return null;
  }
}

export default async function Home() {
  const leetcodeSolved = await getLeetCodeSolvedCount(LEETCODE_USERNAME);

  return (
    <main className="mx-auto flex max-w-[720px] flex-col gap-12 px-6 py-16 md:flex-row md:items-start md:gap-[50px] md:px-10 md:py-20">
      <div className="hidden shrink-0 flex-col gap-[10px] md:flex">
        {photoStack.map((photo) => (
          <div
            key={photo.color}
            className="group relative h-[200px] w-[200px] overflow-hidden"
          >
            <Image
              src={photo.halftone}
              alt=""
              fill
              sizes="200px"
              className="object-cover opacity-100 transition-opacity duration-300 group-hover:opacity-0"
            />
            <Image
              src={photo.color}
              alt=""
              fill
              sizes="200px"
              className="object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-[50px] md:w-[380px] md:shrink-0">
        <div className="flex flex-col gap-6">
          <p>
            Hey, I&rsquo;m <span className="font-extrabold">Jameson Koonce</span>, software
            developer and creative based out of Chicago.
          </p>
          <p>
            I have done work for{" "}
            <a href="https://www.hnicorp.com/" className="underline" {...EXTERNAL_LINK_PROPS}>
              HNI Corp
            </a>
            ,{" "}
            <a
              href="https://www.hackster.io/news/sparkfun-partners-with-jameson-koonce-to-build-a-treasure-hunt-around-the-artemis-global-tracker-87b2346102b7"
              className="underline"
              {...EXTERNAL_LINK_PROPS}
            >
              Sparkfun
            </a>
            , and am currently building at{" "}
            <a href="https://www.jpmorganchase.com/" className="underline" {...EXTERNAL_LINK_PROPS}>
              JPMorganChase
            </a>
            .
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <p>This Year</p>
          <div className="flex flex-col gap-1">
            <p className="md:whitespace-nowrap">
              -&gt; Ran a{" "}
              <a href={ULTRAMARATHON_URL} className="underline" {...EXTERNAL_LINK_PROPS}>
                52.4 mile ultramarathon
              </a>
            </p>
            <p className="md:whitespace-nowrap">
              -&gt; Backpacked across{" "}
              <a href={ISLE_ROYALE_URL} className="underline" {...EXTERNAL_LINK_PROPS}>
                Isle Royale
              </a>
            </p>
            <p className="md:whitespace-nowrap">-&gt; Played an original song at an open mic</p>
            {leetcodeSolved !== null && (
              <p className="md:whitespace-nowrap">
                -&gt; Solved{" "}
                <a
                  href={`https://leetcode.com/u/${LEETCODE_USERNAME}/`}
                  className="underline"
                  {...EXTERNAL_LINK_PROPS}
                >
                  {leetcodeSolved} LeetCode problems
                </a>
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <p>Contact</p>
          <div className="flex flex-col items-start">
            {contactLinks.map((link) => (
              <a key={link.label} href={link.href} className="underline" {...EXTERNAL_LINK_PROPS}>
                -&gt; {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
