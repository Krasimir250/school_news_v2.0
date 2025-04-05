function Footer({ sticky }) {
  return (
    <footer
      className={
        sticky
          ? "bg-blue-600 p-4 flex absolute bottom-0 w-full"
          : "bg-blue-600 p-4 flex"
      }
    >
      <div className="max-w-4xl mx-auto w-full">
        <p className="text-white">© 2024 School News. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
