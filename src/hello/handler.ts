import { Handler, Context } from "aws-lambda";

interface HelloResponse {
  statusCode: number;
  body: string;
}

import * as HelloService from "./hello_service";

const hello: Handler = async (event: any, context: Context) => {
  const response: HelloResponse = {
    statusCode: 200,
    body: JSON.stringify({
      message: HelloService.hello(event.name)
    })
  };

  return response;
};

export { hello };
