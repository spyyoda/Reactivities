import { useParams } from "react-router"
import { useProfile } from "../../lib/hooks/useProfile";
import { Box, Button, Divider, Typography } from "@mui/material";
import { DivIcon } from "leaflet";

export default function ProfileAbout() {
    const {id} = useParams();
    const {profile} = useProfile(id);


  return (
    <Box>
        <Box display='flex' justifyContent='space-between'>
            <Typography variant="h5">Amount {profile?.displayName}</Typography>
            <Button>
                Edit profile
            </Button>
        </Box>
        <Divider sx={{my: 2}} />
        <Box sx={{overflow: 'auto', maxHeight: 350}}>
            <Typography variant="body1" sx={{whiteSpace: 'preserve'}}>
                {profile?.bio || 'No description aded yet'}
            </Typography>
        </Box>
    </Box>
        
  )
}