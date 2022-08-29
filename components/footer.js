import Container from "./container";

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <h4 className="px-4 text-center md:text-left text-lg mt-5 md:pl-8">
          Created with{" "}
          <a
            href="https://nextjs.org/"
            className="underline hover:text-success duration-200 transition-colors"
          >
            Next.js
          </a>{" "}
          and{" "}
          <a
            href="https://www.contentful.com/"
            className="underline hover:text-success duration-200 transition-colors"
          >
            Contentful
          </a>
          .
        </h4>
      </Container>
    </footer>
  );
}
