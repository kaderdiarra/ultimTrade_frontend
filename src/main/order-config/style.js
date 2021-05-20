import { makeStyles } from "@material-ui/core";

export const sideButtonStyle = {
    buttonsContainer: {
        display: 'flex',
        margin: 10,
        alignSelf: 'center',

        '& .MuiButton-root': {
            color: '#000000',
            fontWeight: 600,
            fontSize: 16,
            width: 85,
            height: 45,
        },

        '& .MuiButton-root:hover': {
            backgroundColor: '#F2CD31',
        }
    },
    buyButton: ({ selected }) => ({
        backgroundColor: selected === 'BUY' ? '#F2CD31' : '#ECECF4',
        borderRadius: '10px 0px 0px 10px',
        borderRightStyle: 'solid',
        borderRightWidth: 1,
        borderRightColor: '#000000'
    }),
    sellButton: ({ selected }) => ({
        backgroundColor: selected === 'SELL' ? '#F2CD31' : '#ECECF4',
        borderRadius: '0px 10px 10px 0px',
        borderLeftStyle: 'solid',
        borderLeftWidth: 1,
        borderLeftColor: '#000000'
    }),
}

export const useStyles = makeStyles({
    root: {
        backgroundColor: '#FFFFFF',
        width: '95%',
        height: '85%',
        margin: '0 auto',
        position: 'relative',
        top: '7%',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
    },
    tradeButton: {
        maxWidth: 120,
        margin: 30
    }
})