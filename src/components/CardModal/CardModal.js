import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';

import './CardModal.css';

const useStyles = makeStyles(theme => ({
    paper: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: `translate(-50%, -50%)`,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(4),
        outline: 'none',
        display: 'flex',
        flexDirection: 'row',
        width: '80vw',
        maxWidth: '900px',
        [theme.breakpoints.down(700)]: {
            flexDirection: 'column'
        },
    },
}));

export default function CardModal(props) {

    const classes = useStyles();

    return (
        <div>
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={props.open || false}
                onClose={props.handleClose}
            >
                <div className={classes.paper}>
                    <div className="modal-title">
                        <div><img className="art-image" alt="type of art" src={props.img} /></div>
                        <Typography variant="h4" id="modal-title">
                            {props.title}
                        </Typography>
                    </div>
                    <div className="modal-text">
                        <Typography variant="subtitle1" id="simple-modal-description">
                            {props.fullText}
                        </Typography>
                    </div>

                    <CardModal />

                </div>
            </Modal>
        </div>
    );
}

