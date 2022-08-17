import React from 'react'
import { DocSearch } from "@docsearch/react";
import useAlgoliaContextualFacetFilters from '@theme/hooks/useAlgoliaContextualFacetFilters';

function SearchHeader() {
  const facetFilters = useAlgoliaContextualFacetFilters();
  return (
    <DocSearch
    apiKey="c286bee2461560e2c43b77350aae8321"
    indexName="help"
    searchParameters={{
      facetFilters
    }}
    />
  )
}

export default SearchHeader
