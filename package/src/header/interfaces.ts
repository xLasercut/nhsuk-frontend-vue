interface NhsHeaderSearchResult {
  text: string
  value: any
}

interface NhsHeaderOrganisation {
  name?: string
  split?: string
  descriptor?: string
  logoURL?: string
}

interface NhsHeaderService {
  name?: string
  href?: string
}

export { NhsHeaderOrganisation, NhsHeaderService, NhsHeaderSearchResult }
