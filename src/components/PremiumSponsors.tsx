import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Grid, Link } from '@theme-ui/components'

const PremiumSponsors = () => (
  <Grid
    gap={[4, null, null, 6]}
    columns={[1, null, null, 2]}
    sx={{ justifyItems: ['flex-start', null, null, 'stretch'] }}
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
        sx={{
          fontSize: [2, 2, 3],
        }}
      >
        💍 Tanner Linsley
      </Link>
    </div>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img
        src="https://avatars.githubusercontent.com/u/53535748?s=64"
        alt="Workleap"
        style={{
          marginRight: '0.875rem',
          width: '4rem',
          height: '4rem',
          borderRadius: '50%',
        }}
      />
      <Link
        href="https://www.workleap.com"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          fontSize: [2, 2, 3],
        }}
      >
        💎 Workleap
      </Link>
    </div>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img
        src="https://avatars.githubusercontent.com/u/109633172?s=64"
        alt="wevm"
        style={{
          marginRight: '0.875rem',
          width: '4rem',
          height: '4rem',
          borderRadius: '50%',
        }}
      />
      <Link
        href="https://wevm.dev/"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          fontSize: [2, 2, 3],
        }}
      >
        🥇 wevm
      </Link>
    </div>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <StaticImage
        placeholder="blurred"
        src="../../static/images/reactbricks.svg"
        alt="React Bricks"
        width={64}
        height={64}
        style={{
          marginRight: '0.875rem',
          borderRadius: '50%',
        }}
      />
      <Link
        href="https://reactbricks.com/"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          fontSize: [2, 2, 3],
        }}
      >
        🥉 React Bricks
      </Link>
    </div>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <StaticImage
        placeholder="blurred"
        src="../../static/images/workflowgen.png"
        alt="WorkflowGen"
        width={64}
        height={64}
        style={{
          marginRight: '0.875rem',
          borderRadius: '50%',
        }}
      />
      <Link
        href="https://www.workflowgen.com/"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          fontSize: [2, 2, 3],
        }}
      >
        🥳 WorkflowGen
      </Link>
    </div>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img
        src="https://avatars.githubusercontent.com/u/8204858?s=64"
        alt="Jonas Daniels"
        style={{
          marginRight: '0.875rem',
          width: '4rem',
          height: '4rem',
          borderRadius: '50%',
        }}
      />
      <Link
        href="https://github.com/jnsdls"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          fontSize: [2, 2, 3],
        }}
      >
        🥳 Jonas Daniels
      </Link>
    </div>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <StaticImage
        placeholder="blurred"
        src="../../static/images/monolisa.jpeg"
        alt="MonoLisa"
        width={64}
        height={64}
        style={{
          marginRight: '0.875rem',
          borderRadius: '50%',
        }}
      />
      <Link
        href="https://www.monolisa.dev/?ref=dominik"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          fontSize: [2, 2, 3],
        }}
      >
        🥳 MonoLisa
      </Link>
    </div>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img
        src="https://avatars.githubusercontent.com/u/5332234?s=64"
        alt="Nadav Lebovitch"
        style={{
          marginRight: '0.875rem',
          width: '4rem',
          height: '4rem',
          borderRadius: '50%',
        }}
      />
      <Link
        href="https://github.com/nadavl"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          fontSize: [2, 2, 3],
        }}
      >
        🥳 Nadav Lebovitch
      </Link>
    </div>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img
        src="https://avatars.githubusercontent.com/u/20194907?s=64"
        alt="Jeremy Brown"
        style={{
          marginRight: '0.875rem',
          width: '4rem',
          height: '4rem',
          borderRadius: '50%',
        }}
      />
      <Link
        href="https://github.com/jlbmagic"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          fontSize: [2, 2, 3],
        }}
      >
        🥳 Jeremy Brown
      </Link>
    </div>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img
        src="https://avatars.githubusercontent.com/u/120005519?s=64"
        alt="deliver.media"
        style={{
          marginRight: '0.875rem',
          width: '4rem',
          height: '4rem',
          borderRadius: '50%',
        }}
      />
      <Link
        href="https://deliver.media/"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          fontSize: [2, 2, 3],
        }}
      >
        🥳 deliver.media
      </Link>
    </div>
  </Grid>
)

export default PremiumSponsors
