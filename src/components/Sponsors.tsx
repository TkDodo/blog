import * as React from 'react'
import { Grid, Card, Link, Text } from '@theme-ui/components'

const Sponsors = () => (
    <Grid
        gap={[4, null, null, 5]}
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
            <Text>&nbsp;</Text>
        </Card>
        <Card>
            <Link href="https://tanstack.com/" target="_blank" rel="noopener noreferrer">
                <h2>Tanner Linsley</h2>
                <img
                    src="https://avatars.githubusercontent.com/u/5580297?v=4"
                    height="300"
                    alt="Tanner Linsley"
                />
            </Link>
            <Text>🥳 Sponsor ($20 a month)</Text>
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
            <Text>🎗 Supporter ($10 a month)</Text>
        </Card>
    </Grid>
)

export default Sponsors
