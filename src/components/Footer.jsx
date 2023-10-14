export default function Footer() {

  const date = new Date();
  const year = date.getFullYear();

  return (
    <>
      <footer>
        <p>
          <span className="copyright">&copy; </span>
          {year} #VANLIFE
        </p>
      </footer>
    </>
  )
}
