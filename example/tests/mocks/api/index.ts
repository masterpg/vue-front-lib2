import { AppGQLAPIContainer } from '@/logic/api/gql'
import { TestGQLAPIContainerMixin } from '../../helpers/api'
import { initAPI as _initAPI } from '@/logic/api'
import { mix } from 'vue-front-lib2/src'

class TestAPIContainer extends mix(AppGQLAPIContainer).with(TestGQLAPIContainerMixin) {}

export let api: TestAPIContainer

export function initAPI(): void {
  api = new TestAPIContainer()
  _initAPI(api)
}