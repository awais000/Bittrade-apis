import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

const app = express();

/* connecting to mongodb 
*/
import {mongoose} from './database'
// mongoose.set('debug', true);
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

/**
 * S E T T I N G S
 */
app.set('port', process.env.PORT || 3000);
app.use(express.static('./public'));
/**
 * M I D D L E W A R E S
 */
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());



/**
 * R O U T E S
 */ 
app.use('/api-docs',require("./routes/documentation.route"));
app.use('/api/products', require('./routes/product.routes'));
app.use('/api/user', require('./routes/users.routes'));
app.use('/api/cart', require('./routes/card.routes'));
app.use('/api/checkout', require('./routes/checkout.routes'));
/**
 * S T A R T I N G   S E R V E R
 */

app.listen(app.get('port'), (error) => {
    if (error)
    {
        console.log('Error on server: ',err);
    } 
    else {
        console.log('Server on port', app.get('port'));
    }
});

/** this ends this file
* server/index
**/
