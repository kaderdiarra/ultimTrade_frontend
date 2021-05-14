import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core'
import { AiOutlineHistory, AiOutlineClear } from 'react-icons/ai'

import { getHistoryAsync, clearHistory } from '../../redux/history'
import { clearHistoryReq } from '../../routes/route'
import ComponentHeader from '../../components/controls/ComponentHeader'
import HistoryList from './HistoryList'

const useStyles = makeStyles({
    root: {
        maxWidth: 280
    },
})

function History() {
    const classes = useStyles()
    const histories = useSelector((state) => state.history)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getHistoryAsync())
    }, [dispatch])

    const handleClickClear = async() => {
        try {
            await clearHistoryReq()
            dispatch(clearHistory())
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className={classes.root}>
            <ComponentHeader
                title="History"
                icon={<AiOutlineClear/>}
                handleClickClear={handleClickClear}
                compoStyles={{
                    height: 50,
                    iconSize: 30,
                    textSize: 17,
                }}
            />
            <HistoryList histories={histories} />
        </div>
    )
}

export default History
