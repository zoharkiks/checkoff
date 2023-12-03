import Navbar from "./_components/Navbar";

const LandingPageLayout = ({ children }) => {
  return (
    <div className="h-full">
      <Navbar />
      <main className="h-full">{children}</main>
    </div>
  );
};

export default LandingPageLayout;
