import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <main className="relative isolate flex min-h-screen items-center justify-center overflow-hidden bg-background px-6 text-foreground">
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-grid" />
      <div
        aria-hidden="true"
        className="absolute -z-10 left-1/2 top-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/10 blur-[120px]"
      />

      <div className="text-center">
        <p className="font-mono text-xs uppercase tracking-[0.24em] text-muted-foreground">
          Error <span className="text-brand">404</span>
        </p>
        <h1 className="mt-6 text-5xl md:text-7xl font-semibold leading-[1.02] tracking-[-0.045em]">
          This page took a{" "}
          <span className="font-serif italic font-normal text-brand">
            wrong turn.
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-md text-muted-foreground">
          <code className="rounded-md bg-muted px-1.5 py-0.5 font-mono text-sm text-foreground">
            {location.pathname}
          </code>{" "}
          doesn't exist. Let's get you back home.
        </p>
        <Link
          to="/"
          className="group mt-10 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 font-medium text-background transition-colors duration-300 hover:bg-brand hover:text-brand-foreground"
        >
          <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
          Back to home
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
