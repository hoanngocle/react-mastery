const Footer = ({ length }) => {
  const today = new Date();

  return (
    <footer>
      <p>
        List {length === 1 ? 'item' : 'items'} {length}
      </p>
      <p>Copyright &copy; {today.getFullYear()}</p>
    </footer>
  );
};

export default Footer;
