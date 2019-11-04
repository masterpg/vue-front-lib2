<template>
  <div>
    <sign-in-dialog ref="signInDialog"></sign-in-dialog>
    <email-change-dialog ref="emailChangeDialog"></email-change-dialog>
    <account-delete-dialog ref="accountDeleteDialog"></account-delete-dialog>
  </div>
</template>

<script lang="ts">
import { AccountDeleteDialog, EmailChangeDialog, SignInDialog } from '@/views/auth'
import { BaseHistoryDialogManager } from 'vue-front-lib2/src/components/base/dialog'
import { Component } from 'vue-property-decorator'
import { Dialog } from '@/components'

@Component({
  components: {
    SignInDialog,
    EmailChangeDialog,
    AccountDeleteDialog,
  },
})
export default class HistoryDialogManager extends BaseHistoryDialogManager {
  protected get dialogs(): { [dialogName: string]: Dialog } {
    return {
      [SignInDialog.name]: this.$refs.signInDialog as Dialog,
      [EmailChangeDialog.name]: this.$refs.emailChangeDialog as Dialog,
    }
  }
}
</script>
