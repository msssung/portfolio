export function Footer() {
  return (
    <footer className="bg-[var(--navy)] text-white/60 py-8">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} 김민성. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
