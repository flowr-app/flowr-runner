import { echo } from "../functions/echo";

let handleEcho = async (event: any, context: any, callback: any) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: echo(event.message),
        input: event
      },
      null,
      2
    )
  };
};

export { handleEcho };
