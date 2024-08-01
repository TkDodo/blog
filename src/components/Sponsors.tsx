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
          <Text>💍 Platinum</Text>
        </div>
      </Card>
      <Card>
        <Link
          href="https://wevm.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>wevm</h2>
          <img
            src="https://avatars.githubusercontent.com/u/109633172?s=300"
            height="300"
            alt="wevm"
          />
        </Link>
        <div>
          <Text>🥇 Gold</Text>
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
          <Text>🥉 Bronze</Text>
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
          <Text>🥳 Sponsor</Text>
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
          <Text>🥳 Sponsor</Text>
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
          <Text>🥳 Sponsor</Text>
        </div>
      </Card>
      <Card>
        <Link
          href="https://www.monolisa.dev/?ref=dominik"
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
          <Text>🥳 Sponsor</Text>
        </div>
      </Card>
      <Card>
        <Link
          href="https://github.com/nadavl"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>Nadav Lebovitch</h2>
          <img
            src="https://avatars.githubusercontent.com/u/5332234?s=300"
            alt="Nadav Lebovitch"
            height="300"
          />
        </Link>
        <div>
          <Text>🥳 Sponsor</Text>
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
      </Card>
      <Card>
        <Link
          href="https://github.com/markbenliyan"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>Mark Benliyan</h2>
          <img
            src="https://avatars.githubusercontent.com/u/92900079?s=300"
            height="300"
            alt="Mark Benliyan"
          />
        </Link>
        <div>
          <Text>🥳 Sponsor</Text>
        </div>
      </Card>
      <Card>
        <Link
          href="https://awesomealgo.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>Awesome Algorand</h2>
          <img
            src="https://avatars.githubusercontent.com/u/144172458?s=300"
            height="300"
            alt="Awesome Algorand"
          />
        </Link>
        <div>
          <Text>🥳 Sponsor</Text>
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
          <Text>🎗 Supporter</Text>
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
          <Text>🎗 Supporter</Text>
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
          <Text>🎗 Supporter</Text>
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
          <Text>🎗 Supporter</Text>
        </div>
      </Card>
      <Card>
        <Link
          href="https://github.com/zilahir"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>Richard Zilahi</h2>
          <img
            src="https://avatars.githubusercontent.com/u/6687149?s=300"
            height="300"
            alt="Richard Zilahi"
          />
        </Link>
        <div>
          <Text>🎗 Supporter</Text>
        </div>
      </Card>
      <Card>
        <Link
          href="https://github.com/fl-y"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>fl-y</h2>
          <img
            src="https://avatars.githubusercontent.com/u/31615341?s=300"
            height="300"
            alt="fl-y"
          />
        </Link>
        <div>
          <Text>🎗 Supporter</Text>
        </div>
      </Card>
      <Card>
        <Link
          href="https://github.com/mandava"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>Bharat Mandava</h2>
          <img
            src="https://avatars.githubusercontent.com/u/125006?s=300"
            height="300"
            alt="mandava"
          />
        </Link>
        <div>
          <Text>🎗 Supporter</Text>
        </div>
      </Card>
      <Card>
        <Link
          href="https://github.com/adam-beck"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>Adam Beck</h2>
          <img
            src="https://avatars.githubusercontent.com/u/6046654?s=300"
            height="300"
            alt="Adam Beck"
          />
        </Link>
        <div>
          <Text>🎗 Supporter</Text>
        </div>
      </Card>
      <Card>
        <Link
          href="https://github.com/ixahmedxi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>Ahmed Elsakaan</h2>
          <img
            src="https://avatars.githubusercontent.com/u/20271968?s=300"
            height="300"
            alt="Ahmed Elsakaan"
          />
        </Link>
        <div>
          <Text>🎗 Supporter</Text>
        </div>
      </Card>
      <Card>
        <Link
          href="https://github.com/hobbescodes"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>hobbescodes</h2>
          <img
            src="https://avatars.githubusercontent.com/u/87732294?s=300"
            height="300"
            alt="hobbescodes"
          />
        </Link>
        <div>
          <Text>🎗 Supporter</Text>
        </div>
      </Card>
    </Grid>
  </Box>
)

export default Sponsors
