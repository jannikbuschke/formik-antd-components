import React from "react"
import { Formik } from "formik"
import { Form } from "formik-antd"
import { ActionButton } from "./ActionButton"
import * as colors from "@ant-design/colors"
import { presetPalettes } from "@ant-design/colors"

console.log(presetPalettes)

export default {
  title: "ActionButton",
}

export const text = () => (
  <div style={{ margin: 10 }}>
    <Formik initialValues={{}} onSubmit={() => {}}>
      <Form>
        <div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr",
              gridGap: 2,
            }}
          >
            {Object.keys(presetPalettes).map((preset) => {
              return presetPalettes[preset].map((color) => (
                // <div
                //   title={preset}
                //   style={{ height: 30, width: 30, background: color, color: "black" }}
                // ></div>
                <ActionButton style={{ background: color }}>
                  {color}
                </ActionButton>
              ))
            })}

            {/* {Object.keys(colors).map((color) => (
        <div
          style={{ height: 10, width: 10, background: color, color: "black" }}
        >
          {color}
        </div>
      ))} */}
          </div>

          <ActionButton>Submit</ActionButton>
        </div>
      </Form>
    </Formik>
  </div>
)
