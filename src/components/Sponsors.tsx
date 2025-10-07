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
          href="https://www.workleap.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>Workleap</h2>
          <img
            src="https://avatars.githubusercontent.com/u/53535748?s=300"
            height="300"
            alt="Workleap"
          />
        </Link>
        <div>
          <Text>💎 Diamond</Text>
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
          href="https://github.com/jlbmagic"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>Jeremy Brown</h2>
          <img
            src="https://avatars.githubusercontent.com/u/20194907?s=300"
            height="300"
            alt="Jeremy Brown"
          />
        </Link>
        <div>
          <Text>🥳 Sponsor</Text>
        </div>
      </Card>
      <Card>
        <Link
          href="https://deliver.media/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>deliver.media</h2>
          <img
            src="https://avatars.githubusercontent.com/u/120005519?s=300"
            height="300"
            alt="deliver.media"
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
      <Card>
        <Link
          href="https://www.robinwieruch.de/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>Robin Wieruch</h2>
          <img
            src="https://avatars.githubusercontent.com/u/2479967?s=300"
            height="300"
            alt="Robin Wieruch"
          />
        </Link>
        <div>
          <Text>🎗 Supporter</Text>
        </div>
      </Card>
      <Card>
        <Link
          href="https://www.venue.ink/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>Venue Ink</h2>
          <img
            src="https://avatars.githubusercontent.com/u/67328248?s=300"
            height="300"
            alt="Venue Ink"
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
