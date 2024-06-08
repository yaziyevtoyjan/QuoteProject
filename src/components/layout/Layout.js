import React, { Fragment } from 'react'
import classes from './Layout.module.css'
import MainNavigation from './MainNavigation'

const Layout = (props) => {
  return (
    <div>
      <Fragment>
        <MainNavigation/>
        <main className={classes.main}>{props.children}</main>
      </Fragment>
    </div>
  )
}

export default Layout
