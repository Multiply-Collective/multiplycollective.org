import { Link } from 'react-router-dom';

export default function PageNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-sanctuary">
      <div className="max-w-md w-full text-center">
        <h1 className="font-display text-8xl font-light text-obsidian/10 mb-4">404</h1>
        <div className="w-12 h-px bg-gold mx-auto mb-8" />
        <h2 className="font-display text-3xl text-obsidian mb-4">Page Not Found</h2>
        <p className="font-body text-obsidian/50 text-sm leading-relaxed mb-10">
          The page you're looking for doesn't exist. Perhaps the path forward lies elsewhere.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-body text-sm tracking-widest uppercase px-8 py-4 bg-gold text-sanctuary hover:bg-gold-dark transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}