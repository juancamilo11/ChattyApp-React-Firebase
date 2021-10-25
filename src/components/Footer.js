import React from 'react';

export const Footer = () => {
    return (
        <>
            <br/><br/><br/><br/>
            <div className="footer-basic">
                <footer className="footer-container">
                    <div className="social">
                        <a href="https://www.facebook.com/JuanCamiloDev/">
                            <i className="fab fa-facebook"></i>
                        </a> 
                        <a href="https://www.linkedin.com/in/juanccc-dev/">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="https://github.com/juancamilo11/">
                            <i className="fab fa-github"></i>
                        </a>
                    </div>
                    <p className="copyright">Made with <span role="img" aria-label="heart">💟</span> by JuanCamiloCC.</p>
                    <p className="copyright">SofkaU © 2021</p>
                </footer>
            </div>
        </>
    )
}