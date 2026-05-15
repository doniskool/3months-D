/**
 * Footer - Intimate Minimalism
 * - Soft, minimal design
 * - Gentle closing message
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/20 py-8 px-4 bg-background/50">
      <div className="container max-w-4xl">
        <div className="text-center">
          <p className="text-muted-foreground/70 text-xs font-light">
            © {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
}