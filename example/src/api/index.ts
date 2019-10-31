import { APIContainer } from '@/api/types'
import { GQLAPIContainer } from '@/api/gql'
import { RESTAPIContainer } from '@/api/rest'
import { setAPI } from 'vue-front-lib2/src/api'

let apiType: 'gql' | 'rest' = 'gql'

let gqlAPI: GQLAPIContainer

let restAPI: RESTAPIContainer

export let api: APIContainer

export function initAPI(apiContainer?: APIContainer): void {
  // TODO apiの型によって適切なapiTypeを設定する必要あり
  if (apiContainer) {
    api = apiContainer
    setAPI(api)
  } else {
    setAPIType(apiType)
  }
}

export function getAPIType() {
  return apiType
}

export function setAPIType(value: 'gql' | 'rest') {
  apiType = value
  if (apiType === 'gql') {
    api = gqlAPI ? gqlAPI : new GQLAPIContainer()
  } else {
    api = restAPI ? restAPI : new RESTAPIContainer()
  }
  setAPI(api)
}

export * from '@/api/types'
