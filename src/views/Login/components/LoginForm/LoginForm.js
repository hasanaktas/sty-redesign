/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import clsx from 'clsx'
import { useDispatch, useSelector } from 'react-redux'
import { Button, TextField, Typography } from '@material-ui/core'
import { useStyles } from './LoginForm.styles'
import * as allActions from 'store/actions/authActions'
const LoginForm = props => {
  const { className, ...rest } = props

  const classes = useStyles()
  const dispatch = useDispatch()
  const errorMessage = useSelector(state => state.auth.errorMessage)
  const [formState, setFormState] = useState({
    email: 'admin@ik.com.tr',
    password: 'admin',
  })

  const handleChange = event => {
    event.persist()

    setFormState(formState => ({
      ...formState,
      [event.target.name]: event.target.value,
    }))
  }

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <div className={classes.fields}>
        <TextField
          error={errorMessage !== ''}
          fullWidth
          label="E-posta Adresi"
          name="email"
          onChange={handleChange}
          value={formState.email}
          variant="outlined"
        />
        <TextField
          error={errorMessage !== ''}
          fullWidth
          label="Parola"
          name="password"
          onChange={handleChange}
          type="password"
          value={formState.password}
          variant="outlined"
        />
      </div>
      <Button
        className={classes.submitButton}
        color="primary"
        onClick={() => dispatch(allActions.login(formState.email, formState.password))}
        size="large"
        variant="contained"
      >
        Giriş Yap
      </Button>

      <Typography
        color="error"
        style={{ marginTop: 30 }}
        variant="caption"
      >
        {errorMessage}
      </Typography>
    </div>
  )
}

export default LoginForm
