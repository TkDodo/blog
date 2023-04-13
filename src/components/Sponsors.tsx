import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Box, Grid, Card, Link, Text } from '@theme-ui/components'

const Sponsors = () => (
  <Box>
    <Link
      href="https://github.com/sponsors/TkDodo"
      target="_blank"
      rel="noopener noreferrer"
    >
      <h3>🎗 Sponsor me on Github 🎗</h3>
    </Link>

    <Grid
      gap={[4, null, null, 5]}
      columns={[1, null, null, 2]}
      sx={{ justifyItems: ['center', null, null, 'stretch'] }}
    >
      <Card>
        <Link
          href="https://tanstack.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>Tanner Linsley</h2>
          <img
            src="https://avatars.githubusercontent.com/u/5580297?s=300"
            height="300"
            alt="Tanner Linsley"
          />
        </Link>
        <div>
          <Text>💍 Platinum ($500 a month)</Text>
        </div>
      </Card>
      <Card>
        <Link
          href="https://reactbricks.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>React Bricks</h2>
          <StaticImage
            placeholder="blurred"
            src="../../static/images/reactbricks.svg"
            height={300}
            alt="React Bricks"
          />
        </Link>
        <div>
          <Text>🥉 Bronze ($50 a month)</Text>
        </div>
      </Card>
      <Card>
        <Link
          href="https://wagmi.sh/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>wagmi</h2>
          <img
            src="https://avatars.githubusercontent.com/u/109633172?s=300"
            height="300"
            alt="wagmi"
          />
        </Link>
        <div>
          <Text>🥉 Bronze ($50 a month)</Text>
        </div>
      </Card>
      <Card>
        <Link
          href="https://www.sales-funnel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>Meow Sales Funnel</h2>
          <StaticImage
            placeholder="blurred"
            src="../../static/images/meow.svg"
            height={300}
            alt="Meow Sales Funnel"
          />
        </Link>
        <div>
          <Text>🐱 Custom</Text>
        </div>
      </Card>
      <Card>
        <Link
          href="https://www.cliffordfajardo.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>Clifford Fajardo</h2>
          <img
            src="https://avatars.githubusercontent.com/u/6743796?s=300"
            height="300"
            alt="Clifford Fajardo"
          />
        </Link>
        <div>
          <Text>🥳 Sponsor ($20 a month)</Text>
        </div>
      </Card>
      <Card>
        <Link
          href="https://www.workflowgen.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>WorkflowGen</h2>

          <StaticImage
            placeholder="blurred"
            src="../../static/images/workflowgen.png"
            height={300}
            alt="WorkflowGen"
          />
        </Link>
        <div>
          <Text>🥳 Sponsor ($20 a month)</Text>
        </div>
      </Card>
      <Card>
        <Link
          href="https://daily.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>daily.dev</h2>

          <img
            src="https://avatars.githubusercontent.com/u/41463883?s=300"
            height="300"
            alt="daily.dev"
          />
        </Link>
        <div>
          <Text>🥳 Sponsor ($20 a month)</Text>
        </div>
      </Card>
      <Card>
        <Link
          href="https://trpc.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>tRPC</h2>
          <StaticImage
            placeholder="blurred"
            src="../../static/images/trpc.png"
            height={300}
            alt="tRPC"
          />
        </Link>
        <div>
          <Text>🥳 Sponsor ($20 a month)</Text>
        </div>
      </Card>
      <Card>
        <Link
          href="https://github.com/jnsdls"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>Jonas Daniels</h2>
          <img
            src="https://avatars.githubusercontent.com/u/8204858?s=300"
            height="300"
            alt="Jonas Daniels"
          />
        </Link>
        <div>
          <Text>🥳 Sponsor ($20 a month)</Text>
        </div>
      </Card>
      <Card>
        <Link
          href="https://www.monolisa.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>MonoLisa</h2>
          <StaticImage
            placeholder="blurred"
            src="../../static/images/monolisa.jpeg"
            height={300}
            alt="MonoLisa"
          />
        </Link>
        <div>
          <Text>🥳 Sponsor ($20 a month)</Text>
        </div>
      </Card>
      <Card>
        <Link
          href="https://jolvera.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>Juan Olvera</h2>
          <img
            src="https://avatars.githubusercontent.com/u/1130549?s=300"
            height="300"
            alt="Juan Olvera"
          />
        </Link>
        <div>
          <Text>🎗 Supporter ($10 a month)</Text>
        </div>
      </Card>
      <Card>
        <Link
          href="https://vianneycarel.me/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>Vianney Carel</h2>
          <img
            src="https://avatars.githubusercontent.com/u/1541093?s=300"
            height="300"
            alt="Vianney Carel"
          />
        </Link>
        <div>
          <Text>🎗 Supporter ($10 a month)</Text>
        </div>
      </Card>
      <Card>
        <Link
          href="https://github.com/msutkowski"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>Matt Sutkowski</h2>
          <img
            src="https://avatars.githubusercontent.com/u/784953?s=300"
            height="300"
            alt="Matt Sutkowski"
          />
        </Link>
        <div>
          <Text>🎗 Supporter ($10 a month)</Text>
        </div>
      </Card>
      <Card>
        <Link
          href="https://ballingt.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>Thomas Ballinger</h2>
          <StaticImage
            placeholder="blurred"
            src="../../static/images/ballingt.jpg"
            height={300}
            alt="Thomas Ballinger"
          />
        </Link>
        <div>
          <Text>🎗 Supporter ($10 a month)</Text>
        </div>
      </Card>
      <Card>
        <Link
          href="https://linkedin.com/in/dev-mike/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>Mike Murray</h2>
          <img
            src="https://mmmikem.github.io/assets/photo.173b7bbb.webp"
            height="300"
            alt="Mike Murray"
          />
        </Link>
        <div>
          <Text>🎗 Supporter ($10 a month)</Text>
        </div>
      </Card>
      <Card>
        <Link
          href="https://www.bearstudio.fr/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>BearStudio</h2>
          <img
            src="https://avatars.githubusercontent.com/u/21054556?s=300"
            height="300"
            alt="BearStudio"
          />
        </Link>
        <div>
          <Text>🪙 Custom</Text>
        </div>
      </Card>
      <Card>
        <Link
          href="https://www.kierb.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>Kier Borromeo</h2>
          <StaticImage
            placeholder="blurred"
            src="../../static/images/kierb.jpg"
            height={300}
            alt="Kier Borromeo"
          />
        </Link>
        <div>
          <Text>🎗 Supporter ($10 a month)</Text>
        </div>
      </Card>
      <Card>
        <Link
          href="https://twitter.com/ianvanschooten"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>Ian VanSchooten</h2>
          <img
            src="https://avatars.githubusercontent.com/u/4616705?s=300"
            height="300"
            alt="Ian VanSchooten"
          />
        </Link>
        <div>
          <Text>🎗 Supporter ($10 a month)</Text>
        </div>
      </Card>
      <Card>
        <Link
          href="https://gensdeconfiance.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>GensDeConfiance</h2>
          <img
            src="https://avatars.githubusercontent.com/u/17024329?s=300"
            height="300"
            alt="GensDeConfiance"
          />
        </Link>
        <div>
          <Text>🪙 Custom</Text>
        </div>
      </Card>
    </Grid>
  </Box>
)

export default Sponsors
