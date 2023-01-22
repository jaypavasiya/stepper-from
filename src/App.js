import { Container, Typography } from '@mui/material'
import React from 'react'
import DetailsForm from './Pages/DetailsForm'

const App = () => {
  return (
    <Container>
      <Typography variant="h3" align="center" component="h2">
        Multi step form
      </Typography>
      <div className="flex-center mt50">
        <DetailsForm />
      </div>
    </Container>
  )
}

export default App