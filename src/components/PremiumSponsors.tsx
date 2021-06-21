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
        src="https://avatars.githubusercontent.com/u/5580297?v=4"
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
        Tanner Linsley
      </Link>
    </div>
  </Grid>
)

export default PremiumSponsors
