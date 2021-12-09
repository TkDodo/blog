import * as React from 'react'
import { Grid, Link } from '@theme-ui/components'

const PremiumSponsors = () => (
  <Grid
    gap={[4, null, null, 6]}
    columns={[1, null, null, 2]}
    sx={{ justifyItems: ['center', null, null, 'stretch'] }}
  >
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img
        src="https://avatars.githubusercontent.com/u/5580297?s=64"
        alt="Tanner Linsley"
        style={{
          marginRight: '0.875rem',
          width: '4rem',
          height: '4rem',
          borderRadius: '50%',
        }}
      />
      <Link
        href="https://tanstack.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        🥈 Tanner Linsley
      </Link>
    </div>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img
        src="./images/reactbricks.svg"
        alt="React Bricks"
        style={{
          marginRight: '0.875rem',
          width: '4rem',
          height: '4rem',
        }}
      />
      <Link
        href="https://reactbricks.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        🥉 React Bricks
      </Link>
    </div>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img
        src="https://avatars.githubusercontent.com/u/6743796?s=64"
        alt="Clifford Fajardo"
        style={{
          marginRight: '0.875rem',
          width: '4rem',
          height: '4rem',
        }}
      />
      <Link
        href="https://www.cliffordfajardo.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        🥉 Clifford Fajardo
      </Link>
    </div>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img
        src="./images/workflowgen.png"
        alt="WorkflowGen"
        style={{
          marginRight: '0.875rem',
          width: '4rem',
          height: '4rem',
        }}
      />
      <Link
        href="https://www.workflowgen.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        🥳 WorkflowGen
      </Link>
    </div>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img
        src="https://avatars.githubusercontent.com/u/5667718?s=64"
        alt="Andrew Tian"
        style={{
          marginRight: '0.875rem',
          width: '4rem',
          height: '4rem',
        }}
      />
      <Link
        href="https://andrewtian.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        🥳 Andrew Tian
      </Link>
    </div>
  </Grid>
)

export default PremiumSponsors
