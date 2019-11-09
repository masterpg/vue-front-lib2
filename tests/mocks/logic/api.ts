import { BaseGQLAPIContainer, setAPI } from '../../../src'
import { TestGQLAPIContainerMixin } from '../../helpers/api'
import { mix } from 'web-base-lib'

class MockGQLAPIContainer extends BaseGQLAPIContainer {}

class TestAPIContainer extends mix(MockGQLAPIContainer).with(TestGQLAPIContainerMixin) {}

export let api: TestAPIContainer

export function initAPI(): void {
  api = new TestAPIContainer()
  setAPI(api)
}
