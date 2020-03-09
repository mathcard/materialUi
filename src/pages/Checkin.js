import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import CustomButton from '../components/CustomButton';
import TextField from '@material-ui/core/TextField';

import { Container } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

import FullScreenMessage from './../components/FullScreenMessage';

/*import { Link } from 'react-router-dom';*/
import logo from '../assets/logo.jpg';

const useStyles = makeStyles(theme => ({
  paper: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
    marginTop: theme.spacing(8),
    textAlign: 'center',
    width: "100%",
    height: "100%"
  },
  form: {
    width: '100%',
  },
  gridBotao: {
    marginTop: theme.spacing(8)
  },
  gridPesquisa: {
    marginTop: theme.spacing(8)
  },
  inline: {
    display: 'inline',
  },
  nome: {
    maxwidth: '80%',
  },
  status: {
    paddingRight: theme.spacing(10),
    textAlign: 'right',
    height: '100%'
  },
  botaoVoltar: {
    marginTop: '20px'
  }
}));

const Checkin = (props) => {
  const [find, setFind] = useState('');
  const [typeFind, setTypeFind] = useState('nome');
  const [queryPesquisa, setQueryPesquisa] = useState('');
  const [showForm, setShowForm] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  const [dados, setDados] = useState([
    { id: 1, cpf: '458.054.120-30', nome: 'Jose', status: 0 },
    { id: 2, cpf: '800.554.651-20', nome: 'Jose Silva', status: 0 },
    { id: 3, cpf: '700.366.111-07', nome: 'Math Card', status: 1 },
    { id: 4, cpf: '700.366.187-07', nome: 'Lucas Luis do Reis Filho Mezenga Matuzalem', status: 0 },
  ]);

  const handleSubmit = e => {
    e.preventDefault();
    /*console.log(this.state.find);
        */
    console.log(queryPesquisa);
    // FUNCIONOU
    /*if(this.state.find == 'e'){
        console.log('Essa merda traz um vetor');
    }*/
    setShowForm(false);
  }

  const handleChange = event => {
    event.target.name === 'find' ? setFind(event.target.value) : setQueryPesquisa(event.target.value);
  }

  const inputNome = () => {
    setTypeFind('nome');
    let queryName = 'queryName';
    setQueryPesquisa(queryName);
  }

  const inputCpf = () => {
    setTypeFind('cpf');
    let queryCpf = 'queryCpf';
    setQueryPesquisa(queryCpf);
  }

  const voltarPesquisa = () => {
    setShowForm(true);
  }

  const confirmaCheckin = (id) => {
    const newDados = dados.map(res => {
      return res.id === id ? { ...res, status: 1 } : res;
    })
    setDados(newDados);
    setShowMessage(true);
  }

  const desfazCheckin = (id) => {
    const newDados = dados.map(res => {
      return res.id === id ? { ...res, status: 0 } : res;
    })
    setDados(newDados);
  }

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="md">
      <Paper className={classes.paper} elevation={3}>
        <Typography component="h1" variant="h5">
          Checkin
        </Typography>
        {
          showForm ?
            <form onSubmit={handleSubmit} className={classes.form}>
              <Grid container justify="center" spacing={2} className={classes.gridBotao}>
                <Grid item>
                  <CustomButton variant="contained" size="large" color="primary" onClick={inputNome}>Nome</CustomButton>
                </Grid>
                <Grid item>
                  <CustomButton variant="contained" size="large" color="primary" onClick={inputCpf}>CPF</CustomButton>
                </Grid>
              </Grid>
              <Grid container justify="center" spacing={2} className={classes.gridPesquisa}>
                {
                  typeFind === 'nome'
                    ? <Grid item>
                      <TextField
                        required
                        name="find"
                        id="find"
                        label="Pesquise pelo Nome"
                        defaultValue={find}
                        onChange={handleChange}
                      />
                    </Grid>
                    : <Grid item>
                      <TextField
                        required
                        name="find"
                        id="find"
                        label="Pesquise pelo CPF"
                        defaultValue={find}
                        onChange={handleChange}
                      />
                    </Grid>
                }
                <Grid item>
                  <CustomButton variant="contained" size="large" color="primary" type="submit">Pesquisar</CustomButton>
                </Grid>
              </Grid>
            </form>
            : <div className="result">
              {/* Início Lista */}
              <List subheader={<ListSubheader>Parâmetro de pesquisa: {find}</ListSubheader>} className={classes.root}></List>
              <List id="resultado" className={classes.root}>
                {
                  dados.map((res, index) => {   //const {id, cpf, nome, status } = res;                                                                                                                                                                                              
                    //res.id == null ? <span>Vazio</span> :
                    if (res.nome && (res.nome.search(find) > -1 || res.cpf.search(find) > -1)) {
                      return (
                        <div key={res.id}>
                          <ListItem key={res.id} display="flex">
                            <ListItemAvatar>
                              <Avatar alt={classes.nome} color="primary">{res.nome.substring(0, 1)}</Avatar>
                            </ListItemAvatar>
                            <ListItemText className={classes.nome}
                              primary={res.nome.toUpperCase()}
                              secondary={
                                <React.Fragment>
                                  <Typography
                                    component="span"
                                    variant="body2"
                                    className={classes.inline}
                                    color="textPrimary"
                                  >

                                  </Typography>
                                  {res.cpf}
                                </React.Fragment>
                              }
                            />
                            <ListItemText className={classes.status}
                              secondary={
                                <React.Fragment>
                                  <Typography
                                    component="span"
                                    variant="body2"
                                    className={classes.inline}
                                    color="textPrimary"
                                  >
                                    {res.status === 0 ? 'Pendente  ' : 'Confirmado'}
                                  </Typography>

                                </React.Fragment>
                              }
                            />
                            <ListItemSecondaryAction>
                              {
                                res.status === 0
                                  ? <IconButton edge="end" aria-label="Confirmar" title="Confirmar" onClick={() => confirmaCheckin(res.id)}>
                                    <EventAvailableIcon />
                                  </IconButton>
                                  : <IconButton edge="end" aria-label="Desfazer" title="Desfazer" onClick={() => desfazCheckin(res.id)}>
                                    <EventAvailableIcon color="primary" />
                                  </IconButton>
                              }
                            </ListItemSecondaryAction>
                          </ListItem>
                          <Divider variant="inset" component="li" />
                        </div>
                      )
                    }
                  })
                }
              </List>
              {/* Final Lista */}
              <Button className={classes.botaoVoltar} variant="contained" size="large" color="primary" onClick={voltarPesquisa}>Voltar</Button>
            </div>
        }
        <input type="hidden" name="queryPesquisa" id="queryPesquisa"
          onChange={handleChange} value={queryPesquisa} />
      </Paper>
      <FullScreenMessage show={showMessage} handleClose={() => setShowMessage(false)} />
    </Container>
  )
}

export default Checkin;