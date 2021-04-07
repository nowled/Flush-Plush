import React from 'react';
import styled from 'styled-components';
import { PageHero } from '../components';
import aboutImg from '../assets/hero-bcg.jpeg';

const AboutPage = () => {
  return (
    <main>
      <PageHero title='about' />
      <Wrapper className='page section section-center'>
        <img src={aboutImg} alt='lovely couch' />
        <article>
          <div className='title'>
            <h2>your story</h2>
            <div className='underline'></div>
          </div>
          <p>
            You want the best, You want to enjoy life and noone is going to stop
            you. Flush & Plush company is a place you can rely on, a couch to
            cry on, friendly cushion to lean on, and in a time of need we have a
            customer rep you can talk to. You are happy that you no longer have
            to stand there alone, you can sit here with us. If you drop by for
            our grand coffee tasting bonanza you will get 50% off any
            merchandise. Now that is friend you can count on!
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
