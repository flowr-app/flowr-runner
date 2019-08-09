import { Handler, Context } from "aws-lambda";

interface EchoResponse {
  statusCode: number;
  body: string;
}

import * as EchoService from "./echo_service";

const echo: Handler = async (event: any, context: Context) => {
  const response: EchoResponse = {
    statusCode: 200,
    body: JSON.stringify({
      message: EchoService.echo(event.message),
      input: event
    })
  };

  return response;
};

export { echo };
