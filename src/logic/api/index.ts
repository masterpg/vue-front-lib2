import { BaseAPIContainer } from './types'

export let api: BaseAPIContainer

export function setAPI(value: BaseAPIContainer): void {
  api = value
}

export * from './types'
export * from './gql'
export * from './rest'
