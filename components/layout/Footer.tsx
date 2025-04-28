export function Footer() {
    return (
      <footer className="bg-gray-100 dark:bg-black text-sm text-center py-4 border-t">
        <div className="container mx-auto">
          © {new Date().getFullYear()} Kean. All rights reserved.
        </div>
      </footer>
    );
  }
  