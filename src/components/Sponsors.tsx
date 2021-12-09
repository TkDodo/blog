import * as React from 'react'
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
          <Text>🥈 Silver ($100 a month)</Text>
        </div>
      </Card>
      <Card>
        <Link
          href="https://reactbricks.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>React Bricks</h2>
          <img
            src="./images/reactbricks.svg"
            height="300"
            alt="React Bricks"
          />
        </Link>
        <div>
          <Text>🥉 Bronze ($50 a month)</Text>
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
          <Text>🥉 Bronze ($50 a month)</Text>
        </div>
      </Card>
      <Card>
        <Link
          href="https://www.workflowgen.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>WorkflowGen</h2>

          <img
            src="./images/workflowgen.png"
            height="300"
            alt="WorkflowGen"
          />
        </Link>
        <div>
          <Text>🥳 Sponsor ($20 a month)</Text>
        </div>
      </Card>
      <Card>
        <Link
          href="https://andrewtian.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>Andrew Tian</h2>

          <img
            src="https://avatars.githubusercontent.com/u/5667718?s=300"
            height="300"
            alt="Andrew Tian"
          />
        </Link>
        <div>
          <Text>🥳 Sponsor ($20 a month)</Text>
        </div>
      </Card>
      <Card>
        <Link
          href="https://twitter.com/OhansEmmanuel"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>Ohans Emmanuel</h2>
          <img
            src="https://avatars.githubusercontent.com/u/10930234?s=300"
            height="300"
            alt="WorkflowGen"
          />
        </Link>
        <div>
          <Text>🎗 Supporter ($10 a month)</Text>
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
    </Grid>
  </Box>
)

export default Sponsors
