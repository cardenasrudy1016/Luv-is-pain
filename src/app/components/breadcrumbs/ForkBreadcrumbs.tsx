import { Box, Breadcrumbs } from '@primer/react'
import { ForkData } from 'hooks/useFork'
import { OrgData } from 'hooks/useOrganization'

interface ForkBreadcrumbsProps {
  orgData: OrgData
  forkData: ForkData
}

export const ForkBreadcrumbs = ({
  orgData,
  forkData,
}: ForkBreadcrumbsProps) => {
  if (!orgData || !forkData) {
    return null
  }

  return (
    <Box sx={{ marginBottom: '10px' }}>
      <Breadcrumbs sx={{ display: 'inline-block', paddingRight: '10px' }}>
        <Breadcrumbs.Item href="/" sx={{ fontSize: '2', fontWeight: 'bold' }}>
          All organizations
        </Breadcrumbs.Item>
        <Breadcrumbs.Item
          href={`/${orgData?.login}`}
          sx={{ fontSize: '2', fontWeight: 'bold' }}
        >
          {orgData?.login}
        </Breadcrumbs.Item>
        <Breadcrumbs.Item selected sx={{ fontSize: '2', fontWeight: 'bold' }}>
          {forkData?.name}
        </Breadcrumbs.Item>
      </Breadcrumbs>
    </Box>
  )
}
