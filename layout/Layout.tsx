import React from "react";

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  return (
    <div className='bg-green-200 flex flex-col min-h-screen'>
      <header className="bg-slate-800 text-white text-center w-full">Header</header>
      <main className="grow px-8 lg:px-24 2xl:px-32 3xl:w-9/12 m-auto max-w-screen-3xl">
        {children}
      </main>
      <footer className="bg-slate-800 text-white text-center w-full bottom-0">Footer</footer>
    </div>
  );
};

export default Layout;
