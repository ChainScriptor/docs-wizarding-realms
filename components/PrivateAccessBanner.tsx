// eslint-disable-next-line react/no-unescaped-entities

"use client";

export default function PrivateAccessBanner() {
  return (
    <div className="fixed top-0 left-0 w-full bg-red-600/90 backdrop-blur-md text-white py-3 px-4 text-center text-sm font-medium z-50">
      <p className="text-white">
        We are currently in Private Access.{" "}
        <a
          href="#"
          className="underline decoration-dotted underline-offset-2 hover:text-red-100 transition-colors"
        >
          Follow us for updates
        </a>
      </p>
    </div>
  );
}
