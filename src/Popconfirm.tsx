import * as React from "react"
import { Field, FieldProps } from "formik"
import { Popconfirm as $Popconfirm, message } from "antd"
import { PopconfirmProps } from "antd/lib/popconfirm"

export function Popconfirm({
  onConfirm,
  children,
  ...props
}: PopconfirmProps & { children: React.ReactElement }) {
  const [loading, setLoading] = React.useState(false)

  return (
    <Field>
      {({ form }: FieldProps) => (
        <div
          onClick={(e) => {
            e.stopPropagation()
          }}
        >
          <$Popconfirm
            disabled={form.dirty}
            onConfirm={
              onConfirm
                ? async (e: any) => {
                    setLoading(true)
                    try {
                      await onConfirm(e)
                    } catch (E) {
                      message.error(E.toString())
                    }
                    setLoading(false)
                  }
                : undefined
            }
            {...props}
          >
            {React.cloneElement(children, { loading })}
          </$Popconfirm>
        </div>
      )}
    </Field>
  )
}
