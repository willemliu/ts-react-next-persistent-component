import React from "react";
import Teaser from '@fdmg/fd-teaser';
import SquareTeaser from '@fdmg/fd-square-teaser';
import OpeningTeaser from '@fdmg/fd-opening-teaser';
import styled, { createGlobalStyle } from "styled-components";

export default function Section() {
    return (
        <StyledSection>
            <GlobalStyle/>
            <main>
                <OpeningTeaser
                    id="1286450"
                    baseUrl="https://fd.nl"
                    url="/beurs/1286450/analisten-twijfelen-aan-renteverhoging-ecb"
                    image={{
                        src: 'https://images.fd.nl/-4mOGVA1ry0LHTzjvcxdyT-FH-E.jpg?fit=crop&crop=faces&auto=format&fm=jpg&q=45&w=599&h=337&rect=.0%2C.1557223264540338%2C.9999999999999999%2C.8442776735459663',
                        alt: "Mario Draghi, president of the European Central Bank (ECB), departs a rates decision news conference in Frankfurt, Germany, on Thursday, Dec. 13, 2018. Draghi said risks to the euro-area economy are worsening even as he called time on the European Central Banks' flagship deflation-fighting tool. Photographer: Alex Kraus/Bloomberg"
                    }}
                    alt="Mario Draghi, president of the European Central Bank (ECB), departs a rates decision news conference in Frankfurt, Germany, on Thursday, Dec. 13, 2018. Draghi said risks to the euro-area economy are worsening even as he called time on the European Central Banks flagship deflation-fighting tool. Photographer: Alex Kraus/Bloomberg"
                    sourceSets={[{
                        media: "(max-width: 640px)",
                        srcSet: `https://images.fd.nl/-4mOGVA1ry0LHTzjvcxdyT-FH-E.jpg?fit=crop&crop=faces&auto=format&fm=jpg&q=45&w=599&h=337&rect=.0%2C.1557223264540338%2C.9999999999999999%2C.8442776735459663`
                    }, {
                        media: "(max-width: 860px)",
                        srcSet: `https://images.fd.nl/-4mOGVA1ry0LHTzjvcxdyT-FH-E.jpg?fit=crop&crop=faces&auto=format&fm=jpg&q=45&w=115&h=115&rect=.20625%2C.0%2C.66625%2C.9999999999999999`
                    }, {
                        media: "(min-width: 861px)",
                        srcSet: `https://images.fd.nl/-4mOGVA1ry0LHTzjvcxdyT-FH-E.jpg?fit=crop&crop=faces&auto=format&fm=jpg&q=45&w=300&h=169&rect=.0%2C.1557223264540338%2C.9999999999999999%2C.8442776735459663`
                    }]}
                    figCaption="Mario Draghi, president of the European Central Bank (ECB), departs a rates decision news conference in Frankfurt, Germany, on Thursday, Dec. 13, 2018. Draghi said risks to the euro-area economy are worsening even as he called time on the European Central Banks' flagship deflation-fighting tool. Photographer: Alex Kraus/Bloomberg"
                    subject="Monetair"
                    readableAge="7 uur"
                    date="17 Nov 1981"
                    title="Analisten twijfelen aan renteverhoging ECB"
                    description="Economische groei en de inflatie ontwikkelen zich niet zoals verwacht."
                    related={[{
                        longread: true,
                        title: '‘Als vrouw moet je altijd onafhankelijk zijn’',
                        url: '/profiel/1235280/als-vrouw-moet-je-onafhankelijk-zijn',
                        uuid: "1235280"
                    }, {
                        title: 'President van de Amerikaanse Fed hamert op onafhankelijkheid',
                        url: '/economie-politiek/1235274/president-van-de-amerikaanse-fed-hamert-op-onafhankelijkheid',
                        uuid: "1235274"
                    }]}
                />
                <Teaser
                    id="123"
                    title="Congo verwacht weinig van Nederlands ebola-vaccin"
                    description="Autoriteiten in het Afrikaanse land vrezen toename van verzet en verwarring bij inzet van tweede vaccin, dat in Nederland wordt gemaakt."
                    baseUrl=""
                    url="/economie-politiek/1304718/congo-verwacht-weinig-van-nederlands-ebola-vaccin"
                    readableAge="2 uur"
                    date="13:11 13-06-2019"
                    subject="buitenland"
                    image={{
                        src: 'https://images.fd.nl/BjzAQW5j11hip-ad0R6OxM0CJoA.jpg?fit=crop&crop=faces&auto=format&w=599&h=337&q=45&fm=jpg&cs=tinysrgb&rect=.0%2C.0787992495309568%2C.9999999999999999%2C.8442776735459663',
                        alt: 'Congo verwacht weinig van Nederlands ebola-vaccin'
                    }}
                    sourceSets={[{
                        media: '(max-width: 640px)',
                        srcSet: `https://images.fd.nl/BjzAQW5j11hip-ad0R6OxM0CJoA.jpg?fit=crop&crop=faces&auto=format&w=599&h=337&q=45&fm=jpg&cs=tinysrgb&rect=.0%2C.0787992495309568%2C.9999999999999999%2C.8442776735459663`
                    }, {
                        media: '(max-width: 860px)',
                        srcSet: `https://images.fd.nl/BjzAQW5j11hip-ad0R6OxM0CJoA.jpg?fit=crop&crop=faces&auto=format&w=115&h=115&q=45&fm=jpg&cs=tinysrgb&rect=.16125%2C.0%2C.66625%2C.9999999999999999`
                    }, {
                        media: '(min-width: 861px)',
                        srcSet: `https://images.fd.nl/BjzAQW5j11hip-ad0R6OxM0CJoA.jpg?fit=crop&crop=faces&auto=format&w=115&h=115&q=45&fm=jpg&cs=tinysrgb&rect=.16125%2C.0%2C.66625%2C.9999999999999999`
                    }]}
                    related={[{
                        longread: true,
                        title: '‘Als vrouw moet je altijd onafhankelijk zijn’',
                        url: '/profiel/1235280/als-vrouw-moet-je-onafhankelijk-zijn',
                        uuid: "12345"
                    }, {
                        title: 'President van de Amerikaanse Fed hamert op onafhankelijkheid',
                        url: '/economie-politiek/1235274/president-van-de-amerikaanse-fed-hamert-op-onafhankelijkheid',
                        uuid: "123456"
                    }]}    
                />
            </main>
            <aside>
            <SquareTeaser
                id="1292665"
                baseUrl="https://fd.nl"
                url="/futures/1292665/een-muur-bouwen-is-makkelijker-dan-robots-stukslaan"
                image={{
                    src: 'https://images.fd.nl/nheGAUNYeo_AjGfa7ob4cqxoreI.jpg?fit=crop&crop=faces&auto=format&fm=jpg&q=45&w=599&h=337&rect=.0%2C.1557223264540338%2C.9999999999999999%2C.8442776735459663',
                    alt: 'Amsterdam doet ertoe'
                }}
                sourceSets={[{
                    media: "(max-width: 640px)",
                    srcSet: `https://images.fd.nl/nheGAUNYeo_AjGfa7ob4cqxoreI.jpg?fit=crop&crop=faces&auto=format&fm=jpg&q=45&w=599&h=337&rect=.0%2C.1557223264540338%2C.9999999999999999%2C.8442776735459663`
                }, {
                    media: "(max-width: 860px)",
                    srcSet: `https://images.fd.nl/nheGAUNYeo_AjGfa7ob4cqxoreI.jpg?fit=crop&crop=faces&auto=format&fm=jpg&q=45&w=115&h=115&rect=.20625%2C.0%2C.66625%2C.9999999999999999`
                }, {
                    media: "(min-width: 861px)",
                    srcSet: `https://images.fd.nl/nheGAUNYeo_AjGfa7ob4cqxoreI.jpg?fit=crop&crop=faces&auto=format&fm=jpg&q=45&w=300&h=169&rect=.0%2C.1557223264540338%2C.9999999999999999%2C.8442776735459663`
                }]}
                figCaption="Francis Fukuyama: 'Een muur bouwen is makkelijker dan robots stukslaan'"
                subject="Samenleving"
                readableAge="6 uur"
                date="17 Nov 1981"
                title="Francis Fukuyama: 'Een muur bouwen is makkelijker dan robots stukslaan'"
                description="Identiteitspolitiek leidt zowel op links als op rechts tot uitwassen zoals de muur van Trump, zegt Francis Fukuyama. We kunnen ons beter druk maken over andere kwesties, zoals robotisering."
            />
            </aside>
        </StyledSection>
    );
}

const GlobalStyle = createGlobalStyle`
html {
    background-color: #f1ded0;
}
`;

const StyledSection = styled.div`
    display: flex;

    .fd-card {
        margin-bottom: 1rem;
    }
    main {
        flex: 1 1 auto;
        margin-right: 1rem;
    }
    aside {
        flex: 0 0 300px;
    }
`;
