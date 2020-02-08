import { Button } from "antd"
import { Field, FieldProps } from "formik"
import * as React from "react"
import { ButtonProps } from "antd/lib/button"

export type SubmitButtonProps = ButtonProps & { onSuccess?: () => void }

export function SubmitButton({
  children,
  onSuccess,
  ...restProps
}: SubmitButtonProps) {
  return (
    <Field>
      {({ form: { isSubmitting, isValid, dirty } }: FieldProps) => (
        <Button
          loading={isSubmitting}
          disabled={(dirty && !isValid) || isSubmitting}
          type="primary"
          htmlType="submit"
          {...restProps}
        >
          {children}
        </Button>
      )}
    </Field>
  )
}

export default SubmitButton
