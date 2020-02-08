import React from "react"
import { action } from "@storybook/addon-actions"
import { Popconfirm } from "./Popconfirm"
import { Formik } from "formik"
import { Button } from "antd"

export default {
  title: "ConfirmAction",
}

export const text = () => (
  <div style={{ margin: 200 }}>
    <Formik initialValues={{}} onSubmit={() => {}}>
      <Popconfirm title="hello" onConfirm={action("clicked")}>
        <Button>😀 😎 👍 💯</Button>
      </Popconfirm>
    </Formik>
  </div>
)
