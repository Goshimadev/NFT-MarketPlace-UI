import { Box, Button, Container, Grid, Stack } from '@mui/material'
import Image from 'next/image'
import Images from '../../public/images/Images'
import TextField from '@mui/material/TextField'
export default function () {
  return (
    <>
      <div className="bg-[#0E131F]">
        <Container>
          <Grid container>
            <Grid item md={4} xs={12}>
              <Box className=" my-[20vh] rounded-xl bg-[#111827]">
                <div>
                  <h1 className="text-start p-8 text-2xl font-bold text-white">
                    Beautiful NFT
                  </h1>
                </div>
                <div className="flex justify-between">
                  <Box className="flex  px-8 py-4">
                    <Image
                      src={Images.profile}
                      width="40"
                      height="40"
                      className="rounded-full "
                    />
                    <Box className="flex flex-col px-2 text-xs text-white">
                      <span>Creator</span>
                      <span>Jane Cooper</span>
                    </Box>
                  </Box>
                  <Box className="flex flex-shrink-0 px-8 py-4">
                    <Image
                      src={Images.collection}
                      width="40"
                      height="40"
                      className="rounded-full "
                    />
                    <Box className="flex flex-col px-2 text-xs text-white">
                      <span>Collection</span>
                      <span>Marscape</span>
                    </Box>
                  </Box>
                </div>
                <Box className="px-8 py-4 font-bold text-white">
                  <TextField
                    className="w-full text-white"
                    label="Current Bid"
                    sx={{ color: '#fff' }}
                    focused
                    placeholder="$1000"
                  />
                </Box>
                <Box className="flex items-center justify-center py-3">
                  <Box border="0.1px solid silver" className="w-[90%]"></Box>
                </Box>
                <Box className="p-8 ">
                  <Stack direction="row" spacing={1} className="block sm:flex">
                    <Button
                      variant="contained"
                      className="my-4 w-[50%] rounded-3xl bg-[#0284C7] font-semibold md:my-0"
                    >
                      Place a Bid
                    </Button>
                    <Button
                      variant="outlined"
                      className=" w-[50%]  rounded-3xl bg-transparent font-semibold text-white"
                    >
                      View Items
                    </Button>
                  </Stack>
                </Box>
              </Box>
            </Grid>
            <Grid item md={8}>
              <Box>
                <Image src={Images.bub} />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  )
}
