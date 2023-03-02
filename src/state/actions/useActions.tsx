import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'

export default function useActions(actions: any) {
    const dispatch = useDispatch()
    return useMemo(
        () => {
            if (Array.isArray(actions)) {
                return actions.map(a => bindActionCreators(a, dispatch))
            }
            return bindActionCreators(actions, dispatch)
        },
        [actions, dispatch]
    )
}