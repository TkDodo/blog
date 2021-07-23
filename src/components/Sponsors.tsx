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
            src="https://avatars.githubusercontent.com/u/5580297?v=4"
            height="300"
            alt="Tanner Linsley"
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
            src="https://www.workflowgen.com/img/workflowgen-workflow-thumbnail.png"
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
          href="https://twitter.com/OhansEmmanuel"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>Ohans Emmanuel</h2>
          <img
            src="https://avatars.githubusercontent.com/u/10930234"
            height="300"
            alt="WorkflowGen"
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
