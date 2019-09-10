// You can grab your own pattern here:
// http://www.heropatterns.com/

module.exports = {
  bgPattern: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='112' height='92' viewBox='0 0 112 92'%3E%3Cg fill='%239C92AC' fill-opacity='0.07'%3E%3Cpath fill-rule='evenodd' d='M72 10H40L16 20H0v8h16l24-14h32l24 14h16v-8H96L72 10zm0-8H40L16 4H0v8h16l24-6h32l24 6h16V4H96L72 2zm0 84H40l-24-6H0v8h16l24 2h32l24-2h16v-8H96l-24 6zm0-8H40L16 64H0v8h16l24 10h32l24-10h16v-8H96L72 78zm0-12H40L16 56H0v4h16l24 14h32l24-14h16v-4H96L72 66zm0-16H40l-24-2H0v4h16l24 6h32l24-6h16v-4H96l-24 2zm0-16H40l-24 6H0v4h16l24-2h32l24 2h16v-4H96l-24-6zm0-16H40L16 32H0v4h16l24-10h32l24 10h16v-4H96L72 18z'/%3E%3C/g%3E%3C/svg%3E`,
  colors: {
    bg: '#16191f',
    color: 'white',
    dark_bg: 'black',
    secondary: '#b6b6b6',
    link: '#94c2ff',
    linkHover: '#edf3ff',
  },
  maxWidths: {
    general: '1600px',
    project: 1600,
  },
  gridColumns: 2, // Number of columns of the grid on the index page
  contentPadding: '1.0875rem',
  breakpoints: {
    xs: '400px',
    s: '600px',
    m: '900px',
    l: '1200px',
  },
}
