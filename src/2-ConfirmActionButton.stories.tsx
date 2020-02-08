import React from "react"
import { action } from "@storybook/addon-actions"
import { ConfirmAction } from "./ConfirmActionButton"
import { Formik } from "formik"
import { Button } from "antd"

export default {
  title: "ConfirmAction",
}

export const text = () => (
  <div style={{ margin: 200 }}>
    <Formik initialValues={{}} onSubmit={() => {}}>
      <ConfirmAction title="hello" onConfirm={action("clicked")}>
        <Button>😀 😎 👍 💯</Button>
      </ConfirmAction>
    </Formik>
  </div>
)
