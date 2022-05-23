import { NotListedLocation } from '@mui/icons-material';
import { Dialog, DialogTitle, DialogContent, DialogActions, Typography, IconButton } from '@mui/material'
import React from 'react' 


export default function ConfirmDialog(props) {
    const { confirmDialog, setConfirmDialog } = props;
  
    return (
    <Dialog open={confirmDialog.isOpen}> 
        <DialogTitle>

        </DialogTitle>
        <DialogContent>
        <Typography variant="h6">
                    {confirmDialog.title}
                </Typography>
                <Typography variant="subtitle2">
                    {confirmDialog.subTitle}
                </Typography>
        </DialogContent>
        <DialogActions>
        <button className='bg-red-700 p-2 rounded-full px-8' onClick={() => setConfirmDialog({...confirmDialog, isOpen:false})} > No  </button>
        <button className='bg-lime-800 p-2 rounded-full px-8' onClick={confirmDialog.onConfirm}> Yes </button>
        </DialogActions>
    </Dialog> 
  )
}
