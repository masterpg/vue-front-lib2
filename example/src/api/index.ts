import { AppAPIContainer } from '@/api/types'
import { AppGQLAPIContainer } from '@/api/gql'
import { AppRESTAPIContainer } from '@/api/rest'
import { setAPI } from 'vue-front-lib2/src/api'

//========================================================================
//
//  Internal
//
//========================================================================

let apiType: 'gql' | 'rest' = 'gql'

let gqlAPI: AppGQLAPIContainer

let restAPI: AppRESTAPIContainer

//========================================================================
//
//  Public
//
//========================================================================

export let api: AppAPIContainer

export function initAPI(apiContainer?: AppAPIContainer): void {
  if (!apiContainer) {
    setAPIType(apiType)
    return
  }

  if (api instanceof AppGQLAPIContainer) {
    apiType = 'gql'
    gqlAPI = apiContainer as AppGQLAPIContainer
    api = apiContainer
  } else if (api instanceof AppRESTAPIContainer) {
    apiType = 'rest'
    restAPI = apiContainer as AppRESTAPIContainer
    api = apiContainer
  } else {
    throw new Error('The argument "apiContainer" is invalid.')
  }
  setAPI(api)
}

export function getAPIType() {
  return apiType
}

export function setAPIType(value: 'gql' | 'rest') {
  apiType = value
  if (apiType === 'gql') {
    api = gqlAPI ? gqlAPI : new AppGQLAPIContainer()
  } else {
    api = restAPI ? restAPI : new AppRESTAPIContainer()
  }
  setAPI(api)
}

export * from '@/api/types'
