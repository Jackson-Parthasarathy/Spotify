import React from 'react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div>
            <header>
                <h1>Spotify Stats</h1>
                <nav>
                    {/* Navigation links can be added here */}
                </nav>
            </header>
            <main>{children}</main>
            <footer>
                <p>&copy; {new Date().getFullYear()} Spotify Stats. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Layout;