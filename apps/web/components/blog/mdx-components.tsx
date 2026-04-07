import type { DetailedHTMLProps, HTMLAttributes, AnchorHTMLAttributes } from "react";
import { CodeBlock } from "@/components/ui/code-block";

/* Custom MDX component overrides for blog posts.
 * Delegates fenced code blocks to the project's styled CodeBlock
 * (with copy button, language badge, traffic-light dots). */

function Pre(
  props: DetailedHTMLProps<HTMLAttributes<HTMLPreElement>, HTMLPreElement>
) {
  // compileMDX wraps <code> in <pre> — unwrap so CodeBlock owns the chrome
  return <>{props.children}</>;
}

function Code(
  props: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
) {
  const { className, children } = props;
  const langMatch = /language-(\w+)/.exec((className as string) || "");
  const codeString = String(children).replace(/\n$/, "");

  // Fenced / multi-line code → CodeBlock
  if (langMatch || codeString.includes("\n")) {
    return <CodeBlock code={codeString} language={langMatch?.[1] ?? "text"} />;
  }

  // Inline code — keep default prose styling
  return (
    <code className="text-blue-300 bg-neutral-900 rounded px-1.5 py-0.5 text-sm font-mono">
      {children}
    </code>
  );
}

function Anchor(
  props: DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >
) {
  const { href, children, ...rest } = props;
  const isExternal = href?.startsWith("http");
  return (
    <a
      href={href}
      {...rest}
      {...(isExternal
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
    >
      {children}
    </a>
  );
}

export const mdxComponents = {
  pre: Pre,
  code: Code,
  a: Anchor,
};
