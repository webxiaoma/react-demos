import dva from 'dva';
import createLoading from 'dva-loading'; //加载loading效果
import './index.css';

// 1. Initialize
const app = dva();

// 2. Plugins
app.use(createLoading());

// 3. Model
app.model(require('./models/PageOne.js'));
app.model(require('./models/PageTwo.js'));
app.model(require('./models/mockTest.js'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
