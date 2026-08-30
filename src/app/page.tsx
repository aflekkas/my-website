import Image from "next/image";
import { ArrowUpRight, Github, Linkedin } from "lucide-react";

// Add a public email here to show it in the Connect line. Leave empty to hide.
const email = "";

const building = [
  {
    name: "Spawn Partners",
    href: "https://spawnpartners.com",
    description: "Technology partner for provider businesses.",
    preview: "/images/previews/spawn-partners.jpg",
  },
];

const exited = [
  {
    name: "MediaMaxxing",
    href: "https://www.mediamaxxing.com",
    description: "Creator-first platform connecting brands with creators.",
    preview: "/images/previews/mediamaxxing.jpg",
  },
];

const sites = [
  {
    name: "White Dovecote",
    href: "https://whitedovecote.com",
    description: "Private villa in Agapi, Tinos.",
    preview: "/images/previews/white-dovecote.jpg",
  },
  {
    name: "Apoesthisis",
    href: "https://apoesthisis.com",
    description: "Creative practice working in ceramics and mixed media.",
    preview: "/images/previews/apoesthisis.jpg",
  },
];

const connect = [
  { name: "GitHub", href: "https://github.com/aflekkas", icon: Github },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/alexandros-lekkas/",
    icon: Linkedin,
  },
];

function stagger(index: number) {
  return { "--stagger": index } as React.CSSProperties;
}

function TextLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="underline-offset-4 hover:underline"
    >
      {children}
    </a>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="text-sm font-normal text-muted-foreground">{children}</h2>;
}

function Card({
  name,
  href,
  description,
  preview,
}: {
  name: string;
  href: string;
  description: string;
  preview: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block overflow-hidden rounded-xl border bg-card transition-colors hover:bg-muted/40"
    >
      <div className="border-b bg-muted">
        <Image
          src={preview}
          alt={`${name} homepage`}
          width={1280}
          height={800}
          sizes="(min-width: 640px) 320px, 100vw"
          className="aspect-[16/10] w-full object-cover object-top transition-opacity duration-300 group-hover:opacity-90"
        />
      </div>

      <div className="p-3">
        <span className="inline-flex items-center gap-0.5 underline-offset-4 group-hover:underline">
          {name}
          <ArrowUpRight className="size-3.5 text-muted-foreground transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </span>

        <p className="mt-0.5 text-sm text-muted-foreground">{description}</p>
      </div>
    </a>
  );
}

export default function Page() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-24 sm:py-32">
      <h1 data-animate style={stagger(0)} className="font-medium">
        Alexandros Lekkas
      </h1>

      <p data-animate style={stagger(1)} className="mt-4 text-muted-foreground">
        Computer Science at the University of Chicago. I build{" "}
        <TextLink href="https://spawnpartners.com">Spawn Partners</TextLink>,
        software that audits how AI assistants describe healthcare practices,
        mostly for multi-location dental groups across the US.
      </p>

      <p data-animate style={stagger(2)} className="mt-3 text-muted-foreground">
        Before that I was a founding member of MediaMaxxing, a creator marketing
        platform I&apos;m now exiting. I came up through content and growth
        before moving to engineering, and I still design and build websites for
        clients.
      </p>

      <div
        data-animate
        style={stagger(3)}
        className="mt-16 grid gap-x-6 gap-y-8 sm:grid-cols-2"
      >
        <div className="flex flex-col gap-3">
          <SectionHeading>Building</SectionHeading>
          {building.map((item) => (
            <Card key={item.name} {...item} />
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <SectionHeading>Previously</SectionHeading>
          {exited.map((item) => (
            <Card key={item.name} {...item} />
          ))}
        </div>
      </div>

      <div data-animate style={stagger(4)} className="mt-12 flex flex-col gap-3">
        <SectionHeading>Sites</SectionHeading>

        <div className="grid gap-6 sm:grid-cols-2">
          {sites.map((item) => (
            <Card key={item.name} {...item} />
          ))}
        </div>
      </div>

      <div data-animate style={stagger(5)} className="mt-16">
        <h2 className="font-medium">Connect</h2>

        <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2">
          {connect.map(({ name, href, icon: Icon }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
            >
              <Icon className="size-4" />
              {name}
            </a>
          ))}

          {email && (
            <a
              href={`mailto:${email}`}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {email}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
