import * as React from 'react'
import { Grid, Card, Link } from '@theme-ui/components'

const Supporters = () => (
    <Grid
        gap={[4, null, null, 6]}
        columns={[1, null, null, 2]}
        sx={{ justifyItems: ['center', null, null, 'stretch'] }}
    >
        <Card sx={{ alignSelf: 'flex-end', justifySelf: 'stretch' }}>
            <iframe
                src="https://github.com/sponsors/TkDodo/card"
                title="Sponsor TkDodo"
                width="100%"
                height="300"
                style={{ border: 0 }}
            />
        </Card>
        <Card
            as={Link}
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
        </Card>
    </Grid>
)

export default Supporters
