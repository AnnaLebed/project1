import React from 'react';
import './App.css';

class Main extends React.Component {
    render(){
        return (
            <div className = "container mx-auto mt-4 justify-content-center">
                <div className="row justify-content-center">
                    <div className = "col-md-7 col-md-offset-6">
                        <main>
                            <article>
                                <header>
                                    <h1 className = "text-white text-center">SERVICES</h1>
                                </header>
                                <p className = "text-white text-center">Our vision is simple. We want to create websites and 
                                applications withboth hight quality design and easy-to-access
                                content. The finished product will be totally unique
                                and represent awesomeness.</p>
                            </article>
                        </main>
                    </div>
                </div>
                    
            </div>
        )
    }
}


export default Main;