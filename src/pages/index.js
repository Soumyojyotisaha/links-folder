// pages/index.js
import { useState } from 'react';
import Head from 'next/head';
import LinkForm from '../components/LinkForm';

export default function Home() {
  const [links, setLinks] = useState([
    'https://www.cricbuzz.com/live-cricket-scorecard/82455/ind-vs-aus-3rd-t20i-australia-tour-of-india-2023',
    'https://www.cricbuzz.com/live-cricket-scorecard/83629/brhw-vs-sytw-eliminator-womens-big-bash-league-2023',
    'https://www.cricbuzz.com/live-cricket-scorecard/83172/nam-vs-tan-15th-match-icc-mens-t20-world-cup-africa-region-qualifier-2023',
    'https://www.cricbuzz.com/live-cricket-scorecard/83951/deg-vs-nys-1st-match-t10-league-2023',
    'https://www.cricbuzz.com/live-cricket-scorecard/83958/nw-vs-msa-2nd-match-t10-league-2023',
    'https://www.cricbuzz.com/live-cricket-scorecard/74905/ben-vs-tn-round-3-group-e-vijay-hazare-trophy-2023',
    'https://www.cricbuzz.com/live-cricket-scorecard/74912/cg-vs-hyd-round-3-group-b-vijay-hazare-trophy-2023',
    'https://www.cricbuzz.com/live-cricket-scorecard/74916/brd-vs-ngl-round-3-group-e-vijay-hazare-trophy-2023',
    'https://www.cricbuzz.com/live-cricket-scorecard/74923/mnp-vs-ser-round-3-group-b-vijay-hazare-trophy-2023',
    'https://www.cricbuzz.com/live-cricket-scorecard/74930/del-vs-kar-round-3-group-c-vijay-hazare-trophy-2023',
    'https://www.cricbuzz.com/live-cricket-scorecard/74933/bih-vs-jk-round-3-group-c-vijay-hazare-trophy-2023',
    'https://www.cricbuzz.com/live-cricket-scorecard/74937/cdg-vs-har-round-3-group-c-vijay-hazare-trophy-2023',
    'https://www.cricbuzz.com/live-cricket-scorecard/74940/saur-vs-tri-round-3-group-a-vijay-hazare-trophy-2023',
    'https://www.cricbuzz.com/live-cricket-scorecard/74944/miz-vs-utk-round-3-group-c-vijay-hazare-trophy-2023',
    'https://www.cricbuzz.com/live-cricket-scorecard/83393/engu19-vs-banu19-3rd-place-play-off-quadrangular-u19-series-in-india-2023',
    'https://www.cricbuzz.com/live-cricket-scorecard/82626/mt-vs-snss-9th-match-legends-league-cricket-2023',
    'https://www.cricbuzz.com/live-cricket-scorecard/74947/ker-vs-odsa-round-3-group-a-vijay-hazare-trophy-2023',
    'https://www.cricbuzz.com/live-cricket-scorecard/74951/ap-vs-asm-round-3-group-d-vijay-hazare-trophy-2023',
    'https://www.cricbuzz.com/live-cricket-scorecard/83400/indu19a-vs-indu19b-final-quadrangular-u19-series-in-india-2023',
    'https://www.cricbuzz.com/live-cricket-scorecard/74954/mum-vs-rlys-round-3-group-a-vijay-hazare-trophy-2023',
    'https://www.cricbuzz.com/live-cricket-scorecard/74961/raj-vs-up-round-3-group-d-vijay-hazare-trophy-2023',
    'https://www.cricbuzz.com/live-cricket-scorecard/74968/pdc-vs-skm-round-3-group-a-vijay-hazare-trophy-2023',
    'https://www.cricbuzz.com/live-cricket-scorecard/83160/nga-vs-uga-14th-match-icc-mens-t20-world-cup-africa-region-qualifier-2023',
    'https://www.cricbuzz.com/live-cricket-scorecard/74972/arnp-vs-guj-round-3-group-d-vijay-hazare-trophy-2023',
    'https://www.cricbuzz.com/live-cricket-scorecard/83165/rwa-vs-zim-13th-match-icc-mens-t20-world-cup-africa-region-qualifier-2023',
    'https://www.cricbuzz.com/live-cricket-scorecard/74975/mah-vs-vid-round-3-group-b-vijay-hazare-trophy-2023',
    'https://www.cricbuzz.com/live-cricket-scorecard/83167/nam-vs-ken-12th-match-icc-mens-t20-world-cup-africa-region-qualifier-2023',
    'https://www.cricbuzz.com/live-cricket-scorecard/74979/mp-vs-pun-round-3-group-e-vijay-hazare-trophy-2023',
    'https://www.cricbuzz.com/live-cricket-scorecard/74982/jhkd-vs-mgly-round-3-group-b-vijay-hazare-trophy-2023',
    'https://www.cricbuzz.com/live-cricket-scorecard/82448/ind-vs-aus-2nd-t20i-australia-tour-of-india-2023',
    'https://www.cricbuzz.com/live-cricket-scorecard/77845/hbhw-vs-adsw-55th-match-womens-big-bash-league-2023',
    'https://www.cricbuzz.com/live-cricket-scorecard/77849/sysw-vs-sytw-56th-match-womens-big-bash-league-2023',
    'https://www.cricbuzz.com/live-cricket-scorecard/82623/ggt-vs-urh-8th-match-legends-league-cricket-2023',
    'https://www.cricbuzz.com/live-cricket-scorecard/83153/nga-vs-tan-11th-match-icc-mens-t20-world-cup-africa-region-qualifier-2023',
    'https://www.cricbuzz.com/live-cricket-scorecard/83158/uga-vs-zim-10th-match-icc-mens-t20-world-cup-africa-region-qualifier-2023',
    'https://www.cricbuzz.com/live-cricket-scorecard/74499/guj-vs-raj-round-2-group-d-vijay-hazare-trophy-2023',
    'https://www.cricbuzz.com/live-cricket-scorecard/74503/mah-vs-ser-round-2-group-b-vijay-hazare-trophy-2023',
    'https://www.cricbuzz.com/live-cricket-scorecard/74506/goa-vs-tn-round-2-group-e-vijay-hazare-trophy-2023',
    'https://www.cricbuzz.com/live-cricket-scorecard/74510/hyd-vs-jhkd-round-2-group-b-vijay-hazare-trophy-2023',
    'https://www.cricbuzz.com/live-cricket-scorecard/74513/mp-vs-ngl-round-2-group-e-vijay-hazare-trophy-2023',
    'https://www.cricbuzz.com/live-cricket-scorecard/77842/mlsw-vs-mlrw-54th-match-womens-big-bash-league-2023',
    'https://www.cricbuzz.com/live-cricket-scorecard/74517/cg-vs-mgly-round-2-group-b-vijay-hazare-trophy-2023',
    'https://www.cricbuzz.com/live-cricket-scorecard/74520/brd-vs-ben-round-2-group-e-vijay-hazare-trophy-2023',
    'https://www.cricbuzz.com/live-cricket-scorecard/74527/mnp-vs-vid-round-2-group-b-vijay-hazare-trophy-2023',
    'https://www.cricbuzz.com/live-cricket-scorecard/74531/kar-vs-utk-round-2-group-c-vijay-hazare-trophy-2023',
    'https://www.cricbuzz.com/live-cricket-scorecard/74538/cdg-vs-jk-round-2-group-c-vijay-hazare-trophy-2023',
    'https://www.cricbuzz.com/live-cricket-scorecard/74545/bih-vs-har-round-2-group-c-vijay-hazare-trophy-2023',
    'https://www.cricbuzz.com/live-cricket-scorecard/79412/cd-vs-nk-1st-match-the-ford-trophy-2023-24',
    'https://www.cricbuzz.com/live-cricket-scorecard/74552/pdc-vs-saur-round-2-group-a-vijay-hazare-trophy-2023',
    'https://www.cricbuzz.com/live-cricket-scorecard/79417/otg-vs-akl-2nd-match-the-ford-trophy-2023-24',
  ]);


  const addLink = (link) => {
    setLinks((prevLinks) => [...prevLinks, link]);
  };

  return (
    <div>
      <Head>
        <title>My Links App</title>
        <meta name="description" content="A simple Next.js app to store links" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>My Links App</h1>
        <LinkForm onAddLink={addLink} />

        <h2>Stored Links:</h2>
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <a href={link} target="_blank" rel="noopener noreferrer">
                {link}
              </a>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
