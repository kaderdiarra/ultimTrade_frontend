import React, { useState } from 'react'
import { Dialog, DialogActions } from '@material-ui/core'
import Controls from '../../components/controls/Controls'

function SubmitTradeButton({ buttonStyle }) {
    const [open, setOpen] = useState(false)

    return (
        <div>
            <Controls.Button
                text="TRADE"
                onClick={() => setOpen(true)}
                className={buttonStyle}
            />
            <Dialog
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="edit-dialog-title"
                aria-describedby="edit-dialog-description"
            >
                <DialogActions>
                    <Controls.Button
                        text="Confirm"
                        type="submit"
                        size="small"
                        form="order-configuration-form"
                        onClick={() => setOpen(false)}
                    />
                    <Controls.Button
                        text="Cancel"
                        size="small"
                        color="default"
                        onClick={() => setOpen(false)}
                    />
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default SubmitTradeButton
