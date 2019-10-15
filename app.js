const Koa = require('koa');

const app = new Koa();

const path = require('path');

const bodyParser = require('koa-bodyparser');

const router = require('./router')

// const Index = require('./public/index')

const koaStatic = require('koa-static');

const staticPath = koaStatic(path.join(process.cwd(), 'public'));

app.use(staticPath);

app.use(bodyParser());

app.use(router.routes()); //启动路由

app.use(router.allowedMethods());

// console.log('app的dirname' + __dirname);
// console.log('app的cwd' + process.cwd())

app.listen(3000, () => {
    console.log('服务启动成功')
})