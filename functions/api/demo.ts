import { ApiEndpoint } from 'vitedge'

export default <ApiEndpoint>{
  async handler() {
    return {
      data: {
        hello: 'world',
      },
    }
  },
}
