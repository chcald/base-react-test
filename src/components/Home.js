import React from 'react';
import styled from 'styled-components';

const Title = styled.h3`
  font-size: 1.5em;
  text-align: center;
  color: mediumseagreen;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: azure;
`;

const Home = () => {
    return (
        <div>
            <div className="container">
                <div className="row" id="main">
                    <div>

                        <section id="sidebar">
                            <Wrapper>
                                <Title>
                                    I'm Telephasic
                                </Title>
                                <p>Lorem ipsum dolor sit amet consectetur et sed adipiscing elit. Curabitur et vel
                                sem sit amet dolor neque semper magna. Lorem ipsum dolor sit amet consectetur et dolore
                        adipiscing elit. Curabitur vel sem sit.</p>

                            </Wrapper>
                            <Wrapper>
                                <a href="http://ineedchemicalx.deviantart.com/art/Boundless-291831118" className="image full">
                                    <img src="src/assets/img/pic02.jpg" alt="" /></a>
                                <header>
                                    <h3>Commodo lorem varius</h3>
                                </header>
                                <p>Lorem ipsum dolor sit amet consectetur et sed adipiscing elit. Curabitur et vel
                                sem sit amet dolor neque semper magna. Lorem ipsum dolor sit amet consectetur et dolore
                        adipiscing elit. Curabitur vel sem sit.</p>
                            </Wrapper>
                        </section>

                    </div>
                    <div>

                        <article id="content">
                            <header>
                                <h2>Telephasic</h2>
                                <span>Lorem ipsum dolor sit amet consectetur et sed adipiscing elit
                        dolor neque semper magna lorem ipsum.</span>
                            </header>
                            <a href="http://ineedchemicalx.deviantart.com/art/Freebird-378379295" className="image full"></a>
                            <p>Ut sed tortor luctus, gravida nibh eget, volutpat odio. Proin rhoncus, sapien
                            mollis luctus hendrerit, orci dui viverra metus, et cursus nulla mi sed elit. Vestibulum
                            condimentum, mauris a mattis vestibulum, urna mauris cursus lorem, eu fringilla lacus
                            ante non est. Nullam vitae feugiat libero, eu consequat sem. Proin tincidunt neque
                            eros. Duis faucibus blandit ligula, mollis commodo risus sodales at. Sed rutrum et
                            turpis vel blandit. Nullam ornare congue massa, at commodo nunc venenatis varius.
                    Praesent mollis nisi at vestibulum aliquet. Sed sagittis congue urna ac consectetur.</p>
                            <p>Mauris eleifend eleifend felis aliquet ornare. Vestibulum porta velit at elementum
                            gravida nibh eget, volutpat odio. Proin rhoncus, sapien
                            mollis luctus hendrerit, orci dui viverra metus, et cursus nulla mi sed elit. Vestibulum
                            condimentum, mauris a mattis vestibulum, urna mauris cursus lorem, eu fringilla lacus
                            ante non est. Nullam vitae feugiat libero, eu consequat sem. Proin tincidunt neque
                            eros. Duis faucibus blandit ligula, mollis commodo risus sodales at. Sed rutrum et
                            turpis vel blandit. Nullam ornare congue massa, at commodo nunc venenatis varius.
                    Praesent mollis nisi at vestibulum aliquet. Sed sagittis congue urna ac consectetur.</p>
                            <p>Vestibulum pellentesque posuere lorem non aliquam. Mauris eleifend eleifend
                    felis aliquet ornare. Vestibulum porta velit at elementum elementum.</p>
                        </article>

                    </div>
                </div>

            </div>
        </div>
    );
};



export default Home;
