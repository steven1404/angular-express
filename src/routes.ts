import {TestController} from "./controller/TestController";

export const Routes = [{
    method: "get",
    route: "/hello",
    controller: TestController,
    action: "hello"
},
{
    ethod: "post",
    route: "/bitly",
    controller: TestController,
    action: "postUrl"
},
{
    ethod: "get",
    route: "/bitly",
    controller: TestController,
    action: "urlList"
},
{
    ethod: "get",
    route: "/bitly/:id",
    controller: TestController,
    action: "urlListbyID"
}];