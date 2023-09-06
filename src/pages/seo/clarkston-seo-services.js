import React from 'react'
import Layout from '../../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import SEO from '../../components/seo'
import { Hero } from '../../components/Hero'
import { Intro } from '../../components/Intro'
import { ValueProps } from '../../components/ValueProps'
import { Quote } from '../../components/Quote'

const LocationInfo = styled.div`
  display: grid;
  grid-template-columns: 2fr 1.4fr;
  grid-gap: 50px;
  margin: 0 auto;
  max-width: 1100px;
  padding: 100px 50px;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
  }

  strong {
    display: block;
    margin-bottom: 20px;
    color: var(--color-headertext);
  }
`

const ClarkstonSeoPage = () => {
  return (
    <Layout>
      <SEO title="Clarkston SEO Services - Search Engine Optimization" />
      <Hero
        title="SEO Company in <span>Clarkston, Michigan</span>"
        text="Manawire is the highest rated Clarkston SEO Services company."
        linkText="Get in touch"
        image={<StaticImage
          src="../../assets/images/union-restaurant-clarkston-mi.jpg"
          alt="Clarkston SEO Services The Union Restaurant Clarkston Michigan"
        />}
      />
      <Intro
        subtitle="SEO in Clarkston &amp; Beyond."
        title="Search Engine Optimization is an organic investment."
        textTitle="We're Clarkston SEO Experts!"
        text="We don't leave the success of your SEO campaign to chance. We have proven process that ensures that the SEO campaigns we run are done professionally and efficiently."
        linkText="Request an audit"
      />
      <ValueProps
        image={
          <StaticImage
            src="../../assets/images/depot-park-clarkston-mi.jpg"
            alt="Clarkston SEO Services Depot Park Clarkston Michigan"
          />
        }
        title="How Your Clarkston SEO Campaign Is Put Together"
        text="Your campaign workflow consists of four stages:"
        link="/contact/"
        linkText="Request an audit"
        listItems={[
          'Keyword research',
          'Competitive analysis',
          'On-page optimization',
          'Off-page optimization',
        ]}
      />
      <LocationInfo>
        <div>
          <h2>Looking for the best Clarkston SEO Company?</h2>
          <p>
            SEO changes from year to year. What is effective at one time can
            have negative effects later. In these last few years, SEO strategies
            have changes a lot. As a Clarkston SEO agency, we stay at the
            forefront of the traffic trends, helping you adapt to maintain your
            positive ranking and increase your customers.
          </p>
          <p>
            Your Manawire SEO campaign will feature in-depth strategy,
            experienced execution, and total transparency in all phases of our
            work.
          </p>
          <p>
            Manawire is a Clarkston Search Engine Optimization (SEO) Company. We
            specialize in getting you in touch with your audience through Search
            Engine rankings. We will thoroughly review and audit your website,
            and that of your competition. We will then create an SEO road-map
            that will outline our Search Engine Strategy that will propel your
            business to the top.
          </p>
          <p>
            Nestled in the middle of Oakland County Michigan lies Clarkston.
            Clarkston holds a special meaning to us. We eat at the Clarkston
            Union. We&apos;ve seen our favorite bands at DTE Energy Music
            Theatre (Yes, we also will forever know it as Pine Knob). We grew up
            going to Depot Park after school. But most of all, it&apos;s because
            we are lucky enough to call Clarkston our home.
          </p>
          <p>
            At Manawire, we provide our Clarkston Search Engine Optimization
            services to customers, clients, non-profits, and small businesses in
            and around Clarkston Michigan. How do we do it? Through SEO tactics
            like Keyword Research, Competitor Research, Building Local
            Citations, Generating Local Reviews, Social Media Management, and
            Content Marketing. We optimize Local Organic SEO so that your
            Clarkston customers can find you easier. Our Search Engine
            Optimization Services are affordable and create long lasting
            results. Our Search Engine Optimization is different from our
            competitors in Clarkston because we follow strict guidelines to get
            your website to the top. We create an SEO roadmap that allows you
            actually see the route we take to getting your website to the top of
            the Search Results.
          </p>
        </div>
        <div>
          <strong>It starts with an effective strategy.</strong>
          <p>
            An Effective SEO campaign requires an actionable plan and strategy.
            A technical understanding alone will not yield an effective SEO
            campaign. We take the time and effort to create a customized
            approach to every one of our clients. This all beings with
            understanding your industry, and analyzing your competition.
          </p>
          <strong>It starts with an effective strategy.</strong>
          <p>
            We've said it before and we'll say it again, Keyword research is the
            backbone to any SEO campaign. Understanding how your customers find
            you, and how your target audience searches for you is crucial.
            Manawire's local SEO experts perform in-depth keyword research. Not
            only do we go attack the high volume search terms that are related
            to your industry, but we also check in on your local competition to
            see how customers are finding them.
          </p>
          <strong>It starts with an effective strategy.</strong>
          <p>
            Think of the last time you sought out a product or service. If
            you're like most people, you probably used Search. Did you know that
            whatever business is listed in the first spot gets on average 33% of
            the search traffic? In fact, 60% of all search traffic goes right to
            the top 3 results listed. If you're not ranking on the first page
            then you are probably missing out completely.
          </p>
          <p>
            Connect with the top Clarkston SEO company. Whether you're looking
            for further information on Search Engine Optimization, currently
            running a campaign with another company and it's not yielding the
            results you had expected, or questioning if SEO for your Clarkston
            business would help you.
          </p>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2999242.558156704!2d-83.355583!3d42.768309!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x249f322b07d58417!2sManawire!5e0!3m2!1sen!2sus!4v1565564796379!5m2!1sen!2sus" height="450" frameborder="0" allowfullscreen></iframe>
      </LocationInfo>
      <Quote />
    </Layout>
  )
}

export default ClarkstonSeoPage
