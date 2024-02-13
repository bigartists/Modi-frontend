import { Outlet } from 'react-router-dom'
import styled from 'styled-components/macro'

import bg from '@/assets/images/pro/bg1.png'
import React from 'react'
import NavBar from '@/components/NavBar'

export default function Main() {
  return (
    <RootWrapper>
      <div className="rootContainer">
        <Outlet />
        {/* <Main>{children}</Main> */}
        <NavBar />
      </div>
    </RootWrapper>
  )
}

const RootWrapper = styled.div`
  .rootContainer {
    position: absolute;
    display: flex;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-size: cover;
  }
`
