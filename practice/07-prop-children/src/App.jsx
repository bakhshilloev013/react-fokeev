// import React from 'react';

// // Компонент Layout использует props.children
// function Layout({ children }) {
//   return <div className="layout">{children}</div>;
// }

// function Header() {
//   return <header className="header">This is the header</header>;
// }

// function Content() {
//   return <main className="content">This is the content</main>;
// }

// function Footer() {
//   return <footer className="footer">This is the footer</footer>;
// }

// export default function App() {
//   return (
//     <Layout>
//       <Header />
//       <Content />
//       <Footer />
//     </Layout>
//   );
// }

import React from 'react';

// Компонент Layout принимает header, content и footer через пропсы
function Layout({ header, content, footer }) {
  return (
    <div className="layout">
      {header}
      {content}
      {footer}
    </div>
  );
}

function Header() {
  return <header className="header">This is the header</header>;
}

function Content() {
  return <main className="content">This is the content</main>;
}

function Footer() {
  return <footer className="footer">This is the footer</footer>;
}

export default function App() {
  return (
    <Layout
      header={<Header />}
      content={<Content />}
      footer={<Footer />}
    />
  );
}