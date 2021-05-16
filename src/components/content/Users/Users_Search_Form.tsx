import { Field, Form, Formik } from "formik"
import { useDispatch, useSelector } from "react-redux"
import { FilterType, getUsers } from "../../../redux/Users_Reducer"
import { getPageSize } from "../../../redux/Users_Selector"

const usersSearchFormValidate = (values: any) => {
    const errors = {}
    return errors
}

type PropsType = {
    // onFilterChanged: (filter: FilterType) => void
}

type FormType = {
    term: string
    friend: "true" | "false" | "null"
}

const UsersSearchForm: React.FC<PropsType> = () => {

    const pageSize = useSelector(getPageSize)
    const dispatch = useDispatch()

    const onFilterChanged = (filter: FilterType) => {
        dispatch(getUsers(1, pageSize, filter))
    }

    const submit = (
        values: FormType,
        { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
    ) => {
        const filter: FilterType = {
            term: values.term,
            friend:
                values.friend === "null"
                    ? null
                    : values.friend === "true"
                    ? true
                    : false,
        }
        onFilterChanged(filter)
        setSubmitting(false)
    }

    return (
        <div>
            <Formik
                initialValues={{ term: "", friend: "null" }}
                validate={usersSearchFormValidate}
                onSubmit={submit}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <Field type="text" name="term" />
                        <Field name="friend" as="select">
                            <option value="null">All</option>
                            <option value="true">Only followed</option>
                            <option value="false">Only unfollowed</option>
                        </Field>
                        <button type="submit" disabled={isSubmitting}>
                            Find
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default UsersSearchForm
