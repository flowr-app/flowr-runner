import { hello } from "../functions/hello";

let handleHello = async (event: any, context: any, callback: any) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: hello(event.name),
        input: event
      },
      null,
      2
    )
  };
};

export { handleHello };
