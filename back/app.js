import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.listen(3000,	()	=>	{
  console.log('Ntalk	no	ar.');
});
