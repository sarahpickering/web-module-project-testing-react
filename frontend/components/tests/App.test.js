// 👇 YOUR WORK STARTS ON LINE 19
import React from 'react'
import { render, waitFor, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import server from '../../../backend/mock-server'
import App from '../App'

describe('Stranger Things App', () => {
  let user
  afterEach(() => { server.resetHandlers() })
  beforeAll(() => { server.listen() })
  afterAll(() => { server.close() })
  beforeEach(() => {
    render(<App />)
    user = userEvent.setup()
  })
  test('App mounts without crashing', () => {

  })
  test('App renders the correct texts', async () => {
   await user.click(screen.getByText("Press to Get Show Data"));

   await waitFor(() => {
     expect(screen.queryByText("Press to Get Show Data"))
     .not.toBeInTheDocument();
     screen.getByText("Stranger Things");
     screen.getByText("A love letter to the '80s classics \
that captivated a generation", { exact: false })
      screen.getByText("Select A Season")

   })
  

    // 👉 TASK: select Season 2 from the dropdown
    await user.SelectOptions(document.querySelector('select'), '1')
    screen.debug


    // 👉 TASK: create the following assertions:
    screen.getByText("Season 2, Episode 1")
    screen.getByText("Chapter One: MADMAX")
      screen.getByText("One year after the events with the \
Upside Down and the Demogorgon", { exact: false })

  })
})
