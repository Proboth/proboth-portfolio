function Footer() {
  return (
    <footer className="py-8 bg-white border-t">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Proboth Ravihara. All rights reserved.
        </p>

        <p className="text-xs text-gray-400 mt-2">
          Full Stack Developer
        </p>

      </div>
    </footer>
  );
}

export default Footer;
