import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
// import { themeContext } from '../../Context'
// import { useContext } from 'react'
import Sun from '@iconscout/react-unicons/icons/uil-sun'
import Moon from '@iconscout/react-unicons/icons/uil-moon'
import Toggle from "../Toggle/Toggle";

export default function Popup() {
	// const theme = useContext(themeContext) 

	// const handleClick =() =>{

	//   theme.dispatch({type: 'toggle'})
	// }
	const [open, setOpen] = React.useState(false);

	const handleClickToOpen = () => {
		setOpen(true);
	};

	const handleToClose = () => {
		setOpen(false);
	};
	return (
		<div>

			<Button stlye={{ border: 'none' }} color="primary"
				onClick={handleClickToOpen}>
				<Sun />
				<Moon />
			</Button>
			<Dialog open={open} onClose={handleToClose}>
				<DialogTitle>{"Are you sure"}</DialogTitle>
				<DialogActions>
					<Button onClick={handleToClose}
						color="primary" autoFocus>
						Close
					</Button>
					<Button onClick={handleToClose}
						color="danger" autoFocus>
						<Toggle />
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}
