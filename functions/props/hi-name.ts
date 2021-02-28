import { EdgeProps } from 'vitedge'

export default <EdgeProps>{
  async handler({ params }) {
    return {
      data: {
        message: `Hello from the API, ${params?.name || 'anonymous'}`,
      },
    }
  },
}
