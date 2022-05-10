import React from 'react'
import Head from 'next/head'

const Initialiseren = (props) => {
  return (
    <>
      <div className="initialiseren-container">
        <Head>
          <title>That Edible Ferret</title>
          <meta property="og:title" content="That Edible Ferret" />
        </Head>
        <iframe
          allowFullScreen
          src="https://mtechnl.company.site"
          className="initialiseren-iframe"
        ></iframe>
      </div>
      <style jsx>
        {`
          .initialiseren-container {
            width: revert;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .initialiseren-iframe {
            width: var(--dl-size-size-maxwidth);
            height: var(--dl-size-size-maxwidth);
          }
        `}
      </style>
    </>
  )
}

export default Initialiseren
