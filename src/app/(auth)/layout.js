const RootLayout = ({children}) => {
    return ( 
        <div className="h-screen bg-gradient-to-r from-violet-200 to-pink-200">
            {children}
        </div>
     );
}
 
export default RootLayout;